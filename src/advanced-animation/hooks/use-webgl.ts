"use client";

import { useRef, useEffect, useState } from "react";

export function useWebGL(canvasRef: React.RefObject<HTMLCanvasElement>) {
  const [gl, setGl] = useState<WebGLRenderingContext | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("webgl");
    setGl(context);
  }, [canvasRef]);

  return gl;
}
