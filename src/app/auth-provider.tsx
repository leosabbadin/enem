
"use client";

import React, { createContext, useContext, useEffect, useState, ReactNode, useCallback } from 'react';
import { User, onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { usePathname, useRouter } from 'next/navigation';
import { Loader2 } from 'lucide-react';
import { getDatabase, ref, onValue } from 'firebase/database';

interface AuthContextType {
  user: User | null;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType>({ user: null, loading: true });

// Function to get a cookie by name
function getCookie(name: string): string | undefined {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop()?.split(';').shift();
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  const handleSignOut = useCallback(async () => {
    await fetch('/api/logout', { method: 'POST' });
    await signOut(auth);
    router.push('/login');
  }, [router]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);

      if (user) {
        // User is logged in, start listening for session changes
        const db = getDatabase();
        const sessionRef = ref(db, `sessions/${user.uid}`);
        
        const unsubscribeDb = onValue(sessionRef, (snapshot) => {
          const data = snapshot.val();
          const serverSessionId = data?.sessionId;
          const clientSessionId = getCookie('clientSessionId');

          if (clientSessionId && serverSessionId && clientSessionId !== serverSessionId) {
            console.log("Session conflict detected. Signing out.");
            alert("Sua conta foi conectada em um novo dispositivo. Você será desconectado aqui.");
            handleSignOut();
          }
        });

        // Cleanup the database listener when the component unmounts or user changes
        return () => unsubscribeDb();
      }
    });

    return () => unsubscribe();
  }, [handleSignOut]);


  useEffect(() => {
    if (loading) return;

    const isAuthPage = pathname === '/login' || pathname === '/signup';
    
    if (!user && !isAuthPage) {
      router.push('/login');
    } else if (user && isAuthPage) {
      router.push('/');
    }
  }, [user, loading, pathname, router]);


  const isAuthPage = pathname === '/login' || pathname === '/signup';
  const showLoader = loading || (!user && !isAuthPage);

  if (showLoader) {
     return (
      <div className="flex items-center justify-center h-screen">
        <Loader2 className="h-12 w-12 animate-spin text-primary" />
      </div>
    );
  }
  
  return <AuthContext.Provider value={{ user, loading }}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  return useContext(AuthContext);
};
