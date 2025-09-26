
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import { adminAuth } from '@/lib/firebase-admin';
import { getDatabase } from 'firebase-admin/database';

export async function POST() {
  if (!adminAuth) {
    return NextResponse.json({ error: 'Firebase Admin not initialized' }, { status: 500 });
  }
  const sessionCookie = cookies().get('session')?.value;
  if (!sessionCookie) {
    return NextResponse.json({ status: 'success' });
  }

  try {
    // Clear the session from the database
    const decodedToken = await adminAuth.verifySessionCookie(sessionCookie);
    const db = getDatabase();
    await db.ref(`sessions/${decodedToken.uid}`).remove();

    // Clear the cookies
    cookies().delete('session');
    cookies().delete('clientSessionId');

    return NextResponse.json({ status: 'success' });
  } catch (error) {
    console.error('Error during logout:', error);
    // Even if there's an error (e.g., cookie expired), clear the local cookies
    cookies().delete('session');
    cookies().delete('clientSessionId');
    return NextResponse.json({ status: 'error', message: 'Could not log out completely.' }, { status: 500 });
  }
}
