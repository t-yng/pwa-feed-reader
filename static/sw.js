importScripts('/_nuxt/workbox.dev.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0ef16e6d7664bda428d5.js",
    "revision": "a3f2c6ef25902e2362429a8d6611c788"
  },
  {
    "url": "/_nuxt/17028fce706b515e6636.js",
    "revision": "0ea8095f43d1cdc88b3305dde19aebe9"
  },
  {
    "url": "/_nuxt/76ecca767c63df874797.js",
    "revision": "8a2b6d6df34f5253063deef3da9e022e"
  },
  {
    "url": "/_nuxt/85adbb7a439d6b43ca0e.js",
    "revision": "4e216684835ce1683e638f5d4be5acd0"
  },
  {
    "url": "/_nuxt/cd2c13ab7fba3f7637cc.js",
    "revision": "a4a68c29d5ad76bd993a5b61cb72a3b5"
  },
  {
    "url": "/_nuxt/ecd3cb398bb79edf93f6.js",
    "revision": "a6b501e7cae7f0c6e06dadec7fae8064"
  },
  {
    "url": "/_nuxt/f4fa5511be2da4837454.js",
    "revision": "f2f0f23e2dabf2afda3aaf408c55e4e2"
  }
], {
  "cacheId": "feed-reader",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
