"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    // Reveal-on-scroll
    const revealEls = document.querySelectorAll<HTMLElement>(".reveal");
    let revealObserver: IntersectionObserver | undefined;

    if ("IntersectionObserver" in window && revealEls.length) {
      revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("in");
              revealObserver?.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12 }
      );
      revealEls.forEach((el) => revealObserver?.observe(el));
    } else {
      revealEls.forEach((el) => el.classList.add("in"));
    }

    // Count-up numbers
    function animateCounter(el: HTMLElement) {
      const target = parseFloat(el.getAttribute("data-count") || "0");
      const suffix = el.getAttribute("data-suffix") || "";
      const duration = 1200;
      const start = performance.now();
      function tick(now: number) {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.round(target * eased) + suffix;
        if (progress < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    }

    const counters = document.querySelectorAll<HTMLElement>("[data-count]");
    let counterObserver: IntersectionObserver | undefined;

    if ("IntersectionObserver" in window && counters.length) {
      counterObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              animateCounter(entry.target as HTMLElement);
              counterObserver?.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.4 }
      );
      counters.forEach((el) => counterObserver?.observe(el));
    }

    // FAQ accordion
    const faqItems = document.querySelectorAll<HTMLElement>(".faq-item");
    const faqHandlers: Array<{ el: Element; handler: () => void }> = [];

    faqItems.forEach((item) => {
      const q = item.querySelector(".faq-q");
      if (!q) return;
      const handler = () => {
        const isOpen = item.classList.contains("open");
        document.querySelectorAll(".faq-item.open").forEach((other) => {
          if (other !== item) other.classList.remove("open");
        });
        item.classList.toggle("open", !isOpen);
      };
      q.addEventListener("click", handler);
      faqHandlers.push({ el: q, handler });
    });

    return () => {
      revealObserver?.disconnect();
      counterObserver?.disconnect();
      faqHandlers.forEach(({ el, handler }) => el.removeEventListener("click", handler));
    };
  }, [pathname]);

  return null;
}
