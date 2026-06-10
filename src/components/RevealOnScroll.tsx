"use client";

import { useEffect } from "react";

export default function RevealOnScroll() {
  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");
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
      reveals.forEach((el) => io.observe(el));
      return () => io.disconnect();
    }

    reveals.forEach(show);
  }, []);

  return null;
}
