"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeScene({
  geometry = "box",
}: {
  geometry?: "box" | "sphere";
}) {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 400 / 300, 0.1, 1000);
    camera.position.z = 3;

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(400, 300);
    mountRef.current.appendChild(renderer.domElement);

    const geo =
      geometry === "sphere"
        ? new THREE.SphereGeometry(1, 32, 32)
        : new THREE.BoxGeometry(1, 1, 1);
    const mat = new THREE.MeshBasicMaterial({
      color: 0x00ff00,
      wireframe: true,
    });
    const mesh = new THREE.Mesh(geo, mat);
    scene.add(mesh);

    const animate = () => {
      requestAnimationFrame(animate);
      mesh.rotation.x += 0.01;
      mesh.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      mountRef.current?.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, [geometry]);

  return <div ref={mountRef} />;
}
