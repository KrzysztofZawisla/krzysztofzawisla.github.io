if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return s[e]||(r=new Promise((async r=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=r}else importScripts(e),r()}))),r.then((()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]}))},r=(r,s)=>{Promise.all(r.map(e)).then((e=>s(1===e.length?e[0]:e)))},s={require:Promise.resolve(r)};self.define=(r,c,i)=>{s[r]||(s[r]=Promise.resolve().then((()=>{let s={};const a={uri:location.origin+r.slice(1)};return Promise.all(c.map((r=>{switch(r){case"exports":return s;case"module":return a;default:return e(r)}}))).then((e=>{const r=i(...e);return s.default||(s.default=r),s}))})))}}define("./sw-legacy.js",["./workbox-a8ef31e0"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/src/legacy/287.js",revision:"91262183f5cdadd4453292f95089db37"},{url:"/src/legacy/287.js.map",revision:"f4501dbfbcbf4b62d822bb921424f2f7"},{url:"/src/legacy/409.js",revision:"a92f71d8da14f7a3d7476fa2e5da2a13"},{url:"/src/legacy/409.js.map",revision:"afd18184e4377eb4fa9356f4e161ba9b"},{url:"/src/legacy/716.js",revision:"fc8cf04e1d09c46dd12f7c6aa3cebb42"},{url:"/src/legacy/716.js.map",revision:"f92803af41a90c426a4f415e166a8ee5"},{url:"/src/legacy/765.js",revision:"1eb4f12ce965e823931dd4df04087204"},{url:"/src/legacy/765.js.map",revision:"42c1f64f8cdfb2a08b88e69ab4b02bf0"},{url:"/src/legacy/index.js",revision:"1a270d14e9af1a7b91cb725392057396"},{url:"/src/legacy/index.js.LICENSE.txt",revision:"f6f8766f9008e0980546d56f763b2ebe"},{url:"/src/legacy/index.js.map",revision:"4303580b386b4de74d67271cc5874537"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(/.(?:png|jpg|jpeg|svg|html|js|mjs)$/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=sw-legacy.js.map
