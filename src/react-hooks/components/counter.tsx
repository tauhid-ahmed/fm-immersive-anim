"use client";

import { useState } from "react";

export default function Counter({ initial = 0 }: { initial?: number }) {
  const [count, setCount] = useState(initial);

  return (
    <div className="flex items-center gap-4">
      <button
        onClick={() => setCount(count - 1)}
        className="rounded bg-red-500 px-4 py-2"
      >
        -
      </button>
      <span className="text-2xl">{count}</span>
      <button
        onClick={() => setCount(count + 1)}
        className="rounded bg-green-500 px-4 py-2"
      >
        +
      </button>
    </div>
  );
}
