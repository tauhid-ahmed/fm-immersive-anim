"use client";

import { useState } from "react";

type Role = "admin" | "user" | "guest";

export default function Page() {
  const [role, setRole] = useState<Role>("guest");

  const canAccessAdmin = role === "admin";
  const canAccessUser = role === "admin" || role === "user";

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-8">
      <h1 className="mb-8 text-4xl font-bold">Role Based Access</h1>
      <div className="mb-8 flex gap-4">
        <button
          onClick={() => setRole("guest")}
          className={`rounded px-4 py-2 ${role === "guest" ? "bg-gray-800 text-white" : "bg-gray-200"}`}
        >
          Guest
        </button>
        <button
          onClick={() => setRole("user")}
          className={`rounded px-4 py-2 ${role === "user" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
        >
          User
        </button>
        <button
          onClick={() => setRole("admin")}
          className={`rounded px-4 py-2 ${role === "admin" ? "bg-red-500 text-white" : "bg-gray-200"}`}
        >
          Admin
        </button>
      </div>
      <div className="space-y-4">
        <div
          className={`rounded border p-4 ${canAccessUser ? "bg-green-100" : "bg-red-100"}`}
        >
          <h2 className="font-bold">User Content</h2>
          <p>{canAccessUser ? "✓ Access granted" : "✗ Access denied"}</p>
        </div>
        <div
          className={`rounded border p-4 ${canAccessAdmin ? "bg-green-100" : "bg-red-100"}`}
        >
          <h2 className="font-bold">Admin Content</h2>
          <p>{canAccessAdmin ? "✓ Access granted" : "✗ Access denied"}</p>
        </div>
      </div>
    </div>
  );
}
