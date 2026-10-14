// Configuración del cliente Firebase para el Frontend (React)
// Cuando tengas las credenciales de tu proyecto Firebase, puedes completarlas en .env
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyD-mockApiKeyForDevelopment",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "belkis-comunidad.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "belkis-comunidad",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "belkis-comunidad.appspot.com",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "1234567890",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:1234567890:web:abcdef123456"
};

// Inicialización
let app = null;
let db = null;
let auth = null;

try {
  app = initializeApp(firebaseConfig);
  db = getFirestore(app);
  auth = getAuth(app);
} catch (error) {
  console.warn("⚠️ Firebase Client no inicializado completamente (esperando variables de entorno):", error.message);
}

export { app, db, auth };
