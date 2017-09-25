importScripts('workbox-sw.prod.v2.0.1.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "assets/icon/favicon.ico",
    "revision": "d2f619d796fbe8bed6200da2691aa5b6"
  },
  {
    "url": "assets/img/icon.png",
    "revision": "b96ad6e1e0b755c8cd45e6aec40bca25"
  },
  {
    "url": "build/app.global.js",
    "revision": "2eab51fa98ed28b23cf1de2416e32427"
  },
  {
    "url": "build/app.js",
    "revision": "48bc410281841d07b1bd3f9695290454"
  },
  {
    "url": "build/app.registry.json",
    "revision": "04f298eff3f58b1523e7ffb23d2e7ab0"
  },
  {
    "url": "build/app/36obc9dm.css",
    "revision": "583650d01752cf050f6af1d98a97bb00"
  },
  {
    "url": "build/app/5aaeuoto.css",
    "revision": "75a0049fae91191b9bc2bad25f285cb3"
  },
  {
    "url": "build/app/app.bimwyhdt.pf.js",
    "revision": "a93e54df7101825d1ffa9f6043e878e5"
  },
  {
    "url": "build/app/app.opuojsxl.js",
    "revision": "c6571648301ba8c4137fa64cdb59abf1"
  },
  {
    "url": "build/app/c2eei8wf.js",
    "revision": "22b31b7c4e123edcc46cf554c74b1755"
  },
  {
    "url": "build/app/h3ho08ty.js",
    "revision": "526b8f67f83bef3c7898873fa3b95c68"
  },
  {
    "url": "build/app/if0opbrp.js",
    "revision": "921a0f2053ba0a1728845286a22d9e61"
  },
  {
    "url": "build/app/imd9xidt.js",
    "revision": "2286d47e08db8815a3d1046e6f67975d"
  },
  {
    "url": "build/app/jqd6jipe.js",
    "revision": "db519d80cb3788b6633bc9d387adec08"
  },
  {
    "url": "build/app/qutdmrxo.css",
    "revision": "e9177d7ba535e7419547310c2e9ab755"
  },
  {
    "url": "build/app/t89fh3lc.js",
    "revision": "5a501be1ab5d104fdfa01e2cbcf14516"
  },
  {
    "url": "build/app/uyykddxl.css",
    "revision": "3d50550407a0c0d076cccbe0d3ec717b"
  },
  {
    "url": "favicon.ico",
    "revision": "d2f619d796fbe8bed6200da2691aa5b6"
  },
  {
    "url": "index.html",
    "revision": "bd020ebec512197c956df0e902d42fd4"
  },
  {
    "url": "manifest.json",
    "revision": "2a184e97fcded4850709730575c65e19"
  }
];

const workboxSW = new self.WorkboxSW({
  "skipWaiting": true,
  "clientsClaim": true
});
workboxSW.precache(fileManifest);
