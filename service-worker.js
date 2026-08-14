/* ==========================================================================
   DevQuest — service-worker.js
   Estrategia: Cache First con actualización en segundo plano (stale-while-
   revalidate para el shell) para garantizar funcionamiento 100% offline.
   ========================================================================== */

// Sube este número cada vez que cambies el contenido cacheado para forzar
// la limpieza de la caché antigua en el evento "activate".
const CACHE_VERSION = 'v1.8.0';
const CACHE_NAME = `devquest-cache-${CACHE_VERSION}`;

// App shell: todo lo necesario para que la app arranque sin conexión.
// Nota: firebase-init.js se cachea como cualquier archivo propio, pero sus
// imports a la CDN de Firebase (gstatic.com) son de otro origen y este
// service worker no los intercepta ni cachea (ver el filtro en "fetch" más
// abajo) — el login/la sincronización necesitan conexión real, pero el
// resto de la app sigue funcionando 100% offline igual que antes.
const APP_SHELL = [
  './',
  './index.html',
  './styles.css',
  './content-html.js',
  './content-css.js',
  './content-js.js',
  './content-csharp.js',
  './content-mysql.js',
  './app.js',
  './firebase-init.js',
  './manifest.json',
  './icons/icon.svg',
  './icons/icon-maskable.svg'
];

// ---------- INSTALL: precachea el app shell ----------
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
  );
});

// ---------- ACTIVATE: limpia cachés de versiones anteriores ----------
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(
        keys
          .filter((key) => key.startsWith('devquest-cache-') && key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      ))
      .then(() => self.clients.claim())
  );
});

// ---------- FETCH: Cache First, con fallback a red y a index.html ----------
self.addEventListener('fetch', (event) => {
  const { request } = event;

  // Solo interceptamos peticiones GET del mismo origen (navegación y assets).
  if (request.method !== 'GET' || !request.url.startsWith(self.location.origin)) {
    return;
  }

  event.respondWith(
    caches.match(request).then((cachedResponse) => {
      if (cachedResponse) {
        // Cache First: servimos de inmediato y refrescamos en segundo plano.
        fetchAndUpdateCache(request);
        return cachedResponse;
      }
      return fetchAndUpdateCache(request).catch(() => {
        // Sin red y sin caché: si es una navegación, devolvemos el shell.
        if (request.mode === 'navigate') {
          return caches.match('./index.html');
        }
        return new Response('', { status: 408, statusText: 'Offline' });
      });
    })
  );
});

function fetchAndUpdateCache(request) {
  return fetch(request).then((networkResponse) => {
    if (networkResponse && networkResponse.status === 200) {
      const responseClone = networkResponse.clone();
      caches.open(CACHE_NAME).then((cache) => cache.put(request, responseClone));
    }
    return networkResponse;
  });
}
