/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/YYPcyY
 */

importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/3.0.0-beta.0/workbox-sw.js"
);

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "index.html",
    "revision": "da693c0a0d93c2c977702a0b3f7be306"
  },
  {
    "url": "scripts/main.js",
    "revision": "8dee00d54c3b417eff5dd0dbe0e3733e"
  },
  {
    "url": "styles/main.css",
    "revision": "c6a11e1fae6c8624b130c44733fbe6b0"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
