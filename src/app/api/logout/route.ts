
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import { adminAuth } from '@/lib/firebase-admin';
import { getDatabase, ref, remove } from 'firebase/database';

export async function POST() {
  const sessionCookie = cookies().get('session')?.value;
  if (!sessionCookie) {
    return NextResponse.json({ status: 'success' });
  }

  try {
    // Clear the session from the database
    const decodedToken = await adminAuth.verifySessionCookie(sessionCookie);
    const db = getDatabase();
    await remove(ref(db, `sessions/${decodedToken.uid}`));

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
