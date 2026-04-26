import Link from "next/link";

export default function Header() {
  return (
    <nav className="flex gap-4 p-4">
      <Link href="/1-webgl-intro">1. WebGL</Link>
      <Link href="/2-threejs-basics">2. Three.js</Link>
      <Link href="/3-shader-animations">3. Shaders</Link>
    </nav>
  );
}
