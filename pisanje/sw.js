const CACHE='pisalnica-v7';
const ASSETS=['/Aplikacije/pisanje/','/Aplikacije/pisanje/index.html','/Aplikacije/pisanje/manifest.json','/Aplikacije/pisanje/icon-192.png','/Aplikacije/pisanje/icon-512.png','/Aplikacije/pisanje/icon-maskable.png'];

self.addEventListener('install',e=>{
  e.waitUntil(caches.open(CACHE).then(c=>Promise.all(ASSETS.map(a=>c.add(a).catch(()=>{})))).then(()=>self.skipWaiting()));
});
self.addEventListener('activate',e=>{
  e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));
});
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET')return;
  e.respondWith(caches.match(e.request).then(cached=>{
    const net=fetch(e.request).then(res=>{
      if(res&&res.status===200&&res.type==='basic'){const copy=res.clone();caches.open(CACHE).then(c=>c.put(e.request,copy))}
      return res;
    }).catch(()=>cached);
    return cached||net;
  }));
});
