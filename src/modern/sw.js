if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return s[e]||(r=new Promise((async r=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=r}else importScripts(e),r()}))),r.then((()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]}))},r=(r,s)=>{Promise.all(r.map(e)).then((e=>s(1===e.length?e[0]:e)))},s={require:Promise.resolve(r)};self.define=(r,c,d)=>{s[r]||(s[r]=Promise.resolve().then((()=>{let s={};const i={uri:location.origin+r.slice(1)};return Promise.all(c.map((r=>{switch(r){case"exports":return s;case"module":return i;default:return e(r)}}))).then((e=>{const r=d(...e);return s.default||(s.default=r),s}))})))}}define("./sw.js",["./workbox-2334ceda"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/src/modern/../../404.html",revision:"7814c62b8b16912a05d7b9b620e57afb"},{url:"/src/modern/../../index.html",revision:"94086a470dcbe7f0e19f5175e881e187"},{url:"/src/modern/../../map.xml",revision:"b2b4a8557201fbe3f324c64bda34825a"},{url:"/src/modern/../../map.xml.gz",revision:"88ebfef049abf6a34994435d93160473"},{url:"/src/modern/../../robots.txt",revision:"5e0bd1c281a62a380d7a948085bfe2d1"},{url:"/src/modern/../../static/locales/en.json",revision:"3239a0a10e6c65c82378715cdee8b5f8"},{url:"/src/modern/../../static/locales/pl.json",revision:"2e2dcf83fffc6e5712847d11ed42858a"},{url:"/src/modern/../../static/manifest.json",revision:"6699c36698fe93d55cf3f26e0878fe74"},{url:"/src/modern/267.js",revision:"4cf6a12bbde34927131265ef52d03c45"},{url:"/src/modern/267.js.map",revision:"05d493d031a72f4d4a712898edcbf35c"},{url:"/src/modern/27.js",revision:"3780c6e033d83950dfd1c2b93e5e50c1"},{url:"/src/modern/27.js.map",revision:"d078207508d6b7932b8adbd7da586aed"},{url:"/src/modern/319.js",revision:"bc996145c1b5f63f32985fbb23af1fcd"},{url:"/src/modern/319.js.map",revision:"a9c4952ea644017b7544c8225ece07c4"},{url:"/src/modern/694.js",revision:"254cd32c08cf4f738bdc1079cb19381a"},{url:"/src/modern/694.js.map",revision:"70fa71a962d0ecde056eed1abc03dbde"},{url:"/src/modern/75.js",revision:"e8a212674e2fd651b51154ad6bbd53e5"},{url:"/src/modern/75.js.map",revision:"28047c78daaac2fc9eeec71292af2546"},{url:"/src/modern/761.js",revision:"d93ed4f5079440a648cb646aac98c74e"},{url:"/src/modern/761.js.map",revision:"33243c1d3526dd63056840e73d37f544"},{url:"/src/modern/index.mjs",revision:"66d52dc38fb7a4492c993aa93240c49c"},{url:"/src/modern/index.mjs.LICENSE.txt",revision:"f6f8766f9008e0980546d56f763b2ebe"},{url:"/src/modern/index.mjs.map",revision:"338bb6891e6a759ac336fed306f0f73d"}],{})}));
//# sourceMappingURL=sw.js.map
