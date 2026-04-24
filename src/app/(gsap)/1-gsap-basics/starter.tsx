"use client";

import { gsap } from "gsap";
import { SplitText } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { useEffect } from "react";
gsap.registerPlugin(SplitText);

export default function Page() {
  gsap.context(() => {
    useGSAP(() => {
      SplitText.create(".title", {
        type: "chars, words",
        charsClass: "letter",
        wordsClass: "word",
        wordDelimiter: "--",
      });
      gsap.to(".title .letter", {
        x: 100,
        stagger: 0.04,
      });
    });
  });

  return (
    <div className="bg-blue-300 text-black">
      <div className="flex h-screen items-end justify-left overflow-hidden">
        <h1 className="title font-black text-[min(20rem,30vw)] leading-none pb-[0.1em] text-left">
          NEW
          <br />
          TWEENS
        </h1>
      </div>
    </div>
  );
}
