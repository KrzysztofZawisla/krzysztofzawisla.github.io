if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return s[e]||(r=new Promise((async r=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=r}else importScripts(e),r()}))),r.then((()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]}))},r=(r,s)=>{Promise.all(r.map(e)).then((e=>s(1===e.length?e[0]:e)))},s={require:Promise.resolve(r)};self.define=(r,n,c)=>{s[r]||(s[r]=Promise.resolve().then((()=>{let s={};const o={uri:location.origin+r.slice(1)};return Promise.all(n.map((r=>{switch(r){case"exports":return s;case"module":return o;default:return e(r)}}))).then((e=>{const r=c(...e);return s.default||(s.default=r),s}))})))}}define("./sw-modern.js",["./workbox-c0741653"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/src/modern/../../404.html",revision:"7814c62b8b16912a05d7b9b620e57afb"},{url:"/src/modern/../../index.html",revision:"94086a470dcbe7f0e19f5175e881e187"},{url:"/src/modern/../../map.xml",revision:"b2b4a8557201fbe3f324c64bda34825a"},{url:"/src/modern/../../map.xml.gz",revision:"88ebfef049abf6a34994435d93160473"},{url:"/src/modern/../../robots.txt",revision:"5e0bd1c281a62a380d7a948085bfe2d1"},{url:"/src/modern/../../static/locales/en.json",revision:"310d1be7dace373c1ed9c3b68dee9af4"},{url:"/src/modern/../../static/locales/pl.json",revision:"2e2dcf83fffc6e5712847d11ed42858a"},{url:"/src/modern/../../static/manifest.json",revision:"7de888e1835b736b52af32814061c8b0"},{url:"/src/modern/287.mjs",revision:"d4d865b9b69e7e4399aab4e0447d28ed"},{url:"/src/modern/287.mjs.map",revision:"10887d295bc16c5d99f94081025a7f36"},{url:"/src/modern/398.mjs",revision:"7133908031efa1513a1d64a208c2f92c"},{url:"/src/modern/398.mjs.map",revision:"62f714e8bb1c740a44f0a554ceeea086"},{url:"/src/modern/409.mjs",revision:"9002721346145950a1394fe1c226fd8c"},{url:"/src/modern/409.mjs.map",revision:"a21477db13ae0af6d9771f93a5936e48"},{url:"/src/modern/485.mjs",revision:"0154f8b93ff5f6d8eab909c58c559aeb"},{url:"/src/modern/485.mjs.map",revision:"1224a315fc141afb96c7f98034a84248"},{url:"/src/modern/716.mjs",revision:"7a0ba0e75908498c1379928b5afd4e32"},{url:"/src/modern/716.mjs.map",revision:"97a1e4ef06b9b80cdac24cfc9bf41895"},{url:"/src/modern/index.mjs",revision:"45e432ffb15060866b44105cec2da05c"},{url:"/src/modern/index.mjs.LICENSE.txt",revision:"f6f8766f9008e0980546d56f763b2ebe"},{url:"/src/modern/index.mjs.map",revision:"ddb215f8c8cd1ab1a95179b91f2ad1e6"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(/.(?:png|jpg|jpeg|svg|html|js|mjs)$/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=sw-modern.js.map
