import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import contactRoutes from './routes/contactRoutes.js';
import workshopsRoutes from './routes/workshopsRoutes.js';
import blogRoutes from './routes/blogRoutes.js';
import servicesRoutes from './routes/servicesRoutes.js';
import { isFirebaseInitialized } from './config/firebase.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors({
  origin: '*', // Permitir peticiones desde el cliente React
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutas de la API
app.use('/api/contacto', contactRoutes);
app.use('/api/talleres', workshopsRoutes);
app.use('/api/blog', blogRoutes);
app.use('/api/servicios', servicesRoutes);

// Endpoint de estado y bienvenida
app.get('/api/health', (req, res) => {
  res.json({
    status: 'OK',
    message: 'Servidor Backend de Belkis | Psicología & Hacer Comunidad activo',
    firebaseConnected: isFirebaseInitialized,
    timestamp: new Date().toISOString(),
  });
});

// Manejo de rutas no encontradas
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: `Ruta ${req.originalUrl} no encontrada en la API.`,
  });
});

// Manejo global de errores
app.use((err, req, res, next) => {
  console.error('Error no controlado en el servidor:', err);
  res.status(500).json({
    success: false,
    message: 'Error interno en el servidor.',
    error: process.env.NODE_ENV === 'development' ? err.message : undefined,
  });
});

app.listen(PORT, () => {
  console.log(`====================================================`);
  console.log(`🌸 Servidor Belkis API ejecutándose en el puerto ${PORT}`);
  console.log(`🌸 URL base: http://localhost:${PORT}`);
  console.log(`🌸 Firebase: ${isFirebaseInitialized ? 'Activo (Firestore)' : 'Modo desarrollo (en memoria)'}`);
  console.log(`====================================================`);
});
