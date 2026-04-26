"use client";

import { useState, useEffect } from "react";

type User = {
  name: string;
  email: string;
  role: "admin" | "user" | "guest";
} | null;

export function useUser() {
  const [user, setUser] = useState<User>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem("user");
    if (stored) {
      setUser(JSON.parse(stored));
    }
    setLoading(false);
  }, []);

  const updateUser = (userData: User) => {
    setUser(userData);
    if (userData) {
      localStorage.setItem("user", JSON.stringify(userData));
    } else {
      localStorage.removeItem("user");
    }
  };

  return { user, loading, updateUser };
}
