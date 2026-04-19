const CACHE_NAME = "gabriels-gym-v3";
const ASSETS = ["/", "/index.html", "/icon-192.png", "/icon-512.png", "/manifest.json"];

// Install — pre-cache the app shell
self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

// Activate — clean old caches
self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Fetch — serve from cache first, fall back to network, then update cache
self.addEventListener("fetch", (e) => {
  // Only handle GET requests for same-origin
  if (e.request.method !== "GET") return;

  e.respondWith(
    caches.match(e.request).then((cached) => {
      // Return cached version immediately, then update in background
      const fetchPromise = fetch(e.request)
        .then((response) => {
          if (response && response.status === 200) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(e.request, clone));
          }
          return response;
        })
        .catch(() => cached); // If offline and not cached, return whatever we have

      return cached || fetchPromise;
    })
  );
});
