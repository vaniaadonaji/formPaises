// service-worker.js

self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open('mi-app-v1').then(function(cache) {
        return cache.addAll([
            '/',
            '/index.html',
            '/js/index.js',
            '/img/iconito.png'
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetch(event.request);
      })
    );
  });
  