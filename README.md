# Belkis | Psicología & Hacer Comunidad 🌸

Plataforma web SPA (Single Page Application) para un emprendimiento de psicología y facilitación comunitaria, fundamentada en las **etapas del ciclo de vida y formación de grupos**.

---

## 🎨 Paleta de Color e Identidad Visual
El proyecto utiliza una paleta con **prevalencia del rosa**, diseñada para transmitir calidez, empatía, seguridad psicológica y profesionalismo:
- **Rosa Primario:** `#d94f70` (Frambuesa suave / rosa cálido)
- **Rosa Profundo:** `#9c2548` (Contraste y títulos de jerarquía)
- **Rosa Pastel / Fondos:** `#fff1f4` y `#fde8ee` (Contenedores suaves y tarjetas)
- **Texto Principal:** `#2c2024` (Gris oscuro cálido, suave a la vista)

---

## 🧭 Estructura de Navegación de la SPA (Navbar)
1. **Inicio (`/`)**:
   - Hero section con propuesta de valor y enfoque humano.
   - Las 4 Etapas del Ciclo Grupal interactivo (Génesis, Ajuste, Acción y Cierre).
   - Ámbitos de aplicación (Equipos de trabajo, Comunidades de práctica, Entornos vecinales, Colectivos libres).
   - Talleres destacados.
   - Banner de llamado a la acción.
2. **Servicios (`/servicios`)**:
   - Catálogo de acompañamiento 1 a 1 para líderes, diagnóstico de madurez grupal, facilitación de retiros y mediación de conflictos.
   - Metodología de trabajo en 4 pasos.
3. **Talleres (`/talleres`)**:
   - Catálogo vivencial filtrable por etapa grupal.
   - Modal interactivo de preinscripción conectado al backend.
4. **Blog (`/blog`)**:
   - Artículos especializados en dinámicas de grupo y psicología comunitaria.
   - Filtros por fase, buscador en tiempo real y modal de lectura completa.
5. **Contacto (`/contacto`)**:
   - Formulario interactivo con selección de tipo de grupo y etapa estimada.
   - Conectado a la API de Express y preparado para Firebase Firestore.

---

## 🛠️ Tecnologías Utilizadas
- **Frontend:**
  - React 19 + Vite
  - React Router DOM 7 (SPA routing con `<NavLink>` y pastillas activas)
  - Bootstrap 5 + Bootstrap Icons (diseño responsivo y adaptativo)
  - Firebase Client SDK (preconfigurado en `src/firebase.js`)
- **Backend:**
  - Node.js + Express
  - Firebase Admin SDK (preparado con fallback en memoria para desarrollo local)
  - CORS, Dotenv

---

## 🚀 Cómo ejecutar el proyecto

### 1. Iniciar el Servidor Backend (Express)
```bash
cd server
npm start
# O con recarga automática:
npm run dev
```
El servidor arrancará en `http://localhost:5000`.

### 2. Iniciar el Frontend (React + Vite)
```bash
cd belkisV1
npm run dev
```
La aplicación web abrirá en `http://localhost:5173` (o el puerto asignado por Vite).

---

## ☁️ Conexión con Firebase
El proyecto está completamente preparado para conectarse a Firebase tanto desde el backend (vía `firebase-admin` en Firestore) como desde el cliente React:
1. En el backend: Copia las credenciales de tu cuenta de servicio en `server/.env` siguiendo `server/.env.example`.
2. En el frontend: Agrega tus variables en `belkisV1/.env` siguiendo `belkisV1/.env.example`.
*Nota: Si no se configuran credenciales en el archivo `.env`, la aplicación funciona automáticamente en modo desarrollo con almacenamiento local en memoria.*
