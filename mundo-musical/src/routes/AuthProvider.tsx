import { useState, type ReactNode } from "react";
import { AuthContext } from "@/contexts/authContext";
import { authSubject } from "@/observer/AuthSubject";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => authSubject.getAuthStatus());

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};