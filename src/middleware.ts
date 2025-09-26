
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { adminAuth } from './lib/firebase-admin';
import { getDatabase } from 'firebase-admin/database';

// Force the middleware to run on the Node.js runtime
export const runtime = 'nodejs';

async function verifySession(sessionCookie: string) {
  if (!adminAuth) {
    console.error("Firebase Admin not initialized. Skipping session verification.");
    return null;
  }
  try {
    const decodedToken = await adminAuth.verifySessionCookie(sessionCookie, true);
    // Use the Admin SDK to get a reference to the database
    const db = getDatabase();
    const sessionRef = db.ref(`sessions/${decodedToken.uid}`);
    const snapshot = await sessionRef.once('value');

    if (snapshot.exists()) {
      // Here you might want to compare session IDs if you stored one
      return decodedToken;
    }
    return null;
  } catch (error) {
    console.error('Error verifying session in middleware:', error);
    return null;
  }
}

export async function middleware(request: NextRequest) {
  const sessionCookie = request.cookies.get('session')?.value;
  const { pathname } = request.nextUrl;

  const isAuthPage = pathname === '/login' || pathname === '/signup';

  if (!sessionCookie) {
    if (isAuthPage) {
      return NextResponse.next();
    }
    return NextResponse.redirect(new URL('/login', request.url));
  }

  const decodedToken = await verifySession(sessionCookie);

  if (!decodedToken) {
     const response = NextResponse.redirect(new URL('/login', request.url));
     // Clear invalid cookies
     response.cookies.delete('session');
     response.cookies.delete('clientSessionId');
     return response;
  }
  
  if (isAuthPage) {
    return NextResponse.redirect(new URL('/', request.url));
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
