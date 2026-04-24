"use client";

import { useGSAP } from "@gsap/react";
import { useRef } from "react";

import { SplitText } from "gsap/all";
import { GSDevTools } from "gsap/GSDevTools";
import gsap from "gsap";

gsap.registerPlugin(SplitText);
gsap.registerPlugin(GSDevTools);

export default function Page() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      SplitText.create(".title", {
        type: "words, chars",
        wordsClass: "title-word++",
        charsClass: "title-char++",
        mask: "chars",
      });
      const tl = gsap.timeline();

      tl.from(".title .title-word1 .title-char", {
        y: "100%",
        opacity: 0,
        duration: 1,
        stagger: 0.05,
        ease: "circ.out",
      });

      tl.from(
        ".tl-high",
        {
          scale: 0,
          duration: 1,
        },
        ">",
      );

      tl.from(
        ".title .title-word2 .title-char",
        {
          x: "-100%",
          opacity: 0,
          duration: 1,
          stagger: 0.05,
          ease: "circ.out",
        },
        "<",
      );

      tl.from(
        ".tl-main",
        {
          width: 0,
        },
        "<",
      );

      tl.from(
        ".title .title-word3 .title-char",
        {
          y: "100%",
          opacity: 0,
          duration: 1,
          stagger: 0.05,
          ease: "circ.out",
        },
        "-=0.5",
      );

      tl.from(
        ".title .title-word3 .title-char",
        {
          y: "100%",
          opacity: 0,
          duration: 1,
          stagger: 0.05,
          ease: "circ.out",
        },
        "-=0.5",
      );

      GSDevTools.create({ animation: tl });
    },
    { scope: containerRef },
  );

  return (
    <div
      ref={containerRef}
      className="bg-zinc-950 text-gray-100 flex h-screen items-center justify-center tracking-tighter"
    >
      <h1 className="title font-bold text-[min(20vh,10vw)] flex flex-col gap-[0.2em] leading-none text-left uppercase">
        <span className="tl-start relative block right-[1.5em] text-left">
          NEON
        </span>
        <span className="relative block">
          <span className="timeline">timeline</span>
          {/* Timeline */}
          <div className="absolute w-full -bottom-[0.04em] h-[0.04em]">
            <div className="tl-main absolute w-full bottom-0 h-[0.04em] bg-orange-500" />
            <div className="tl-start tl-high absolute left-0 top-1/2 -translate-y-1/2 h-[0.16em] w-[0.04em] bg-orange-500" />
          </div>
          {/* Dot */}
          <div className="tl-dot absolute -top-[0.08em] -right-[0.16em] h-[0.08em] aspect-square bg-orange-500 opacity-100" />
        </span>
        <span className="relative block left-[1.6em] text-right">basics</span>
      </h1>
    </div>
  );
}
