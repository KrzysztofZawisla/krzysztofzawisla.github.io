if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return s[e]||(r=new Promise((async r=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=r}else importScripts(e),r()}))),r.then((()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]}))},r=(r,s)=>{Promise.all(r.map(e)).then((e=>s(1===e.length?e[0]:e)))},s={require:Promise.resolve(r)};self.define=(r,c,i)=>{s[r]||(s[r]=Promise.resolve().then((()=>{let s={};const a={uri:location.origin+r.slice(1)};return Promise.all(c.map((r=>{switch(r){case"exports":return s;case"module":return a;default:return e(r)}}))).then((e=>{const r=i(...e);return s.default||(s.default=r),s}))})))}}define("./sw-legacy.js",["./workbox-a6881f2a"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/src/legacy/287.js",revision:"c7fbdfb92831354a5ef48db6ac2897bb"},{url:"/src/legacy/287.js.map",revision:"b9ec60d41e65390d86babc7246c69b50"},{url:"/src/legacy/409.js",revision:"d20552c30b0e35e6f0715c6b69c40c2a"},{url:"/src/legacy/409.js.map",revision:"b25af6d8c8f7d096987b378f3b0058d7"},{url:"/src/legacy/716.js",revision:"f4f317aaca26987c4c2392d312774325"},{url:"/src/legacy/716.js.map",revision:"2d113531b182f8b00142afa1f08bcc44"},{url:"/src/legacy/765.js",revision:"53dca2f57d92ec93b4b16e2196b32607"},{url:"/src/legacy/765.js.map",revision:"0d2c3419af199149141e06070a41b051"},{url:"/src/legacy/index.js",revision:"fdf8e156e8cfb7c2f243f4bca3c3faa2"},{url:"/src/legacy/index.js.LICENSE.txt",revision:"f6f8766f9008e0980546d56f763b2ebe"},{url:"/src/legacy/index.js.map",revision:"0c634287652b0971bdd7fb260f6ced91"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(/.(?:png|jpg|jpeg|svg|html|js|mjs)$/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=sw-legacy.js.map
