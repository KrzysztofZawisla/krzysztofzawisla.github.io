if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return s[e]||(r=new Promise((async r=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=r}else importScripts(e),r()}))),r.then((()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]}))},r=(r,s)=>{Promise.all(r.map(e)).then((e=>s(1===e.length?e[0]:e)))},s={require:Promise.resolve(r)};self.define=(r,c,i)=>{s[r]||(s[r]=Promise.resolve().then((()=>{let s={};const a={uri:location.origin+r.slice(1)};return Promise.all(c.map((r=>{switch(r){case"exports":return s;case"module":return a;default:return e(r)}}))).then((e=>{const r=i(...e);return s.default||(s.default=r),s}))})))}}define("./sw.js",["./workbox-f0507fb7"],(function(e){"use strict";self.addEventListener("message",(function(e){e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/src/legacy/319.js",revision:"1557d3e6c0762554e3230e889d863b23"},{url:"/src/legacy/319.js.map",revision:"5fc4cc50f1e6db8724de0dfb70f0e6a3"},{url:"/src/legacy/606.js",revision:"576fb95d483a9461d77589343ce1faf5"},{url:"/src/legacy/606.js.map",revision:"c2c734b6ae90c32f9268c5e425f2fa51"},{url:"/src/legacy/694.js",revision:"f2c2e887d79a3f0a0c26e749e02b7d3b"},{url:"/src/legacy/694.js.map",revision:"9b0b6164fa949442aaa09db5825b9b49"},{url:"/src/legacy/761.js",revision:"6d119da72a340cc2542bef519684714e"},{url:"/src/legacy/761.js.map",revision:"9a087fd2e966880e9879ec489eb809b5"},{url:"/src/legacy/index.js",revision:"d6649a6386a7379910e84a976c57a23e"},{url:"/src/legacy/index.js.LICENSE.txt",revision:"f6f8766f9008e0980546d56f763b2ebe"},{url:"/src/legacy/index.js.map",revision:"352c8d1faf9c1becfa9c34e6fd29c6ac"}],{})}));
//# sourceMappingURL=sw.js.map
