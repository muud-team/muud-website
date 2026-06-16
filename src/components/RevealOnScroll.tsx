"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function RevealOnScroll() {
  const pathname = usePathname();

  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal:not(.in)");
    const show = (el: Element) => el.classList.add("in");

    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((en) => {
            if (en.isIntersecting) {
              show(en.target);
              io.unobserve(en.target);
            }
          });
        },
        { threshold: 0.1, rootMargin: "0px 0px -6% 0px" }
      );

      reveals.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          show(el);
        } else {
          io.observe(el);
        }
      });

      return () => io.disconnect();
    }

    reveals.forEach(show);
  }, [pathname]);

  return null;
}
