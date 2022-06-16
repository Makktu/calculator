const cacheName = "calc-1";
const staticAssets = [
    "./",
    "./index.html",
    "./script.js",
    "./node_modules",
    "./manifest.json",
    "./package-lock.json",
    "./README.md",
    "./assets",
    "./service-worker.js",
];

self.addEventListener("install", async (e) => {
    console.log("SW installed");
    const cache = await caches.open(cacheName);
    await cache.addAll(staticAssets);
    return self.skipWaiting();
});
self.addEventListener("activate", (e) => {
    console.log("Activate!");
    self.clients.claim();
});
self.addEventListener("fetch", function (event) {
    console.log("Fetch!", event.request);
});
