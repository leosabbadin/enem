
import * as admin from 'firebase-admin';

function initializeAdmin() {
  if (admin.apps.length > 0) {
    return admin.app();
  }

  const serviceAccountString = process.env.FIREBASE_SERVICE_ACCOUNT_KEY;
  if (!serviceAccountString) {
    throw new Error('The FIREBASE_SERVICE_ACCOUNT_KEY environment variable is not set.');
  }
  
  try {
    const serviceAccount = JSON.parse(Buffer.from(serviceAccountString, 'base64').toString('utf-8'));

    return admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });
  } catch (error: any) {
    console.error('Error initializing Firebase Admin SDK. Make sure the FIREBASE_SERVICE_ACCOUNT_KEY is a valid base64 encoded JSON.', error);
    throw new Error('Could not initialize Firebase Admin SDK. Please check server logs.');
  }
}

export const adminApp = initializeAdmin();
export const adminAuth = admin.auth(adminApp);
