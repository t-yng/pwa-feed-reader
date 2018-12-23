importScripts('/_nuxt/workbox.dev.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/2129ab1772cebc4e9355.js",
    "revision": "4bac230de61d60f6b55f47644215aa79"
  },
  {
    "url": "/_nuxt/236fb58b4ea80209c5d8.js",
    "revision": "5088d5f932868ba45a97ffda6f1452e6"
  },
  {
    "url": "/_nuxt/2533bf6b9db9e9697659.js",
    "revision": "0d8a3a37d5c68dd8c0592bc3fcd869b6"
  },
  {
    "url": "/_nuxt/80d6bacd0847bb262d42.js",
    "revision": "ea4ebf43e0eb77e128a3cbef894e8db4"
  },
  {
    "url": "/_nuxt/9b28f50dd8350ec71ef1.js",
    "revision": "e0cc4dd0df8a15699b4864ef9810c483"
  },
  {
    "url": "/_nuxt/abb7fce864e089754553.js",
    "revision": "06612ff77bae14c1bcde071fd7e770b0"
  },
  {
    "url": "/_nuxt/db7029a11576ffee76d3.js",
    "revision": "3b4eb82e9a892868ee99bba392964ff8"
  }
], {
  "cacheId": "nuxt",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
