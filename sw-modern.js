if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return s[e]||(r=new Promise((async r=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=r}else importScripts(e),r()}))),r.then((()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]}))},r=(r,s)=>{Promise.all(r.map(e)).then((e=>s(1===e.length?e[0]:e)))},s={require:Promise.resolve(r)};self.define=(r,n,i)=>{s[r]||(s[r]=Promise.resolve().then((()=>{let s={};const o={uri:location.origin+r.slice(1)};return Promise.all(n.map((r=>{switch(r){case"exports":return s;case"module":return o;default:return e(r)}}))).then((e=>{const r=i(...e);return s.default||(s.default=r),s}))})))}}define("./sw-modern.js",["./workbox-08397c6a"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/src/modern/../../404.html",revision:"7814c62b8b16912a05d7b9b620e57afb"},{url:"/src/modern/../../index.html",revision:"5107bb9c73f3485aa98947a0f7cec511"},{url:"/src/modern/../../map.xml",revision:"b2b4a8557201fbe3f324c64bda34825a"},{url:"/src/modern/../../map.xml.gz",revision:"88ebfef049abf6a34994435d93160473"},{url:"/src/modern/../../robots.txt",revision:"5e0bd1c281a62a380d7a948085bfe2d1"},{url:"/src/modern/../../static/images/fav_512.png",revision:"ab3188b835c045758625309a0386b869"},{url:"/src/modern/../../static/locales/en.json",revision:"131785bc2a033050a3aff0e76a02a855"},{url:"/src/modern/../../static/locales/pl.json",revision:"ae41a54c95e29e6d453a81f9c4f8565f"},{url:"/src/modern/../../static/manifest.json",revision:"a0efe5eab67fd0ba636cf0c0a36319da"},{url:"/src/modern/398.mjs",revision:"76ed201aa33d3384451ee5cc22ccda11"},{url:"/src/modern/398.mjs.map",revision:"698c02aa60064971205f2123e865ae8e"},{url:"/src/modern/409.mjs",revision:"85e75156dbb999681967656f4d0eb4fd"},{url:"/src/modern/409.mjs.map",revision:"168f05ce9f4fa372a4ee1626b668152d"},{url:"/src/modern/485.mjs",revision:"7b2f657962e47ab8dd1d272dfd0da5a8"},{url:"/src/modern/485.mjs.map",revision:"708c91fbb00017bd6c8199cfe4c6f941"},{url:"/src/modern/716.mjs",revision:"ed90759724fc70f2ab39388e98e02462"},{url:"/src/modern/716.mjs.map",revision:"2346f520186592d1966ff9e16108fc82"},{url:"/src/modern/index.mjs",revision:"afdba8bce39ae11dfdd247e73c045062"},{url:"/src/modern/index.mjs.LICENSE.txt",revision:"f6f8766f9008e0980546d56f763b2ebe"},{url:"/src/modern/index.mjs.map",revision:"bd1b144a8798329458da314064effe6e"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(/.(?:png|jpg|jpeg|svg|html|js|mjs)$/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=sw-modern.js.map
