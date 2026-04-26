import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { Role, ROLES, RoleConfig } from "@/lib/roles";

type User = {
  name: string;
  email: string;
  role: Role;
};

type AuthCtx = {
  user: User | null;
  roleConfig: RoleConfig | null;
  login: (user: User) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthCtx | null>(null);
const STORAGE_KEY = "medicare_user";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      try { setUser(JSON.parse(raw)); } catch { /* ignore */ }
    }
  }, []);

  const login = (u: User) => {
    setUser(u);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(u));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem(STORAGE_KEY);
  };

  return (
    <AuthContext.Provider value={{ user, roleConfig: user ? ROLES[user.role] : null, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
};
