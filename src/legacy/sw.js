if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return s[e]||(r=new Promise((async r=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=r}else importScripts(e),r()}))),r.then((()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]}))},r=(r,s)=>{Promise.all(r.map(e)).then((e=>s(1===e.length?e[0]:e)))},s={require:Promise.resolve(r)};self.define=(r,c,i)=>{s[r]||(s[r]=Promise.resolve().then((()=>{let s={};const a={uri:location.origin+r.slice(1)};return Promise.all(c.map((r=>{switch(r){case"exports":return s;case"module":return a;default:return e(r)}}))).then((e=>{const r=i(...e);return s.default||(s.default=r),s}))})))}}define("./sw.js",["./workbox-f0507fb7"],(function(e){"use strict";self.addEventListener("message",(function(e){e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/src/legacy/287.js",revision:"628360575755250c24471835320fc710"},{url:"/src/legacy/287.js.map",revision:"2b249b3781d037822eb27b46026fd49b"},{url:"/src/legacy/409.js",revision:"05e813a9ea820dbadfa66ad3a0064e99"},{url:"/src/legacy/409.js.map",revision:"c09273611323660a9b77ba2d0a5883eb"},{url:"/src/legacy/716.js",revision:"8dcfce93a59e1742cb88567f9bee2120"},{url:"/src/legacy/716.js.map",revision:"63b4faab8049f3ffd337a7af30f1ba26"},{url:"/src/legacy/765.js",revision:"cfd97590d6346ab488accb603ef6e230"},{url:"/src/legacy/765.js.map",revision:"4ae407d4869a5c27e9125f5aa0987249"},{url:"/src/legacy/index.js",revision:"d0d11b3beb75277c025bfa6f86bff3c3"},{url:"/src/legacy/index.js.LICENSE.txt",revision:"f6f8766f9008e0980546d56f763b2ebe"},{url:"/src/legacy/index.js.map",revision:"4416c0057a0b98513c580858ccad3313"}],{})}));
//# sourceMappingURL=sw.js.map
