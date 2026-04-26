"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type AuthContextType = {
  user: { name: string; email: string } | null;
  login: (name: string, email: string) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<{ name: string; email: string } | null>(
    null,
  );

  const login = (name: string, email: string) => {
    setUser({ name, email });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
}

export default function Page() {
  const { user, login, logout } = useAuth();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-8">
      <h1 className="mb-8 text-4xl font-bold">Auth Context</h1>
      {user ? (
        <div className="text-center">
          <p className="text-xl">Welcome, {user.name}!</p>
          <p className="text-gray-600">{user.email}</p>
          <button
            onClick={logout}
            className="mt-4 rounded bg-red-500 px-4 py-2 text-white"
          >
            Logout
          </button>
        </div>
      ) : (
        <button
          onClick={() => login("John Doe", "john@example.com")}
          className="rounded bg-blue-500 px-4 py-2 text-white"
        >
          Login
        </button>
      )}
    </div>
  );
}
