"use client";

import { useMotionValue, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export function useMotionValue() {
  const x = useMotionValue(0);
  const [value, setValue] = useState(0);

  useEffect(() => {
    return x.on("change", (latest) => setValue(latest));
  }, [x]);

  return { x, value };
}
