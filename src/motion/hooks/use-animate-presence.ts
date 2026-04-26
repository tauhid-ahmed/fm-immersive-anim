"use client";

import { useState, useCallback } from "react";

export function useAnimatePresence(initial = false) {
  const [isPresent, setIsPresent] = useState(initial);

  const mount = useCallback(() => setIsPresent(true), []);
  const unmount = useCallback(() => setIsPresent(false), []);

  return { isPresent, mount, unmount };
}
