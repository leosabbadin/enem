
import { NextRequest, NextResponse } from 'next/server';
import { adminAuth } from '@/lib/firebase-admin';
import { cookies } from 'next/headers';
import { getDatabase } from 'firebase-admin/database';

export async function POST(req: NextRequest) {
  try {
    const auth = adminAuth();
    const { idToken } = await req.json();

    if (!idToken) {
      return NextResponse.json({ error: 'ID token is required' }, { status: 400 });
    }

    const decodedToken = await auth.verifyIdToken(idToken);
    const uid = decodedToken.uid;

    const expiresIn = 60 * 60 * 24 * 5 * 1000; // 5 days
    const sessionCookie = await auth.createSessionCookie(idToken, { expiresIn });
    
    // Generate a unique session ID and store it in the Realtime Database
    const sessionId = Date.now().toString();
    const db = getDatabase();
    await db.ref(`sessions/${uid}`).set({ sessionId });

    const options = {
      name: 'session',
      value: sessionCookie,
      maxAge: expiresIn,
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      path: '/',
    };

    cookies().set(options);
    
    // Also set the client-side session ID
    cookies().set('clientSessionId', sessionId, {
        maxAge: expiresIn,
        httpOnly: false, // Make it accessible to client-side script in AuthProvider
        secure: process.env.NODE_ENV === 'production',
        path: '/',
    });


    return NextResponse.json({ status: 'success' });
  } catch (error) {
    console.error('Error in login API:', error);
    const errorMessage = error instanceof Error ? error.message : 'An unknown server error occurred.';
    return NextResponse.json({ error: 'Session creation failed: ' + errorMessage }, { status: 500 });
  }
}
