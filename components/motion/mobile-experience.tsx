"use client";

import { useEffect } from "react";

const mobileQuery = "(max-width: 700px)";
const reducedMotionQuery = "(prefers-reduced-motion: reduce)";
const sectionSelector = ".home-main > section[id]:not(#top)";
const motionItemSelector = [
  ".profile-section .profile-copy",
  ".profile-section .content-links",
  ".profile-section .capabilities",
  ".profile-section .image-frame",
  ".portfolio-section .portfolio-h-tile",
  ".services-section .service-index > div",
  ".services-section .section-more-link",
  ".project-section .project-col",
  ".process-section .process-steps",
  ".process-section .process-step",
  ".investment-section .investment-grid > div:first-child",
  ".investment-section .investment-list > div",
  ".contact-section .contact-panel",
].join(",");

/**
 * Progressively enhances the homepage on phones. The class enables a gentle
 * proximity snap on the document scroller. Chapter headings and their actual
 * content elements are observed separately, so long sections do not finish
 * animating before their deeper rows enter the viewport. All content remains
 * fully visible in the server-rendered, no-JS and reduced-motion versions.
 */
export function MobileExperience() {
  useEffect(() => {
    const root = document.documentElement;
    const mobile = window.matchMedia(mobileQuery);
    const reducedMotion = window.matchMedia(reducedMotionQuery);
    let sectionObserver: IntersectionObserver | null = null;
    let itemObserver: IntersectionObserver | null = null;

    const sections = () =>
      Array.from(document.querySelectorAll<HTMLElement>(sectionSelector));
    const motionItems = () =>
      Array.from(document.querySelectorAll<HTMLElement>(motionItemSelector));

    const reset = () => {
      sectionObserver?.disconnect();
      itemObserver?.disconnect();
      sectionObserver = null;
      itemObserver = null;
      root.classList.remove("home-mobile-experience");
      sections().forEach((section) => delete section.dataset.mobileRevealed);
      motionItems().forEach((item) => delete item.dataset.mobileMotionItem);
    };

    const setup = () => {
      reset();

      if (!mobile.matches || reducedMotion.matches) return;

      sectionObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;

            const section = entry.target as HTMLElement;
            section.dataset.mobileRevealed = "true";
            sectionObserver?.unobserve(section);
          });
        },
        {
          rootMargin: "0px 0px -12% 0px",
          threshold: 0.08,
        }
      );

      itemObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;

            const item = entry.target as HTMLElement;
            item.dataset.mobileMotionItem = "revealed";
            itemObserver?.unobserve(item);
          });
        },
        {
          rootMargin: "0px 0px -14% 0px",
          threshold: 0.08,
        }
      );

      sections().forEach((section) => {
        const rect = section.getBoundingClientRect();

        if (rect.top < window.innerHeight * 0.9 && rect.bottom > 0) {
          section.dataset.mobileRevealed = "true";
        } else {
          sectionObserver?.observe(section);
        }
      });

      motionItems().forEach((item) => {
        const rect = item.getBoundingClientRect();

        if (rect.top < window.innerHeight * 0.9 && rect.bottom > 0) {
          item.dataset.mobileMotionItem = "revealed";
        } else {
          item.dataset.mobileMotionItem = "pending";
          itemObserver?.observe(item);
        }
      });

      root.classList.add("home-mobile-experience");
    };

    setup();
    mobile.addEventListener("change", setup);
    reducedMotion.addEventListener("change", setup);

    return () => {
      reset();
      mobile.removeEventListener("change", setup);
      reducedMotion.removeEventListener("change", setup);
    };
  }, []);

  return null;
}
