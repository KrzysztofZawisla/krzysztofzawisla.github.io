if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return s[e]||(r=new Promise((async r=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=r}else importScripts(e),r()}))),r.then((()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]}))},r=(r,s)=>{Promise.all(r.map(e)).then((e=>s(1===e.length?e[0]:e)))},s={require:Promise.resolve(r)};self.define=(r,c,i)=>{s[r]||(s[r]=Promise.resolve().then((()=>{let s={};const n={uri:location.origin+r.slice(1)};return Promise.all(c.map((r=>{switch(r){case"exports":return s;case"module":return n;default:return e(r)}}))).then((e=>{const r=i(...e);return s.default||(s.default=r),s}))})))}}define("./sw.js",["./workbox-b26bd99a"],(function(e){"use strict";self.addEventListener("message",(function(e){e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/src/legacy/27.index.js",revision:"d8488592e304504e6996ecbf6d2f49c0"},{url:"/src/legacy/684.index.js",revision:"13a7c62fc3bc9f7f1209ad21a9cd543e"},{url:"/src/legacy/694.index.js",revision:"a015cf6703fe5a827b0ddde5a027a302"},{url:"/src/legacy/75.index.js",revision:"9d8d7d98d59c14ae6d6e622d18c33c4f"},{url:"/src/legacy/919.index.js",revision:"5095b1fce8c820af5d99c10da6c621a8"},{url:"/src/legacy/index.js",revision:"7468b73c5647a77b96eb86420f2e6dee"},{url:"/src/legacy/index.js.LICENSE.txt",revision:"e164f8ba516ea8a31496b66aaff2c556"}],{})}));
//# sourceMappingURL=sw.js.map
