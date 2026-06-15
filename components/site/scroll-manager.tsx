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

function updateHashForSection(id: string | null) {
  if (!id) return;

  const nextUrl = id === "top" ? cleanPath() : `${cleanPath()}#${id}`;
  const currentUrl = `${window.location.pathname}${window.location.search}${window.location.hash}`;

  if (nextUrl !== currentUrl) {
    window.history.replaceState(window.history.state, "", nextUrl);
  }
}

function scheduleInitialPosition() {
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      const hash = window.location.hash;

      setInstantScroll(() => {
        if (!hash) {
          window.scrollTo({ top: 0, left: 0, behavior: "auto" });
          return;
        }

        const target = document.getElementById(hash.slice(1));
        target?.scrollIntoView({ block: "start", behavior: "auto" });
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
      if (id && document.getElementById(id)) {
        anchorNavigationUntil = Date.now() + anchorNavigationHoldMs;
      }
    };

    const onHashChange = () => {
      anchorNavigationUntil = Date.now() + anchorNavigationHoldMs;
      scheduleSync();
    };

    scheduleInitialPosition();

    const initialSync = window.setTimeout(scheduleSync, 450);

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
