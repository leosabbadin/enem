
import * as admin from 'firebase-admin';

// Function to safely initialize Firebase Admin SDK and get the Auth instance.
// This prevents re-initialization errors in serverless environments.
function getAdminAuth(): admin.auth.Auth {
  if (admin.apps.length > 0) {
    return admin.auth();
  }

  const serviceAccountString = process.env.FIREBASE_SERVICE_ACCOUNT_KEY;
  if (!serviceAccountString) {
    throw new Error('The FIREBASE_SERVICE_ACCOUNT_KEY environment variable is not set.');
  }

  try {
    const serviceAccount = JSON.parse(serviceAccountString);
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      databaseURL: `https://` + process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID + `.firebaseio.com`,
    });
    console.log("Firebase Admin SDK initialized successfully.");
    return admin.auth();
  } catch (error) {
    console.error('Error initializing Firebase Admin SDK:', error);
    // Re-throw the error to be caught by the API route
    throw new Error('Could not initialize Firebase Admin SDK.');
  }
}

export const adminAuth = getAdminAuth;
