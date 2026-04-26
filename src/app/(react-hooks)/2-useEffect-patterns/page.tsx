"use client";

import { useEffect, useState } from "react";

export default function Page() {
  const [data, setData] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setData("Data loaded after 2 seconds!");
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-8">
      <h1 className="mb-8 text-4xl font-bold">useEffect Patterns</h1>
      {loading ? <p>Loading...</p> : <p className="text-xl">{data}</p>}
    </div>
  );
}
