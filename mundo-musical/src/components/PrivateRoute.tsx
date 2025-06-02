import React, { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { authSubject } from '@/observer/AuthSubject';
import { SimpleObserver } from '@/observer/SimpleObserver';

export default function PrivateRoute() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const observer = new SimpleObserver((status) => {
      setIsAuthenticated(status);
    });

    authSubject.subscribe(observer);

    setIsAuthenticated(authSubject.getAuthStatus());

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
