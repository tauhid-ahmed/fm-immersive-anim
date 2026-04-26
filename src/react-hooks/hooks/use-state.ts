"use client";

import { useState, useCallback } from "react";

export function useState<T>(initial: T) {
  const [value, setValue] = useState<T>(initial);

  const update = useCallback((newValue: T | ((prev: T) => T)) => {
    setValue((prev) =>
      typeof newValue === "function"
        ? (newValue as (prev: T) => T)(prev)
        : newValue,
    );
  }, []);

  return [value, update] as const;
}
