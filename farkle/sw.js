const CACHE='farkle-v14';
const ASSETS=['/Aplikacije/farkle/','/Aplikacije/farkle/index.html','/Aplikacije/farkle/engine.js','/Aplikacije/farkle/ruka.js','/Aplikacije/farkle/ruke/m-otvorena.webp?v=2','/Aplikacije/farkle/ruke/z-otvorena.webp','/Aplikacije/farkle/ruke/z-pesnica.webp','/Aplikacije/farkle/ruke/z-lak-crveni-o.webp','/Aplikacije/farkle/ruke/z-lak-crveni-p.webp','/Aplikacije/farkle/ruke/z-lak-francuski-o.webp','/Aplikacije/farkle/ruke/z-lak-francuski-p.webp','/Aplikacije/farkle/ruke/z-lak-nude-o.webp','/Aplikacije/farkle/ruke/z-lak-nude-p.webp','/Aplikacije/farkle/ruke/z-prsten-dijamant-o.webp','/Aplikacije/farkle/ruke/z-prsten-dijamant-p.webp','/Aplikacije/farkle/ruke/z-sat-zlatni-o.webp','/Aplikacije/farkle/ruke/z-sat-zlatni-p.webp','/Aplikacije/farkle/ruke/m-pesnica.webp?v=2','/Aplikacije/farkle/ruke/m-sat-zlatni-o.webp','/Aplikacije/farkle/ruke/m-sat-zlatni-p.webp','/Aplikacije/farkle/ruke/m-pecatnjak-o.webp','/Aplikacije/farkle/ruke/m-pecatnjak-p.webp','/Aplikacije/farkle/manifest.json','/Aplikacije/farkle/icon-192.png','/Aplikacije/farkle/icon-512.png','/Aplikacije/farkle/icon-maskable.png'];

self.addEventListener('install',e=>{
  e.waitUntil(caches.open(CACHE).then(c=>Promise.all(ASSETS.map(a=>c.add(a).catch(()=>{})))).then(()=>self.skipWaiting()));
});
self.addEventListener('activate',e=>{
  e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));
});
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET')return;
  e.respondWith(caches.match(e.request,{ignoreSearch:true}).then(cached=>{
    const net=fetch(e.request).then(res=>{
      if(res&&res.status===200&&(res.type==='basic'||res.type==='cors')){const copy=res.clone();caches.open(CACHE).then(c=>c.put(e.request,copy))}
      return res;
    }).catch(()=>cached);
    return cached||net;
  }));
});
