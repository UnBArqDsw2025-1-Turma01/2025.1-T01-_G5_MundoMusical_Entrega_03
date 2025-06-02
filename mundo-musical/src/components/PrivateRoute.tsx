// PrivateRoute.tsx
import React, { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { authSubject } from '@/observer/AuthSubject';
import { SimpleObserver } from '@/observer/SimpleObserver';

export default function PrivateRoute() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    // Criar um observer simples que atualiza o state
    const observer = new SimpleObserver((status) => {
      setIsAuthenticated(status);
    });

    // Registrar observer
    authSubject.subscribe(observer);

    // Atualizar status inicial
    setIsAuthenticated(authSubject.getAuthStatus());

    // Cleanup: remover observer na desmontagem
    return () => {
      authSubject.unsubscribe(observer);
    };
  }, []);

  if (isAuthenticated === null) {
    return <div>Carregando...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}
