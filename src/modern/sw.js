if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return s[e]||(r=new Promise((async r=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=r}else importScripts(e),r()}))),r.then((()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]}))},r=(r,s)=>{Promise.all(r.map(e)).then((e=>s(1===e.length?e[0]:e)))},s={require:Promise.resolve(r)};self.define=(r,i,n)=>{s[r]||(s[r]=Promise.resolve().then((()=>{let s={};const o={uri:location.origin+r.slice(1)};return Promise.all(i.map((r=>{switch(r){case"exports":return s;case"module":return o;default:return e(r)}}))).then((e=>{const r=n(...e);return s.default||(s.default=r),s}))})))}}define("./sw.js",["./workbox-2334ceda"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/src/modern/../../404.html",revision:"7814c62b8b16912a05d7b9b620e57afb"},{url:"/src/modern/../../index.html",revision:"94086a470dcbe7f0e19f5175e881e187"},{url:"/src/modern/../../map.xml",revision:"b2b4a8557201fbe3f324c64bda34825a"},{url:"/src/modern/../../map.xml.gz",revision:"88ebfef049abf6a34994435d93160473"},{url:"/src/modern/../../robots.txt",revision:"5e0bd1c281a62a380d7a948085bfe2d1"},{url:"/src/modern/../../static/locales/en.json",revision:"3239a0a10e6c65c82378715cdee8b5f8"},{url:"/src/modern/../../static/locales/pl.json",revision:"2e2dcf83fffc6e5712847d11ed42858a"},{url:"/src/modern/../../static/manifest.json",revision:"6699c36698fe93d55cf3f26e0878fe74"},{url:"/src/modern/267.mjs",revision:"3d30f5697f8a6c68197ec7ffdad439e2"},{url:"/src/modern/267.mjs.map",revision:"5625a2290a8324e33d917283dd8bd14b"},{url:"/src/modern/27.mjs",revision:"51e3a868f7917a7e07ef5bab2df31fa0"},{url:"/src/modern/27.mjs.map",revision:"d5888b646621a120973e84c281247e5c"},{url:"/src/modern/319.mjs",revision:"f1bdef0f29d5727c2417a48295d0967e"},{url:"/src/modern/319.mjs.map",revision:"682f60ae126289ffc52b936aaf6b18a5"},{url:"/src/modern/694.mjs",revision:"e37d00a464432b00194771160c1bc362"},{url:"/src/modern/694.mjs.map",revision:"23642ee3393e49efd51d08e6118db01d"},{url:"/src/modern/761.mjs",revision:"c1566af8eaf093c03725c217cbebf5bc"},{url:"/src/modern/761.mjs.map",revision:"97dab223d16b351f68176526ebbc32c7"},{url:"/src/modern/index.mjs",revision:"5fe63fd15a8cb77738eb40f12f8c8780"},{url:"/src/modern/index.mjs.LICENSE.txt",revision:"f6f8766f9008e0980546d56f763b2ebe"},{url:"/src/modern/index.mjs.map",revision:"7267dd135fe0a73fd20927985e571cac"}],{})}));
//# sourceMappingURL=sw.js.map
