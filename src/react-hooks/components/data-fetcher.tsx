"use client";

import { useEffect, useState } from "react";

export default function DataFetcher({
  url,
  children,
}: {
  url: string;
  children: (data: any) => React.ReactNode;
}) {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((d) => {
        setData(d);
        setLoading(false);
      });
  }, [url]);

  if (loading) return <div>Loading...</div>;
  return <>{children(data)}</>;
}
