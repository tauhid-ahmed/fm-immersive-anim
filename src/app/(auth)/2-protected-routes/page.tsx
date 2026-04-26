"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    router.push("/");
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-8">
      <h1 className="mb-8 text-4xl font-bold">Protected Routes</h1>
      {isAuthenticated ? (
        <div className="text-center">
          <p className="text-xl">You are logged in!</p>
          <p className="text-gray-600">This is protected content.</p>
          <button
            onClick={handleLogout}
            className="mt-4 rounded bg-red-500 px-4 py-2 text-white"
          >
            Logout
          </button>
        </div>
      ) : (
        <div className="text-center">
          <p className="mb-4">Please log in to view protected content.</p>
          <button
            onClick={handleLogin}
            className="rounded bg-blue-500 px-4 py-2 text-white"
          >
            Login
          </button>
        </div>
      )}
    </div>
  );
}
