"use client";

import { useRouter } from "next/navigation";
import { useAuthContext } from "./auth-provider";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isAuthenticated } = useAuthContext();
  const router = useRouter();

  if (!isAuthenticated) {
    router.push("/1-auth-context");
    return null;
  }

  return <>{children}</>;
}
