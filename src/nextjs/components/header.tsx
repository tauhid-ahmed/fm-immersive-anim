import Link from "next/link";

export default function Header() {
  return (
    <nav className="flex gap-4 p-4">
      <Link href="/1-server-components">1. Server</Link>
      <Link href="/2-routing">2. Routing</Link>
      <Link href="/3-data-fetching">3. Data</Link>
    </nav>
  );
}
