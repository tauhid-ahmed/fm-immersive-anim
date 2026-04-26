"use client";

import { useEffect, useRef } from "react";

export function useEffect(
  callback: () => void | (() => void),
  deps?: React.DependencyList,
) {
  // This is a wrapper around React's useEffect
  // In real usage, you'd import from 'react' directly
  return { callback, deps };
}
