"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";

export default function useGsap() {
  const contextRef = useRef<gsap.Context | null>(null);

  useEffect(() => {
    contextRef.current = gsap.context(() => {});
    return () => contextRef.current?.revert();
  }, []);

  return contextRef;
}
