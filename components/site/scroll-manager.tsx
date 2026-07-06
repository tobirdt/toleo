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
    return Math.max(0, top - 8);
  }

  const revealed = section.offsetHeight - window.innerHeight;
  return top + Math.max(0, revealed) * 0.9;
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

function scheduleInitialPosition(initialHash: string) {
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      setInstantScroll(() => {
        if (!initialHash) {
          window.scrollTo({ top: 0, left: 0, behavior: "auto" });
          return;
        }

        const target = document.getElementById(initialHash.slice(1));
        if (target) window.scrollTo({ top: targetScrollTop(target), behavior: "auto" });
      });
    });
  });
}

export function ScrollManager() {
  useEffect(() => {
    const previousScrollRestoration = window.history.scrollRestoration;
    window.history.scrollRestoration = "manual";

    let frame = 0;
    let anchorNavigationUntil = 0;
    let delayedSync: number | null = null;
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

      anchorNavigationUntil = Date.now() + anchorNavigationHoldMs;

      /* Ordinary sections keep the browser's native (smooth) anchor jump.
         Pinned scrollytelling stages reveal their content across the scrub,
         so their top is an empty frame — for those we take over and jump
         instantly to the fully-revealed position, so a nav click shows the
         section already "loaded" instead of forcing the visitor to scrub
         the animation open. */
      if (section.dataset.pinned !== "true") return;

      event.preventDefault();
      setInstantScroll(() => {
        window.scrollTo({ top: targetScrollTop(section), left: 0, behavior: "auto" });
      });

      window.history.replaceState(window.history.state, "", `${cleanPath()}#${id}`);
      window.dispatchEvent(new CustomEvent<string>("toleo:section", { detail: id }));
    };

    const onHashChange = () => {
      anchorNavigationUntil = Date.now() + anchorNavigationHoldMs;
      scheduleSync();
    };

    scheduleInitialPosition(initialHash);

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
