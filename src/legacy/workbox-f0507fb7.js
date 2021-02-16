define("./workbox-f0507fb7.js",["exports"],(function(e){"use strict";try{self["workbox:core:6.1.0"]&&_()}catch(e){}var r=null;function t(e,r,t,n,i,u,a){try{var c=e[u](a),s=c.value}catch(e){return void t(e)}c.done?r(s):Promise.resolve(s).then(n,i)}function n(e){return function(){var r=this,n=arguments;return new Promise((function(i,u){var a=e.apply(r,n);function c(e){t(a,i,u,c,s,"next",e)}function s(e){t(a,i,u,c,s,"throw",e)}c(void 0)}))}}function i(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function u(e,r,t){return r&&i(e.prototype,r),t&&i(e,t),e}function a(){return(a=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function c(e,r){e.prototype=Object.create(r.prototype),e.prototype.constructor=e,o(e,r)}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function o(e,r){return(o=Object.setPrototypeOf||function(e,r){return e.__proto__=r,e})(e,r)}function f(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function h(e,r,t){return(h=f()?Reflect.construct:function(e,r,t){var n=[null];n.push.apply(n,r);var i=new(Function.bind.apply(e,n));return t&&o(i,t.prototype),i}).apply(null,arguments)}function v(e){var r="function"==typeof Map?new Map:void 0;return(v=function(e){if(null===e||(t=e,-1===Function.toString.call(t).indexOf("[native code]")))return e;var t;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==r){if(r.has(e))return r.get(e);r.set(e,n)}function n(){return h(e,arguments,s(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),o(n,e)})(e)}function l(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function d(e,r){var t;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(t=function(e,r){if(e){if("string"==typeof e)return l(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?l(e,r):void 0}}(e))||r&&e&&"number"==typeof e.length){t&&(e=t);var n=0;return function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(t=e[Symbol.iterator]()).next.bind(t)}var w=function(e){for(var r=e,t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];return n.length>0&&(r+=" :: "+JSON.stringify(n)),r},b=function(e){function r(r,t){var n,i=w(r,t);return(n=e.call(this,i)||this).name=r,n.details=t,n}return c(r,e),r}(v(Error));try{self["workbox:routing:6.1.0"]&&_()}catch(e){}var m,g=function(e){return e&&"object"==typeof e?e:{handle:e}},R=function(){function e(e,r,t){void 0===t&&(t="GET"),this.handler=g(r),this.match=e,this.method=t}return e.prototype.setCatchHandler=function(e){this.catchHandler=g(e)},e}(),p=function(e){function r(r,t,n){return e.call(this,(function(e){var t=e.url,n=r.exec(t.href);if(n&&(t.origin===location.origin||0===n.index))return n.slice(1)}),t,n)||this}return c(r,e),r}(R),k=function(e){return new URL(String(e),location.href).href.replace(new RegExp("^"+location.origin),"")},y=function(){function e(){this.t=new Map,this.i=new Map}var r=e.prototype;return r.addFetchListener=function(){var e=this;self.addEventListener("fetch",(function(r){var t=r.request,n=e.handleRequest({request:t,event:r});n&&r.respondWith(n)}))},r.addCacheListener=function(){var e=this;self.addEventListener("message",(function(r){if(r.data&&"CACHE_URLS"===r.data.type){var t=r.data.payload,n=Promise.all(t.urlsToCache.map((function(t){"string"==typeof t&&(t=[t]);var n=h(Request,t);return e.handleRequest({request:n,event:r})})));r.waitUntil(n),r.ports&&r.ports[0]&&n.then((function(){return r.ports[0].postMessage(!0)}))}}))},r.handleRequest=function(e){var r=this,t=e.request,i=e.event,u=new URL(t.url,location.href);if(u.protocol.startsWith("http")){var a=u.origin===location.origin,c=this.findMatchingRoute({event:i,request:t,sameOrigin:a,url:u}),s=c.params,o=c.route,f=o&&o.handler,h=t.method;if(!f&&this.i.has(h)&&(f=this.i.get(h)),f){var v;try{v=f.handle({url:u,request:t,event:i,params:s})}catch(e){v=Promise.reject(e)}var l=o&&o.catchHandler;return v instanceof Promise&&(this.u||l)&&(v=v.catch(function(){var e=n(regeneratorRuntime.mark((function e(n){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!l){e.next=11;break}return e.prev=2,e.next=5,l.handle({url:u,request:t,event:i,params:s});case 5:return e.abrupt("return",e.sent);case 8:e.prev=8,e.t0=e.catch(2),n=e.t0;case 11:if(!r.u){e.next=14;break}return e.abrupt("return",r.u.handle({url:u,request:t,event:i}));case 14:throw n;case 15:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(r){return e.apply(this,arguments)}}())),v}}},r.findMatchingRoute=function(e){for(var r,t=e.url,n=e.sameOrigin,i=e.request,u=e.event,a=d(this.t.get(i.method)||[]);!(r=a()).done;){var c=r.value,s=void 0,o=c.match({url:t,sameOrigin:n,request:i,event:u});if(o)return s=o,(Array.isArray(o)&&0===o.length||o.constructor===Object&&0===Object.keys(o).length||"boolean"==typeof o)&&(s=void 0),{route:c,params:s}}return{}},r.setDefaultHandler=function(e,r){void 0===r&&(r="GET"),this.i.set(r,g(e))},r.setCatchHandler=function(e){this.u=g(e)},r.registerRoute=function(e){this.t.has(e.method)||this.t.set(e.method,[]),this.t.get(e.method).push(e)},r.unregisterRoute=function(e){if(!this.t.has(e.method))throw new b("unregister-route-but-not-found-with-method",{method:e.method});var r=this.t.get(e.method).indexOf(e);if(!(r>-1))throw new b("unregister-route-route-not-registered");this.t.get(e.method).splice(r,1)},u(e,[{key:"routes",get:function(){return this.t}}]),e}();var q={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},U=function(e){return[q.prefix,e,q.suffix].filter((function(e){return e&&e.length>0})).join("-")},O=function(e){return e||U(q.precache)},L=function(e){return e||U(q.runtime)};function E(e,r){var t=r();return e.waitUntil(t),t}try{self["workbox:precaching:6.1.0"]&&_()}catch(e){}function j(e){if(!e)throw new b("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){var r=new URL(e,location.href);return{cacheKey:r.href,url:r.href}}var t=e.revision,n=e.url;if(!n)throw new b("add-to-cache-list-unexpected-type",{entry:e});if(!t){var i=new URL(n,location.href);return{cacheKey:i.href,url:i.href}}var u=new URL(n,location.href),a=new URL(n,location.href);return u.searchParams.set("__WB_REVISION__",t),{cacheKey:u.href,url:a.href}}var x,S=function(){var e=this;this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=function(){var e=n(regeneratorRuntime.mark((function e(r){var t,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=r.request,(n=r.state)&&(n.originalRequest=t);case 2:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),this.cachedResponseWillBeUsed=function(){var r=n(regeneratorRuntime.mark((function r(t){var n,i,u,a;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=t.event,i=t.state,u=t.cachedResponse,"install"===n.type&&(a=i.originalRequest.url,u?e.notUpdatedURLs.push(a):e.updatedURLs.push(a)),r.abrupt("return",u);case 3:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()},N=function(e){var r=this,t=e.precacheController;this.cacheKeyWillBeUsed=function(){var e=n(regeneratorRuntime.mark((function e(t){var n,i,u;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.request,i=t.params,u=i&&i.cacheKey||r.o.getCacheKeyForURL(n.url),e.abrupt("return",u?new Request(u):n);case 3:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),this.o=t};function W(){if(void 0===x){var e=new Response("");if("body"in e)try{new Response(e.body),x=!0}catch(e){x=!1}x=!1}return x}function A(e,r){return D.apply(this,arguments)}function D(){return(D=n(regeneratorRuntime.mark((function e(r,t){var n,i,u,a,c,s;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=null,r.url&&(i=new URL(r.url),n=i.origin),n===self.location.origin){e.next=4;break}throw new b("cross-origin-copy-response",{origin:n});case 4:if(u=r.clone(),a={headers:new Headers(u.headers),status:u.status,statusText:u.statusText},c=t?t(a):a,!W()){e.next=11;break}e.t0=u.body,e.next=14;break;case 11:return e.next=13,u.blob();case 13:e.t0=e.sent;case 14:return s=e.t0,e.abrupt("return",new Response(s,c));case 16:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function P(e,r){for(var t,n=new URL(e),i=d(r);!(t=i()).done;){var u=t.value;n.searchParams.delete(u)}return n.href}function M(e,r,t,n){return T.apply(this,arguments)}function T(){return(T=n(regeneratorRuntime.mark((function e(r,t,n,i){var u,c,s,o,f,h,v;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(u=P(t.url,n),t.url!==u){e.next=3;break}return e.abrupt("return",r.match(t,i));case 3:return c=a({},i,{ignoreSearch:!0}),e.next=6,r.keys(t,c);case 6:s=e.sent,o=d(s);case 8:if((f=o()).done){e.next=15;break}if(h=f.value,v=P(h.url,n),u!==v){e.next=13;break}return e.abrupt("return",r.match(h,i));case 13:e.next=8;break;case 15:return e.abrupt("return");case 16:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var F=function(){var e=this;this.promise=new Promise((function(r,t){e.resolve=r,e.reject=t}))},I=new Set;function K(){return C.apply(this,arguments)}function C(){return(C=n(regeneratorRuntime.mark((function e(){var r,t,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=d(I);case 2:if((t=r()).done){e.next=9;break}return n=t.value,e.next=6,n();case 6:case 7:e.next=2;break;case 9:case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function B(e){return new Promise((function(r){return setTimeout(r,e)}))}try{self["workbox:strategies:6.1.0"]&&_()}catch(e){}function V(e){return"string"==typeof e?new Request(e):e}var G=function(){function e(e,r){this.h={},Object.assign(this,r),this.event=r.event,this.v=e,this.l=new F,this.m=[],this.g=[].concat(e.plugins),this.R=new Map;for(var t,n=d(this.g);!(t=n()).done;){var i=t.value;this.R.set(i,{})}this.event.waitUntil(this.l.promise)}var r=e.prototype;return r.fetch=function(e){function r(r){return e.apply(this,arguments)}return r.toString=function(){return e.toString()},r}((function(e){var r=this;return this.waitUntil(n(regeneratorRuntime.mark((function t(){var n,i,u,a,c,s,o,f,h,v,l,w;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=r.event,!("navigate"===(i=V(e)).mode&&n instanceof FetchEvent&&n.preloadResponse)){t.next=9;break}return t.next=5,n.preloadResponse;case 5:if(!(u=t.sent)){t.next=9;break}return t.abrupt("return",u);case 9:a=r.hasCallback("fetchDidFail")?i.clone():null,t.prev=10,c=d(r.iterateCallbacks("requestWillFetch"));case 12:if((s=c()).done){t.next=19;break}return o=s.value,t.next=16,o({request:i.clone(),event:n});case 16:i=t.sent;case 17:t.next=12;break;case 19:t.next=24;break;case 21:throw t.prev=21,t.t0=t.catch(10),new b("plugin-error-request-will-fetch",{thrownError:t.t0});case 24:return f=i.clone(),t.prev=25,t.next=28,fetch(i,"navigate"===i.mode?void 0:r.v.fetchOptions);case 28:h=t.sent,v=d(r.iterateCallbacks("fetchDidSucceed"));case 31:if((l=v()).done){t.next=38;break}return w=l.value,t.next=35,w({event:n,request:f,response:h});case 35:h=t.sent;case 36:t.next=31;break;case 38:return t.abrupt("return",h);case 41:if(t.prev=41,t.t1=t.catch(25),!a){t.next=47;break}return t.next=47,r.runCallbacks("fetchDidFail",{error:t.t1,event:n,originalRequest:a.clone(),request:f.clone()});case 47:throw t.t1;case 48:case"end":return t.stop()}}),t,null,[[10,21],[25,41]])})))())})),r.fetchAndCachePut=function(){var e=n(regeneratorRuntime.mark((function e(r){var t,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.fetch(r);case 2:return t=e.sent,n=t.clone(),this.waitUntil(this.cachePut(r,n)),e.abrupt("return",t);case 6:case"end":return e.stop()}}),e,this)})));return function(r){return e.apply(this,arguments)}}(),r.cacheMatch=function(e){var r=this;return this.waitUntil(n(regeneratorRuntime.mark((function t(){var n,i,u,c,s,o,f,h,v,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=V(e),u=r.v,c=u.cacheName,s=u.matchOptions,t.next=4,r.getCacheKey(n,"read");case 4:return o=t.sent,f=a({},s,{cacheName:c}),t.next=8,caches.match(o,f);case 8:i=t.sent,h=d(r.iterateCallbacks("cachedResponseWillBeUsed"));case 11:if((v=h()).done){t.next=21;break}return l=v.value,t.next=15,l({cacheName:c,matchOptions:s,cachedResponse:i,request:o,event:r.event});case 15:if(t.t0=t.sent,t.t0){t.next=18;break}t.t0=void 0;case 18:i=t.t0;case 19:t.next=11;break;case 21:return t.abrupt("return",i);case 22:case"end":return t.stop()}}),t)})))())},r.cachePut=function(){var e=n(regeneratorRuntime.mark((function e(r,t){var n,i,u,a,c,s,o,f,h,v,l,w;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=V(r),e.next=3,B(0);case 3:return e.next=5,this.getCacheKey(n,"write");case 5:i=e.sent,e.next=9;break;case 9:if(t){e.next=12;break}throw new b("cache-put-with-no-response",{url:k(i.url)});case 12:return e.next=14,this.p(t);case 14:if(u=e.sent){e.next=18;break}return e.abrupt("return",!1);case 18:return a=this.v,c=a.cacheName,s=a.matchOptions,e.next=21,self.caches.open(c);case 21:if(o=e.sent,!(f=this.hasCallback("cacheDidUpdate"))){e.next=29;break}return e.next=26,M(o,i.clone(),["__WB_REVISION__"],s);case 26:e.t0=e.sent,e.next=30;break;case 29:e.t0=null;case 30:return h=e.t0,e.prev=32,e.next=35,o.put(i,f?u.clone():u);case 35:e.next=43;break;case 37:if(e.prev=37,e.t1=e.catch(32),"QuotaExceededError"!==e.t1.name){e.next=42;break}return e.next=42,K();case 42:throw e.t1;case 43:v=d(this.iterateCallbacks("cacheDidUpdate"));case 44:if((l=v()).done){e.next=50;break}return w=l.value,e.next=48,w({cacheName:c,oldResponse:h,newResponse:u.clone(),request:i,event:this.event});case 48:e.next=44;break;case 50:return e.abrupt("return",!0);case 51:case"end":return e.stop()}}),e,this,[[32,37]])})));return function(r,t){return e.apply(this,arguments)}}(),r.getCacheKey=function(){var e=n(regeneratorRuntime.mark((function e(r,t){var n,i,u,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.h[t]){e.next=13;break}n=r,i=d(this.iterateCallbacks("cacheKeyWillBeUsed"));case 3:if((u=i()).done){e.next=12;break}return a=u.value,e.t0=V,e.next=8,a({mode:t,request:n,event:this.event,params:this.params});case 8:e.t1=e.sent,n=(0,e.t0)(e.t1);case 10:e.next=3;break;case 12:this.h[t]=n;case 13:return e.abrupt("return",this.h[t]);case 14:case"end":return e.stop()}}),e,this)})));return function(r,t){return e.apply(this,arguments)}}(),r.hasCallback=function(e){for(var r,t=d(this.v.plugins);!(r=t()).done;){if(e in r.value)return!0}return!1},r.runCallbacks=function(){var e=n(regeneratorRuntime.mark((function e(r,t){var n,i,u;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=d(this.iterateCallbacks(r));case 1:if((i=n()).done){e.next=7;break}return u=i.value,e.next=5,u(t);case 5:e.next=1;break;case 7:case"end":return e.stop()}}),e,this)})));return function(r,t){return e.apply(this,arguments)}}(),r.iterateCallbacks=regeneratorRuntime.mark((function e(r){var t,n,i,u=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=regeneratorRuntime.mark((function e(){var t,n,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("function"!=typeof(t=i.value)[r]){e.next=6;break}return n=u.R.get(t),c=function(e){var i=a({},e,{state:n});return t[r](i)},e.next=6,c;case 6:case"end":return e.stop()}}),e)})),n=d(this.v.plugins);case 2:if((i=n()).done){e.next=6;break}return e.delegateYield(t(),"t0",4);case 4:e.next=2;break;case 6:case"end":return e.stop()}}),e,this)})),r.waitUntil=function(e){return this.m.push(e),e},r.doneWaiting=function(){var e=n(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(r=this.m.shift())){e.next=5;break}return e.next=3,r;case 3:e.next=0;break;case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}(),r.destroy=function(){this.l.resolve()},r.p=function(){var e=n(regeneratorRuntime.mark((function e(r){var t,n,i,u,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=r,n=!1,i=d(this.iterateCallbacks("cacheWillUpdate"));case 3:if((u=i()).done){e.next=16;break}return a=u.value,e.next=7,a({request:this.request,response:t,event:this.event});case 7:if(e.t0=e.sent,e.t0){e.next=10;break}e.t0=void 0;case 10:if(t=e.t0,n=!0,t){e.next=14;break}return e.abrupt("break",16);case 14:e.next=3;break;case 16:return n||t&&200!==t.status&&(t=void 0),e.abrupt("return",t);case 18:case"end":return e.stop()}}),e,this)})));return function(r){return e.apply(this,arguments)}}(),e}(),H=function(e){function t(r){var n;return void 0===r&&(r={}),r.cacheName=O(r.cacheName),(n=e.call(this,r)||this).k=!1!==r.fallbackToNetwork,n.plugins.push(t.copyRedirectedCacheableResponsesPlugin),n}c(t,e);var i=t.prototype;return i.q=function(){var e=n(regeneratorRuntime.mark((function e(r,t){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.cacheMatch(r);case 2:if(n=e.sent){e.next=11;break}if(!t.event||"install"!==t.event.type){e.next=8;break}return e.next=7,this.U(r,t);case 7:return e.abrupt("return",e.sent);case 8:return e.next=10,this.O(r,t);case 10:return e.abrupt("return",e.sent);case 11:return e.abrupt("return",n);case 12:case"end":return e.stop()}}),e,this)})));return function(r,t){return e.apply(this,arguments)}}(),i.O=function(){var e=n(regeneratorRuntime.mark((function e(t,n){var i,u;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.k){e.next=7;break}return e.next=4,n.fetch(t);case 4:i=e.sent,e.next=8;break;case 7:throw new b("missing-precache-entry",{cacheName:this.cacheName,url:t.url});case 8:e.next=24;break;case 13:e.t0=e.sent;case 14:u=e.t0,r.groupCollapsed("Precaching is responding to: "+k(t.url)),r.log("Serving the precached url: "+k(u.url)),r.groupCollapsed("View request details here."),r.log(t),r.groupEnd(),r.groupCollapsed("View response details here."),r.log(i),r.groupEnd(),r.groupEnd();case 24:return e.abrupt("return",i);case 25:case"end":return e.stop()}}),e,this)})));return function(r,t){return e.apply(this,arguments)}}(),i.U=function(){var e=n(regeneratorRuntime.mark((function e(r,t){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.L(),e.next=3,t.fetch(r);case 3:return n=e.sent,e.next=6,t.cachePut(r,n.clone());case 6:if(e.sent){e.next=9;break}throw new b("bad-precaching-response",{url:r.url,status:n.status});case 9:return e.abrupt("return",n);case 10:case"end":return e.stop()}}),e,this)})));return function(r,t){return e.apply(this,arguments)}}(),i.L=function(){for(var e,r=null,n=0,i=d(this.plugins.entries());!(e=i()).done;){var u=e.value,a=u[0],c=u[1];c!==t.copyRedirectedCacheableResponsesPlugin&&(c===t.defaultPrecacheCacheabilityPlugin&&(r=a),c.cacheWillUpdate&&n++)}0===n?this.plugins.push(t.defaultPrecacheCacheabilityPlugin):n>1&&null!==r&&this.plugins.splice(r,1)},t}(function(){function e(e){void 0===e&&(e={}),this.cacheName=L(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}var r=e.prototype;return r.handle=function(e){return this.handleAll(e)[0]},r.handleAll=function(e){e instanceof FetchEvent&&(e={event:e,request:e.request});var r=e.event,t="string"==typeof e.request?new Request(e.request):e.request,n="params"in e?e.params:void 0,i=new G(this,{event:r,request:t,params:n}),u=this.j(i,t,r);return[u,this.S(u,i,t,r)]},r.j=function(){var e=n(regeneratorRuntime.mark((function e(r,t,n){var i,u,a,c,s,o,f;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.runCallbacks("handlerWillStart",{event:n,request:t});case 2:return i=void 0,e.prev=3,e.next=6,this.q(t,r);case 6:if((i=e.sent)&&"error"!==i.type){e.next=9;break}throw new b("no-response",{url:t.url});case 9:e.next=28;break;case 11:e.prev=11,e.t0=e.catch(3),u=d(r.iterateCallbacks("handlerDidError"));case 14:if((a=u()).done){e.next=23;break}return c=a.value,e.next=18,c({error:e.t0,event:n,request:t});case 18:if(!(i=e.sent)){e.next=21;break}return e.abrupt("break",23);case 21:e.next=14;break;case 23:if(i){e.next=27;break}throw e.t0;case 27:case 28:s=d(r.iterateCallbacks("handlerWillRespond"));case 29:if((o=s()).done){e.next=36;break}return f=o.value,e.next=33,f({event:n,request:t,response:i});case 33:i=e.sent;case 34:e.next=29;break;case 36:return e.abrupt("return",i);case 37:case"end":return e.stop()}}),e,this,[[3,11]])})));return function(r,t,n){return e.apply(this,arguments)}}(),r.S=function(){var e=n(regeneratorRuntime.mark((function e(r,t,n,i){var u,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r;case 3:u=e.sent,e.next=8;break;case 6:e.prev=6,e.t0=e.catch(0);case 8:return e.prev=8,e.next=11,t.runCallbacks("handlerDidRespond",{event:i,request:n,response:u});case 11:return e.next=13,t.doneWaiting();case 13:e.next=18;break;case 15:e.prev=15,e.t1=e.catch(8),a=e.t1;case 18:return e.next=20,t.runCallbacks("handlerDidComplete",{event:i,request:n,response:u,error:a});case 20:if(t.destroy(),!a){e.next=23;break}throw a;case 23:case"end":return e.stop()}}),e,null,[[0,6],[8,15]])})));return function(r,t,n,i){return e.apply(this,arguments)}}(),e}());H.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:function(e){return n(regeneratorRuntime.mark((function r(){var t;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if((t=e.response)&&!(t.status>=400)){r.next=3;break}return r.abrupt("return",null);case 3:return r.abrupt("return",t);case 4:case"end":return r.stop()}}),r)})))()}},H.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:function(e){return n(regeneratorRuntime.mark((function r(){var t;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!(t=e.response).redirected){r.next=7;break}return r.next=4,A(t);case 4:r.t0=r.sent,r.next=8;break;case 7:r.t0=t;case 8:return r.abrupt("return",r.t0);case 9:case"end":return r.stop()}}),r)})))()}};var $,J=function(){function e(e){var r=void 0===e?{}:e,t=r.cacheName,n=r.plugins,i=void 0===n?[]:n,u=r.fallbackToNetwork,a=void 0===u||u;this._=new Map,this.N=new Map,this.W=new Map,this.v=new H({cacheName:O(t),plugins:[].concat(i,[new N({precacheController:this})]),fallbackToNetwork:a}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}var r=e.prototype;return r.precache=function(e){this.addToCacheList(e),this.A||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this.A=!0)},r.addToCacheList=function(e){for(var r,t=[],n=d(e);!(r=n()).done;){var i=r.value;"string"==typeof i?t.push(i):i&&void 0===i.revision&&t.push(i.url);var u=j(i),a=u.cacheKey,c=u.url,s="string"!=typeof i&&i.revision?"reload":"default";if(this._.has(c)&&this._.get(c)!==a)throw new b("add-to-cache-list-conflicting-entries",{firstEntry:this._.get(c),secondEntry:a});if("string"!=typeof i&&i.integrity){if(this.W.has(a)&&this.W.get(a)!==i.integrity)throw new b("add-to-cache-list-conflicting-integrities",{url:c});this.W.set(a,i.integrity)}if(this._.set(c,a),this.N.set(c,s),t.length>0){var o="Workbox is precaching URLs without revision info: "+t.join(", ")+"\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache";console.warn(o)}}},r.install=function(e){var r=this;return E(e,n(regeneratorRuntime.mark((function t(){var n,i,u,a,c,s,o,f,h,v,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=new S,r.strategy.plugins.push(n),i=d(r._);case 3:if((u=i()).done){t.next=12;break}return a=u.value,c=a[0],s=a[1],o=r.W.get(s),f=r.N.get(c),h=new Request(c,{integrity:o,cache:f,credentials:"same-origin"}),t.next=10,Promise.all(r.strategy.handleAll({params:{cacheKey:s},request:h,event:e}));case 10:t.next=3;break;case 12:return v=n.updatedURLs,l=n.notUpdatedURLs,t.abrupt("return",{updatedURLs:v,notUpdatedURLs:l});case 15:case"end":return t.stop()}}),t)}))))},r.activate=function(e){var r=this;return E(e,n(regeneratorRuntime.mark((function e(){var t,n,i,u,a,c,s;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,self.caches.open(r.strategy.cacheName);case 2:return t=e.sent,e.next=5,t.keys();case 5:n=e.sent,i=new Set(r._.values()),u=[],a=d(n);case 9:if((c=a()).done){e.next=17;break}if(s=c.value,i.has(s.url)){e.next=15;break}return e.next=14,t.delete(s);case 14:u.push(s.url);case 15:e.next=9;break;case 17:return e.abrupt("return",{deletedURLs:u});case 19:case"end":return e.stop()}}),e)}))))},r.getURLsToCacheKeys=function(){return this._},r.getCachedURLs=function(){return[].concat(this._.keys())},r.getCacheKeyForURL=function(e){var r=new URL(e,location.href);return this._.get(r.href)},r.matchPrecache=function(){var e=n(regeneratorRuntime.mark((function e(r){var t,n,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=r instanceof Request?r.url:r,!(n=this.getCacheKeyForURL(t))){e.next=7;break}return e.next=5,self.caches.open(this.strategy.cacheName);case 5:return i=e.sent,e.abrupt("return",i.match(n));case 7:return e.abrupt("return",void 0);case 8:case"end":return e.stop()}}),e,this)})));return function(r){return e.apply(this,arguments)}}(),r.createHandlerBoundToURL=function(e){var r=this,t=this.getCacheKeyForURL(e);if(!t)throw new b("non-precached-url",{url:e});return function(n){return n.request=new Request(e),n.params=a({cacheKey:t},n.params),r.strategy.handle(n)}},u(e,[{key:"strategy",get:function(){return this.v}}]),e}(),Q=function(){return $||($=new J),$};function z(e,r){void 0===r&&(r=[]);for(var t=function(){var t=i[n];r.some((function(e){return e.test(t)}))&&e.searchParams.delete(t)},n=0,i=[].concat(e.searchParams.keys());n<i.length;n++)t();return e}var X=regeneratorRuntime.mark(Y);function Y(e,r){var t,n,i,u,a,c,s,o,f,h,v,l,w,b,m,g;return regeneratorRuntime.wrap((function(R){for(;;)switch(R.prev=R.next){case 0:return n=(t=void 0===r?{}:r).ignoreURLParametersMatching,i=void 0===n?[/^utm_/,/^fbclid$/]:n,u=t.directoryIndex,a=void 0===u?"index.html":u,c=t.cleanURLs,s=void 0===c||c,o=t.urlManipulation,(f=new URL(e,location.href)).hash="",R.next=5,f.href;case 5:return h=z(f,i),R.next=8,h.href;case 8:if(!a||!h.pathname.endsWith("/")){R.next=13;break}return(v=new URL(h.href)).pathname+=a,R.next=13,v.href;case 13:if(!s){R.next=18;break}return(l=new URL(h.href)).pathname+=".html",R.next=18,l.href;case 18:if(!o){R.next=27;break}w=o({url:f}),b=d(w);case 21:if((m=b()).done){R.next=27;break}return g=m.value,R.next=25,g.href;case 25:R.next=21;break;case 27:case"end":return R.stop()}}),X)}var Z=function(e){function r(r,t){return e.call(this,(function(e){for(var n,i=e.request,u=r.getURLsToCacheKeys(),a=d(Y(i.url,t));!(n=a()).done;){var c=n.value,s=u.get(c);if(s)return{cacheKey:s}}}),r.strategy)||this}return c(r,e),r}(R);function ee(e){var r=Q();!function(e,r,t){var n;if("string"==typeof e){var i=new URL(e,location.href);n=new R((function(e){return e.url.href===i.href}),r,t)}else if(e instanceof RegExp)n=new p(e,r,t);else if("function"==typeof e)n=new R(e,r,t);else{if(!(e instanceof R))throw new b("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});n=e}(m||((m=new y).addFetchListener(),m.addCacheListener()),m).registerRoute(n)}(new Z(r,e))}e.precacheAndRoute=function(e,r){!function(e){Q().precache(e)}(e),ee(r)}}));
//# sourceMappingURL=workbox-f0507fb7.js.map