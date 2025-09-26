
import * as admin from 'firebase-admin';

// This function ensures that the Firebase Admin SDK is initialized only once.
function initializeAdmin() {
  if (admin.apps.length > 0) {
    return admin.app();
  }

  const serviceAccountString = process.env.FIREBASE_SERVICE_ACCOUNT_KEY;
  if (!serviceAccountString) {
    throw new Error('The FIREBASE_SERVICE_ACCOUNT_KEY environment variable is not set.');
  }

  try {
    const serviceAccount = JSON.parse(serviceAccountString);
    return admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });
  } catch (error: any) {
    console.error('Error initializing Firebase Admin SDK:', error);
    throw new Error('Could not initialize Firebase Admin SDK: ' + error.message);
  }
}

export const adminApp = initializeAdmin();
export const adminAuth = admin.auth(adminApp);
