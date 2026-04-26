import Link from "next/link";

export default function Header() {
  return (
    <nav className="flex gap-4 p-4">
      <Link href="/1-auth-context">1. Context</Link>
      <Link href="/2-protected-routes">2. Protected</Link>
      <Link href="/3-role-based-access">3. RBAC</Link>
    </nav>
  );
}
