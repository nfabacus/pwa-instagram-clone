self.addEventListener('install', function(event){
  console.log('[Service Worker] Installing Service Worker ...', event)
})

self.addEventListener('activate', function(event){
  console.log('[Service worker] Activating Service Worker ...', event)
  return self.clients.claim()  //just a line to make sure service worker is loaded and activated correctly.
})

self.addEventListener('fetch', function(event){
  console.log('[Service Worker] Fetching something ...', event)
  event.respondWith(fetch(event.request))
})