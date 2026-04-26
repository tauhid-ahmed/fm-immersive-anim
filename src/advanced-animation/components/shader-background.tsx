"use client";

import { useRef, useEffect } from "react";

export default function ShaderBackground({
  shader = `
    void main() {
      vec2 uv = gl_FragCoord.xy / 500.0;
      gl_FragColor = vec4(uv.x, uv.y, 0.5, 1.0);
    }
  `,
}: {
  shader?: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    // Shader setup would go here
  }, [shader]);

  return (
    <canvas
      ref={canvasRef}
      width={500}
      height={500}
      className="fixed inset-0 -z-10"
    />
  );
}
