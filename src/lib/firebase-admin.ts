
import * as admin from 'firebase-admin';

let app: admin.app.App;

function initializeFirebaseAdmin() {
  const serviceAccountString = process.env.FIREBASE_SERVICE_ACCOUNT_KEY;
  if (!serviceAccountString) {
    console.error('A variável de ambiente FIREBASE_SERVICE_ACCOUNT_KEY não está definida.');
    return null;
  }

  try {
    const serviceAccount = JSON.parse(serviceAccountString);
    
    if (admin.apps.length > 0) {
      app = admin.apps[0]!;
    } else {
      app = admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        databaseURL: `https://`+ process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID +`.firebaseio.com`,
      });
    }
    return app;
  } catch (error) {
    console.error('Erro ao inicializar o Firebase Admin SDK:', error);
    return null;
  }
}

function getAdminAuth() {
  if (!app) {
    initializeFirebaseAdmin();
  }
  return app ? app.auth() : null;
}

export const adminAuth = getAdminAuth();
