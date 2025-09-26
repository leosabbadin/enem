
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import { adminAuth } from '@/lib/firebase-admin';

export async function POST() {
  try {
    const sessionCookie = cookies().get('session')?.value;
    
    if (sessionCookie) {
      // Verify the cookie and revoke it on the server side.
      const decodedToken = await adminAuth.verifySessionCookie(sessionCookie);
      await adminAuth.revokeRefreshTokens(decodedToken.sub);
    }
  } catch (error) {
    // This can happen if the cookie is invalid or expired.
    // We still want to clear the local cookie.
    console.error('Error verifying session cookie during logout:', error);
  } finally {
    // Always clear the cookie on the client side
    cookies().delete('session');
  }

  return NextResponse.json({ status: 'success' });
}
