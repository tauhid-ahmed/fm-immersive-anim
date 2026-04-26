// Server Component - renders on server by default
export default async function ServerComponent({
  children,
}: {
  children?: React.ReactNode;
}) {
  // This is a server component by default in Next.js App Router
  return (
    <div className="server-component p-4">
      {children || "Server rendered content"}
    </div>
  );
}
