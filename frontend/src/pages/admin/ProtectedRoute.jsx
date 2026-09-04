import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { authApi } from '../../services/apiService';

const ProtectedRoute = ({ children }) => {
  const [checking, setChecking] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    let cancelled = false;
    const token = localStorage.getItem('auth_token');
    if (!token) {
      setChecking(false);
      return;
    }
    authApi.me()
      .then((data) => {
        if (!cancelled) setUser(data);
      })
      .catch(() => {
        if (!cancelled) localStorage.removeItem('auth_token');
      })
      .finally(() => {
        if (!cancelled) setChecking(false);
      });
    return () => { cancelled = true; };
  }, []);

  if (checking) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#000B18]">
        <p className="text-gray-400 text-sm">Checking login...</p>
      </div>
    );
  }

  if (!user) return <Navigate to="/admin/login" replace />;

  return children(user);
};

export default ProtectedRoute;
