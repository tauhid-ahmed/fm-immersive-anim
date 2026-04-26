"use client";

import { useState, useEffect } from "react";

function useWindowSize() {
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return size;
}

export default function Page() {
  const size = useWindowSize();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-8">
      <h1 className="mb-8 text-4xl font-bold">Custom Hooks</h1>
      <p className="text-xl">Window Size:</p>
      <p className="text-2xl">
        {size.width} x {size.height}
      </p>
    </div>
  );
}
