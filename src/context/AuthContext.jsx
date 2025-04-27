import React, { createContext, useContext, useState, useEffect } from 'react';
import { auth } from '../firebase';
import { onAuthStateChanged, onIdTokenChanged } from 'firebase/auth';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(null);

  useEffect(() => {
    // Listen for auth state changes
    const unsubscribeAuth = onAuthStateChanged(auth, (currentUser) => {
      console.log('Auth state changed:', currentUser);
      setUser(currentUser);
      setLoading(false);
    });

    // Listen for token changes and force refresh every 30 minutes
    const unsubscribeToken = onIdTokenChanged(auth, async (user) => {
      if (user) {
        const token = await user.getIdToken(true);
        setToken(token);

        // Force token refresh every 30 minutes
        setTimeout(async () => {
          const newToken = await user.getIdToken(true);
          setToken(newToken);
        }, 30 * 60 * 1000); // 30 minutes
      } else {
        setToken(null);
      }
    });

    // Cleanup
    return () => {
      unsubscribeAuth();
      unsubscribeToken();
    };
  }, []);

  // Add session timeout after 2 hours of inactivity
  useEffect(() => {
    if (!user) return;

    let inactivityTimeout;

    const resetInactivityTimer = () => {
      clearTimeout(inactivityTimeout);
      inactivityTimeout = setTimeout(async () => {
        console.log('Session timeout due to inactivity');
        try {
          await auth.signOut();
        } catch (error) {
          console.error('Error signing out:', error);
        }
      }, 2 * 60 * 60 * 1000); // 2 hours
    };

    // Reset timer on user activity
    const events = ['mousedown', 'keydown', 'scroll', 'touchstart'];
    events.forEach(event => {
      window.addEventListener(event, resetInactivityTimer);
    });

    resetInactivityTimer();

    return () => {
      clearTimeout(inactivityTimeout);
      events.forEach(event => {
        window.removeEventListener(event, resetInactivityTimer);
      });
    };
  }, [user]);

  const value = {
    user,
    loading,
    token,
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
      </div>
    );
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
