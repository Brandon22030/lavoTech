
import { useState, useEffect } from 'react';

// Simple hook to check if user is logged in
// In a real app, this would connect to an authentication service
export const useLoginState = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  
  useEffect(() => {
    // Check localStorage for auth token
    const token = localStorage.getItem('authToken');
    setIsLoggedIn(!!token);
  }, []);

  const login = (email: string, password: string): Promise<boolean> => {
    return new Promise((resolve) => {
      // Simulate login API call
      setTimeout(() => {
        // For demo purposes, accept any non-empty email and password
        if (email && password) {
          // Store a fake token
          localStorage.setItem('authToken', 'demo-token-' + Date.now());
          setIsLoggedIn(true);
          resolve(true);
        } else {
          resolve(false);
        }
      }, 500);
    });
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    setIsLoggedIn(false);
  };

  return { isLoggedIn, login, logout };
};
