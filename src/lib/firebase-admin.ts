
import * as admin from 'firebase-admin';

let app: admin.app.App;

function getFirebaseAdminApp() {
  if (app) {
    return app;
  }

  const serviceAccountString = process.env.FIREBASE_SERVICE_ACCOUNT_KEY;
  if (!serviceAccountString) {
    throw new Error('A variável de ambiente FIREBASE_SERVICE_ACCOUNT_KEY não está definida.');
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
    throw new Error('Falha ao parsear as credenciais do Firebase. Verifique a FIREBASE_SERVICE_ACCOUNT_KEY.');
  }
}

function getAdminAuth() {
  try {
    return getFirebaseAdminApp().auth();
  } catch (error) {
    console.error("Falha ao obter adminAuth:", error);
    return null; // Retorna null se a inicialização falhar
  }
}

export const adminAuth = getAdminAuth();
