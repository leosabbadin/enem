
import * as admin from 'firebase-admin';

// Interface para a conta de serviço para garantir a tipagem correta
interface ServiceAccount {
  type: string;
  project_id: string;
  private_key_id: string;
  private_key: string;
  client_email: string;
  client_id: string;
  auth_uri: string;
  token_uri: string;
  auth_provider_x509_cert_url: string;
  client_x509_cert_url: string;
  universe_domain: string;
}

let adminAuth: admin.auth.Auth | null = null;

function initializeFirebaseAdmin() {
  // Evita reinicializações desnecessárias
  if (admin.apps.length > 0) {
    adminAuth = admin.auth();
    return;
  }

  const serviceAccountString = process.env.FIREBASE_SERVICE_ACCOUNT_KEY;

  if (!serviceAccountString) {
    console.error('A variável de ambiente FIREBASE_SERVICE_ACCOUNT_KEY não está definida ou está vazia.');
    return;
  }

  try {
    const serviceAccount: ServiceAccount = JSON.parse(serviceAccountString);

    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      databaseURL: `https://`+ process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID +`.firebaseio.com`,
    });
    
    adminAuth = admin.auth();
    console.log("Firebase Admin SDK inicializado com sucesso.");

  } catch (error) {
    console.error('Erro ao inicializar o Firebase Admin SDK:', error);
    // Zera o adminAuth em caso de erro para evitar uso de uma instância inválida
    adminAuth = null; 
  }
}

// Inicializa na primeira vez que o módulo é importado
initializeFirebaseAdmin();

export { adminAuth };
