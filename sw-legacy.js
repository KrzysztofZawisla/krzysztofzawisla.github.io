if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return s[e]||(r=new Promise((async r=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=r}else importScripts(e),r()}))),r.then((()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]}))},r=(r,s)=>{Promise.all(r.map(e)).then((e=>s(1===e.length?e[0]:e)))},s={require:Promise.resolve(r)};self.define=(r,c,i)=>{s[r]||(s[r]=Promise.resolve().then((()=>{let s={};const a={uri:location.origin+r.slice(1)};return Promise.all(c.map((r=>{switch(r){case"exports":return s;case"module":return a;default:return e(r)}}))).then((e=>{const r=i(...e);return s.default||(s.default=r),s}))})))}}define("./sw-legacy.js",["./workbox-c87c755c"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/src/legacy/190.js",revision:"026ceee4bf45c2e5b990db6f57d685ad"},{url:"/src/legacy/190.js.map",revision:"8aa057b04f446780a9fa1c7c41a50b02"},{url:"/src/legacy/401.js",revision:"1a3f1339cc6a8a8845cbd24fa97b12db"},{url:"/src/legacy/401.js.map",revision:"cb932e523a128a0b09ac6c0a5a31d7a1"},{url:"/src/legacy/959.js",revision:"94b075631c9e6e9465aef0459947e3ff"},{url:"/src/legacy/959.js.map",revision:"568f22718207067736985a71d69384e9"},{url:"/src/legacy/index.js",revision:"6058b1c8bfb04d3d42f776066871647c"},{url:"/src/legacy/index.js.LICENSE.txt",revision:"f6f8766f9008e0980546d56f763b2ebe"},{url:"/src/legacy/index.js.map",revision:"b236805a4657a654d7a4af6b701700b8"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(/.(?:png|jpg|jpeg|svg|html|js|mjs)$/,new e.NetworkFirst,"GET")}));
//# sourceMappingURL=sw-legacy.js.map
