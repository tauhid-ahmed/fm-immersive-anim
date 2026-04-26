"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type User = {
  name: string;
  email: string;
  role: "admin" | "user" | "guest";
} | null;

type AuthContextType = {
  user: User;
  login: (
    name: string,
    email: string,
    role?: "admin" | "user" | "guest",
  ) => void;
  logout: () => void;
  isAuthenticated: boolean;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User>(null);

  const login = (
    name: string,
    email: string,
    role: "admin" | "user" | "guest" = "user",
  ) => {
    setUser({ name, email, role });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuthContext must be used within AuthProvider");
  }
  return context;
}

export default AuthProvider;
