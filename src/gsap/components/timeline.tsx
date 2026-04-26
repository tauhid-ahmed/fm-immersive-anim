"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";

export default function Timeline({
  children,
  stagger = 0.1,
}: {
  children: React.ReactNode;
  stagger?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const tl = gsap.timeline();
    tl.from(el.children, {
      y: 20,
      opacity: 0,
      stagger,
      duration: 0.5,
    });
  }, [stagger]);

  return <div ref={ref}>{children}</div>;
}
