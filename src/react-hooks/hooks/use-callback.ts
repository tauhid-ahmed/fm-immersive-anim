"use client";

import { useCallback, useRef, useEffect } from "react";

export function useCallback<T extends (...args: any[]) => any>(
  callback: T,
  deps: React.DependencyList,
) {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  return ((...args: Parameters<T>) => callbackRef.current(...args)) as T;
}
