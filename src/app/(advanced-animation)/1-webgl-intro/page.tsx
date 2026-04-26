"use client";

import { useEffect, useRef } from "react";

export default function Page() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext("webgl");
    if (!gl) return;

    gl.clearColor(0.1, 0.1, 0.1, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-8">
      <h1 className="mb-8 text-4xl font-bold">WebGL Intro</h1>
      <canvas
        ref={canvasRef}
        width={400}
        height={300}
        className="rounded border bg-black"
      />
      <p className="mt-4 text-gray-600">Basic WebGL context setup</p>
    </div>
  );
}
