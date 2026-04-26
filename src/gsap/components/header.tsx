import Link from "next/link";

export default function Header() {
  return (
    <nav className="flex gap-4 p-4">
      <Link href="/1-gsap-basics">1. Basics</Link>
      <Link href="/2-css-version">2. CSS</Link>
      <Link href="/3-timelines">3. Timelines</Link>
      <Link href="/4-scroll-trigger">4. Scroll</Link>
      <Link href="/5-follow-scroll">5. Follow</Link>
    </nav>
  );
}
