if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return s[e]||(r=new Promise((async r=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=r}else importScripts(e),r()}))),r.then((()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]}))},r=(r,s)=>{Promise.all(r.map(e)).then((e=>s(1===e.length?e[0]:e)))},s={require:Promise.resolve(r)};self.define=(r,d,c)=>{s[r]||(s[r]=Promise.resolve().then((()=>{let s={};const i={uri:location.origin+r.slice(1)};return Promise.all(d.map((r=>{switch(r){case"exports":return s;case"module":return i;default:return e(r)}}))).then((e=>{const r=c(...e);return s.default||(s.default=r),s}))})))}}define("./sw-modern.js",["./workbox-08397c6a"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/src/modern/../../404.html",revision:"7814c62b8b16912a05d7b9b620e57afb"},{url:"/src/modern/../../index.html",revision:"63f2bb12751e9c9fbd8a918d0b0c39c5"},{url:"/src/modern/../../map.xml",revision:"b2b4a8557201fbe3f324c64bda34825a"},{url:"/src/modern/../../map.xml.gz",revision:"88ebfef049abf6a34994435d93160473"},{url:"/src/modern/../../robots.txt",revision:"5e0bd1c281a62a380d7a948085bfe2d1"},{url:"/src/modern/../../static/images/fav_512.png",revision:"ab3188b835c045758625309a0386b869"},{url:"/src/modern/../../static/images/gb.svg",revision:"9936cc97ec3d68c0ed5d25fba06e99b6"},{url:"/src/modern/../../static/images/pl.svg",revision:"653dc6869f77273225a5ba7b68ee87f5"},{url:"/src/modern/../../static/locales/en.json",revision:"d3d04488365d7b0622912a963ac88ad3"},{url:"/src/modern/../../static/locales/pl.json",revision:"8bcd82b1f4a92fd0689dabc0e6541415"},{url:"/src/modern/../../static/manifest.json",revision:"d6bf31d29d746e3f7b205c38d0c6821e"},{url:"/src/modern/190.mjs",revision:"d751e9b46e286ea2ae0e53a3de6b8bb7"},{url:"/src/modern/190.mjs.map",revision:"e23d0dcaf95be8438a91e19b701fb69f"},{url:"/src/modern/401.mjs",revision:"dffdcea7bada7022e6714d64e40fdf0b"},{url:"/src/modern/401.mjs.map",revision:"6a019c405af89d198cb7d1908f1a3689"},{url:"/src/modern/686.mjs",revision:"8c13ad1a274cbfe9b867fedd38d84a7f"},{url:"/src/modern/686.mjs.map",revision:"3fc78bd574cca2df3eff65444200daca"},{url:"/src/modern/908.mjs",revision:"0c58ec4e53bf14fcd762da78b446bca9"},{url:"/src/modern/908.mjs.map",revision:"5a21d7955a21e6ef37a8a27b2b4792c9"},{url:"/src/modern/index.mjs",revision:"43234f917eee106599dac196cd22f68e"},{url:"/src/modern/index.mjs.LICENSE.txt",revision:"f6f8766f9008e0980546d56f763b2ebe"},{url:"/src/modern/index.mjs.map",revision:"cee7a18d9663d428b153002eb3f0d738"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(/.(?:png|jpg|jpeg|svg|html|js|mjs)$/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=sw-modern.js.map
