import { Router } from 'express';
import { db, isFirebaseInitialized } from '../config/firebase.js';

const router = Router();

// Almacenamiento en memoria para desarrollo local antes de configurar Firebase
const inMemoryMessages = [];

// POST /api/contacto - Enviar mensaje desde la página de contacto
router.post('/', async (req, res) => {
  try {
    const { nombre, email, telefono, tipoGrupo, etapaGrupo, mensaje } = req.body;

    if (!nombre || !email || !mensaje) {
      return res.status(400).json({
        success: false,
        message: 'Por favor completa los campos obligatorios: nombre, email y mensaje.',
      });
    }

    const nuevoContacto = {
      nombre,
      email,
      telefono: telefono || '',
      tipoGrupo: tipoGrupo || 'General',
      etapaGrupo: etapaGrupo || 'No especificada',
      mensaje,
      createdAt: new Date().toISOString(),
      estado: 'nuevo',
    };

    if (isFirebaseInitialized && db) {
      const docRef = await db.collection('contactos').add(nuevoContacto);
      return res.status(201).json({
        success: true,
        message: '¡Gracias por escribirnos! Tu mensaje ha sido recibido y te responderemos pronto.',
        id: docRef.id,
      });
    } else {
      inMemoryMessages.push({ id: `msg_${Date.now()}`, ...nuevoContacto });
      return res.status(201).json({
        success: true,
        message: '¡Gracias por escribirnos! Tu mensaje ha sido registrado exitosamente.',
        id: `msg_${Date.now()}`,
      });
    }
  } catch (error) {
    console.error('Error al procesar contacto:', error);
    res.status(500).json({
      success: false,
      message: 'Ocurrió un error en el servidor al enviar tu mensaje.',
    });
  }
});

// GET /api/contacto - Consultar mensajes (para panel administrativo)
router.get('/', async (req, res) => {
  try {
    if (isFirebaseInitialized && db) {
      const snapshot = await db.collection('contactos').orderBy('createdAt', 'desc').get();
      const mensajes = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      return res.json({ success: true, count: mensajes.length, data: mensajes });
    } else {
      return res.json({ success: true, count: inMemoryMessages.length, data: inMemoryMessages });
    }
  } catch (error) {
    console.error('Error al listar contactos:', error);
    res.status(500).json({ success: false, message: 'Error al consultar mensajes' });
  }
});

export default router;
