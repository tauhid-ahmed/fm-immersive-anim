import Link from "next/link";

export default function Header() {
  return (
    <nav className="flex gap-4 p-4">
      <Link href="/1-useState-deep-dive">1. useState</Link>
      <Link href="/2-useEffect-patterns">2. useEffect</Link>
      <Link href="/3-custom-hooks">3. Custom</Link>
    </nav>
  );
}
