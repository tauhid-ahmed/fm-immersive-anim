import Link from "next/link";

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-8">
      <h1 className="mb-8 text-4xl font-bold">Next.js Routing</h1>
      <p className="mb-4">Learn about App Router and dynamic routes</p>
      <nav className="flex gap-4">
        <Link
          href="/2-routing/nested"
          className="rounded bg-blue-500 px-4 py-2 text-white"
        >
          Nested Route
        </Link>
        <Link
          href="/2-routing/dynamic/[id]"
          className="rounded bg-green-500 px-4 py-2 text-white"
        >
          Dynamic Route
        </Link>
      </nav>
    </div>
  );
}
