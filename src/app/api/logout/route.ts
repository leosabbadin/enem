
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import { adminAuth } from '@/lib/firebase-admin';
import { getDatabase } from 'firebase-admin/database';

export async function POST() {
  try {
    const auth = adminAuth();
    const sessionCookie = cookies().get('session')?.value;
    
    if (!sessionCookie) {
      // If there's no cookie, the user is already logged out.
      return NextResponse.json({ status: 'success' });
    }

    // Clear the session from the database
    const decodedToken = await auth.verifySessionCookie(sessionCookie);
    const db = getDatabase();
    await db.ref(`sessions/${decodedToken.uid}`).remove();
    
  } catch (error) {
    // This can happen if the cookie is invalid or expired.
    // We still want to clear the local cookies.
    console.error('Error verifying session cookie during logout:', error);
  } finally {
    // Always clear the cookies on the client side
    cookies().delete('session');
    cookies().delete('clientSessionId');
  }

  return NextResponse.json({ status: 'success' });
}
