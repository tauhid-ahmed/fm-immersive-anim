"use client";

import { useRef, useEffect, useState } from "react";
import * as THREE from "three";

export function useThree() {
  const [scene, setScene] = useState<THREE.Scene | null>(null);
  const [camera, setCamera] = useState<THREE.PerspectiveCamera | null>(null);
  const [renderer, setRenderer] = useState<THREE.WebGLRenderer | null>(null);

  useEffect(() => {
    const s = new THREE.Scene();
    const c = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const r = new THREE.WebGLRenderer();
    r.setSize(400, 300);

    setScene(s);
    setCamera(c);
    setRenderer(r);
  }, []);

  return { scene, camera, renderer };
}
