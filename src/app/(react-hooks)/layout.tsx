import Layout from "@/components/layout/header";

export default function LayoutGroup({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Layout>{children}</Layout>;
}
