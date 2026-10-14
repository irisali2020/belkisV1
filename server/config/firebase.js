import admin from 'firebase-admin';
import dotenv from 'dotenv';

dotenv.config();

let db = null;
let isFirebaseInitialized = false;

try {
  // Si existen credenciales configuradas en las variables de entorno
  if (process.env.FIREBASE_PROJECT_ID && process.env.FIREBASE_CLIENT_EMAIL && process.env.FIREBASE_PRIVATE_KEY) {
    admin.initializeApp({
      credential: admin.credential.cert({
        projectId: process.env.FIREBASE_PROJECT_ID,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
      }),
    });
    db = admin.firestore();
    isFirebaseInitialized = true;
    console.log('✅ Firebase Admin conectado correctamente con Firestore');
  } else {
    console.log('ℹ️ Firebase sin credenciales en .env. Se usará el almacenamiento en memoria para desarrollo local.');
  }
} catch (error) {
  console.warn('⚠️ Error al inicializar Firebase Admin:', error.message);
  console.log('ℹ️ Continuando con almacenamiento en memoria...');
}

export { admin, db, isFirebaseInitialized };
