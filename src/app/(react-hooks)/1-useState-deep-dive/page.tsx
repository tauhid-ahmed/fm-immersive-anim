"use client";

import { useState, useCallback } from "react";

export default function Page() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  const increment = useCallback(() => setCount((c) => c + 1), []);
  const decrement = useCallback(() => setCount((c) => c - 1), []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-8">
      <h1 className="mb-8 text-4xl font-bold">useState Deep Dive</h1>
      <div className="mb-4 text-6xl font-bold">{count}</div>
      <div className="flex gap-4">
        <button
          onClick={decrement}
          className="rounded bg-red-500 px-4 py-2 text-white"
        >
          -
        </button>
        <button
          onClick={increment}
          className="rounded bg-green-500 px-4 py-2 text-white"
        >
          +
        </button>
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type something..."
        className="mt-8 rounded border p-2"
      />
      <p className="mt-4">You typed: {input}</p>
    </div>
  );
}
