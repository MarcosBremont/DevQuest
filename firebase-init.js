/* ==========================================================================
   DevQuest — firebase-init.js
   Carga el SDK modular de Firebase directamente desde la CDN de Google
   (sin npm ni bundler) y expone lo necesario en window.DevQuestFirebase
   para que app.js (script clásico) lo use.

   Se carga con <script type="module" async>: no bloquea el arranque de la
   app ni el evento DOMContentLoaded. Si no hay conexión o el CDN falla,
   este módulo simplemente no se ejecuta y app.js sigue funcionando en modo
   invitado (localStorage), degradando sin romper nada — DevQuest sigue
   siendo utilizable offline.

   Google Sign-In usa Google Identity Services (accounts.google.com/gsi/
   client, cargado aparte en index.html) + signInWithCredential, NO
   signInWithRedirect ni signInWithPopup: ambos dependen de que
   devquest-73552.firebaseapp.com le "devuelva" el resultado a la página
   original mediante almacenamiento/iframes entre dominios distintos, y
   navegadores con protecciones de privacidad fuertes (Brave Shields,
   bloqueo de cookies de terceros, protección contra huellas digitales)
   rompen justo ese mecanismo en silencio. GIS entrega el token de
   identidad directamente en la propia página, sin depender de eso.
   ========================================================================== */

import { initializeApp } from 'https://www.gstatic.com/firebasejs/12.17.1/firebase-app.js';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithCredential,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut
} from 'https://www.gstatic.com/firebasejs/12.17.1/firebase-auth.js';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  serverTimestamp
} from 'https://www.gstatic.com/firebasejs/12.17.1/firebase-firestore.js';

const firebaseConfig = {
  apiKey: 'AIzaSyDaDZOSZgqMkugwrNYefYXWVCsdiGZqnfs',
  authDomain: 'devquest-73552.firebaseapp.com',
  projectId: 'devquest-73552',
  storageBucket: 'devquest-73552.firebasestorage.app',
  messagingSenderId: '906497704896',
  appId: '1:906497704896:web:e39e489911322dba9fbe25',
  measurementId: 'G-BDJS5EK3BL'
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

window.DevQuestFirebase = {
  auth,
  db,
  GoogleAuthProvider,
  signInWithCredential,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
  doc,
  getDoc,
  setDoc,
  serverTimestamp
};

// app.js puede haber arrancado antes de que termine este módulo (se carga
// con "async"), así que avisamos con un evento además de dejar el objeto
// en window; app.js escucha este evento si aún no lo encontró.
window.dispatchEvent(new Event('devquest-firebase-ready'));
