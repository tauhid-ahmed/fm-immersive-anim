"use client";

import { useEffect, useRef } from "react";

const vertexShader = `
  void main() {
    gl_Position = vec4(position, 1.0);
  }
`;

const fragmentShader = `
  uniform float u_time;
  void main() {
    vec2 uv = gl_FragCoord.xy / 500.0;
    float r = sin(uv.x * 10.0 + u_time) * 0.5 + 0.5;
    float g = sin(uv.y * 10.0 + u_time) * 0.5 + 0.5;
    gl_FragColor = vec4(r, g, 0.5, 1.0);
  }
`;

export default function Page() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext("webgl");
    if (!gl) return;

    // Shader compilation would go here
    // This is a placeholder for shader animation demo
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-8">
      <h1 className="mb-8 text-4xl font-bold">Shader Animations</h1>
      <canvas
        ref={canvasRef}
        width={400}
        height={300}
        className="rounded border bg-black"
      />
      <p className="mt-4 text-gray-600">GLSL shader animations</p>
    </div>
  );
}
