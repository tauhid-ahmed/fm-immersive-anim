"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollTrigger({
  children,
  animation = { y: 50, opacity: 0 },
}: {
  children: React.ReactNode;
  animation?: { y: number; opacity: number };
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    gsap.fromTo(el, animation, {
      y: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });
  }, [animation]);

  return <div ref={ref}>{children}</div>;
}
