import Link from "next/link";

export default function Header() {
  return (
    <nav className="flex gap-4 p-4">
      <Link href="/1-motion-basics">1. Basics</Link>
      <Link href="/2-animate-presence">2. Presence</Link>
      <Link href="/3-layout-animations">3. Layout</Link>
    </nav>
  );
}
