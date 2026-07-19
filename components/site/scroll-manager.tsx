"use client";

import { useEffect } from "react";

const sectionHashSelector = "section[id]";
const anchorNavigationHoldMs = 1400;

function cleanPath() {
  return `${window.location.pathname}${window.location.search}`;
}

function setInstantScroll(callback: () => void) {
  const root = document.documentElement;
  const previousScrollBehavior = root.style.scrollBehavior;

  root.style.scrollBehavior = "auto";
  callback();

  requestAnimationFrame(() => {
    root.style.scrollBehavior = previousScrollBehavior;
  });
}

function activeSectionId() {
  const sections = Array.from(document.querySelectorAll<HTMLElement>(sectionHashSelector));
  if (!sections.length) return null;

  const marker = Math.min(window.innerHeight * 0.44, 360);
  let bestId = sections[0].id;
  let bestDistance = Number.POSITIVE_INFINITY;

  for (const section of sections) {
    const rect = section.getBoundingClientRect();

    if (rect.top <= marker && rect.bottom >= marker) {
      return section.id;
    }

    const distance = Math.abs(rect.top - marker);
    if (distance < bestDistance) {
      bestDistance = distance;
      bestId = section.id;
    }
  }

  return bestId;
}

/**
 * Where to land when jumping to a section by link. Pinned scrollytelling
 * stages reveal their content across the scrubbed scroll, so the very top of
 * such a section is an (intentionally) empty frame. For those we return the
 * scroll offset at ~90% progress, where the choreography has finished and the
 * content reads as "already there" — no need to scrub through the animation.
 * Ordinary sections just return their top.
 */
function targetScrollTop(section: HTMLElement) {
  const top = section.getBoundingClientRect().top + window.scrollY;
  const pinned = section.dataset.pinned === "true";

  if (!pinned) {
    const scrollPadding = Number.parseFloat(
      window.getComputedStyle(document.documentElement).scrollPaddingTop
    );
    return Math.max(0, top - (Number.isFinite(scrollPadding) ? scrollPadding : 8));
  }

  const revealed = section.offsetHeight - window.innerHeight;
  return top + Math.max(0, revealed) * 0.9;
}

function jumpToRevealed(section: HTMLElement) {
  setInstantScroll(() =>
    window.scrollTo({ top: targetScrollTop(section), left: 0, behavior: "auto" })
  );
}

function updateHashForSection(id: string | null) {
  if (!id) return;

  const nextUrl = id === "top" ? cleanPath() : `${cleanPath()}#${id}`;
  const currentUrl = `${window.location.pathname}${window.location.search}${window.location.hash}`;

  if (nextUrl !== currentUrl) {
    window.history.replaceState(window.history.state, "", nextUrl);
    // Let the header highlight the section that is currently in view
    window.dispatchEvent(new CustomEvent<string>("toleo:section", { detail: id }));
  }
}

/**
 * Position the page for the initial URL hash and keep re-asserting the target
 * across the ~700ms settle window. A single early scroll is unreliable: the
 * web-font swap, the pinned-stage height being applied via a state commit, and
 * images loading all reflow the page *after* the first scroll, which would
 * otherwise strand a deep link or a language switch far from its section.
 * Re-computing and re-applying the target a few times (and again once fonts are
 * ready) makes it land correctly regardless of timing. Any real user scroll
 * cancels the re-asserts immediately. Returns a cleanup function.
 */
function positionForInitialHash(initialHash: string) {
  if (!initialHash) {
    requestAnimationFrame(() =>
      requestAnimationFrame(() =>
        setInstantScroll(() => window.scrollTo({ top: 0, left: 0, behavior: "auto" }))
      )
    );
    return () => {};
  }

  const id = initialHash.slice(1);
  const scrollKeys = ["ArrowDown", "ArrowUp", "PageDown", "PageUp", "Home", "End", " "];
  const settleMs = 900;
  const start = performance.now();
  let cancelled = false;
  let raf = 0;

  const stop = () => {
    if (cancelled) return;
    cancelled = true;
    if (raf) window.cancelAnimationFrame(raf);
    window.removeEventListener("wheel", onWheel);
    window.removeEventListener("touchmove", onWheel);
    window.removeEventListener("keydown", onKey);
  };

  const onWheel = () => stop();
  const onKey = (event: KeyboardEvent) => {
    if (scrollKeys.includes(event.key)) stop();
  };

  /* Re-assert the target every frame through the settle window, reading fresh
     geometry each time. Early frames may land at the section top (the pinned
     height / web font not applied yet); later frames self-correct to the
     revealed position and hold it against reflow. A single scroll can't get
     stranded because we keep pulling it back until layout settles. */
  const tick = () => {
    if (cancelled) return;
    const target = document.getElementById(id);
    if (target) {
      const desired = targetScrollTop(target);
      if (Math.abs(window.scrollY - desired) > 1) {
        setInstantScroll(() => window.scrollTo({ top: desired, behavior: "auto" }));
      }
    }
    if (performance.now() - start < settleMs) {
      raf = window.requestAnimationFrame(tick);
    } else {
      stop();
    }
  };

  window.addEventListener("wheel", onWheel, { passive: true });
  window.addEventListener("touchmove", onWheel, { passive: true });
  window.addEventListener("keydown", onKey);
  raf = window.requestAnimationFrame(tick);

  return stop;
}

export function ScrollManager() {
  useEffect(() => {
    const previousScrollRestoration = window.history.scrollRestoration;
    window.history.scrollRestoration = "manual";

    let frame = 0;
    let anchorNavigationUntil = 0;
    let delayedSync: number | null = null;
    let cancelInitialPosition = () => {};
    const initialHash = window.location.hash;

    if (initialHash) {
      anchorNavigationUntil = Date.now() + anchorNavigationHoldMs;
    }

    const sync = () => {
      frame = 0;

      if (Date.now() < anchorNavigationUntil) {
        if (delayedSync) window.clearTimeout(delayedSync);
        delayedSync = window.setTimeout(sync, anchorNavigationUntil - Date.now() + 80);
        return;
      }

      updateHashForSection(activeSectionId());
    };

    const scheduleSync = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(sync);
    };

    const onAnchorClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const anchor = target.closest<HTMLAnchorElement>('a[href^="#"]');
      if (!anchor) return;

      const hash = anchor.getAttribute("href");
      if (!hash || hash === "#") return;

      const id = hash.slice(1);
      const section = document.getElementById(id);
      if (!section) return;

      // A deliberate nav click supersedes any in-flight initial positioning.
      cancelInitialPosition();
      anchorNavigationUntil = Date.now() + anchorNavigationHoldMs;

      /* Ordinary sections keep the browser's native (smooth) anchor jump.
         Pinned scrollytelling stages reveal their content across the scrub,
         so their top is an empty frame — for those we take over and jump
         instantly to the fully-revealed position, so a nav click shows the
         section already "loaded" instead of forcing the visitor to scrub
         the animation open. */
      if (section.dataset.pinned !== "true") return;

      event.preventDefault();
      jumpToRevealed(section);

      window.history.replaceState(window.history.state, "", `${cleanPath()}#${id}`);
      window.dispatchEvent(new CustomEvent<string>("toleo:section", { detail: id }));
    };

    const onHashChange = () => {
      anchorNavigationUntil = Date.now() + anchorNavigationHoldMs;

      // Back/forward or a URL-bar hash edit lands on a pinned stage at its
      // empty top otherwise — pull it to the revealed frame like a nav click.
      const id = window.location.hash.slice(1);
      const section = id ? document.getElementById(id) : null;
      if (section && section.dataset.pinned === "true") {
        jumpToRevealed(section);
      }

      scheduleSync();
    };

    cancelInitialPosition = positionForInitialHash(initialHash);

    const initialSync = window.setTimeout(
      scheduleSync,
      initialHash ? anchorNavigationHoldMs + 120 : 450
    );

    window.addEventListener("scroll", scheduleSync, { passive: true });
    window.addEventListener("resize", scheduleSync);
    window.addEventListener("hashchange", onHashChange);
    document.addEventListener("click", onAnchorClick);

    return () => {
      window.history.scrollRestoration = previousScrollRestoration;
      cancelInitialPosition();
      window.clearTimeout(initialSync);
      if (delayedSync) window.clearTimeout(delayedSync);
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", scheduleSync);
      window.removeEventListener("resize", scheduleSync);
      window.removeEventListener("hashchange", onHashChange);
      document.removeEventListener("click", onAnchorClick);
    };
  }, []);

  return null;
}
