if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return s[e]||(r=new Promise((async r=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=r}else importScripts(e),r()}))),r.then((()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]}))},r=(r,s)=>{Promise.all(r.map(e)).then((e=>s(1===e.length?e[0]:e)))},s={require:Promise.resolve(r)};self.define=(r,c,i)=>{s[r]||(s[r]=Promise.resolve().then((()=>{let s={};const a={uri:location.origin+r.slice(1)};return Promise.all(c.map((r=>{switch(r){case"exports":return s;case"module":return a;default:return e(r)}}))).then((e=>{const r=i(...e);return s.default||(s.default=r),s}))})))}}define("./sw-legacy.js",["./workbox-a6881f2a"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/src/legacy/190.js",revision:"026ceee4bf45c2e5b990db6f57d685ad"},{url:"/src/legacy/190.js.map",revision:"8aa057b04f446780a9fa1c7c41a50b02"},{url:"/src/legacy/401.js",revision:"4fe11fa312283e0bbc6a57bb8c2ba944"},{url:"/src/legacy/401.js.map",revision:"b2454d0fbc76962984b64a3d0d6efeef"},{url:"/src/legacy/959.js",revision:"25c2e3b6007fac70e3a89e8435364b67"},{url:"/src/legacy/959.js.map",revision:"64c32a4da7e0f1d7d8abccd754802405"},{url:"/src/legacy/index.js",revision:"8ab86bc034c35d2ec4afd4efc7341c29"},{url:"/src/legacy/index.js.LICENSE.txt",revision:"f6f8766f9008e0980546d56f763b2ebe"},{url:"/src/legacy/index.js.map",revision:"971b165ff614a7253d030ca6b431df33"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(/.(?:png|jpg|jpeg|svg|html|js|mjs)$/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=sw-legacy.js.map
