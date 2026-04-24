import { Header } from "@/components/layout/header";


export default function GSAPLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   
      <> <Header />
        {children}
      </>
  );
}
