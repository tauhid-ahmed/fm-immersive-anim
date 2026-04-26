"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useScrollAnimation(
  ref: React.RefObject<HTMLElement>,
  animation: gsap.TweenVars,
) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    gsap.fromTo(el, animation, {
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });
  }, [ref, animation]);
}
