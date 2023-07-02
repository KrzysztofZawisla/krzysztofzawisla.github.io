define("./workbox-3a48a458.js",["exports"],(function(e){"use strict";try{self["workbox:core:6.1.5"]&&_()}catch(e){}var r=null;function t(e,r,t,n,i,u,a){try{var c=e[u](a),s=c.value}catch(e){return void t(e)}c.done?r(s):Promise.resolve(s).then(n,i)}function n(e){return function(){var r=this,n=arguments;return new Promise((function(i,u){var a=e.apply(r,n);function c(e){t(a,i,u,c,s,"next",e)}function s(e){t(a,i,u,c,s,"throw",e)}c(void 0)}))}}function i(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function u(e,r,t){return r&&i(e.prototype,r),t&&i(e,t),e}function a(){return(a=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function c(e,r){e.prototype=Object.create(r.prototype),e.prototype.constructor=e,o(e,r)}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function o(e,r){return(o=Object.setPrototypeOf||function(e,r){return e.__proto__=r,e})(e,r)}function f(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function h(e,r,t){return(h=f()?Reflect.construct:function(e,r,t){var n=[null];n.push.apply(n,r);var i=new(Function.bind.apply(e,n));return t&&o(i,t.prototype),i}).apply(null,arguments)}function v(e){var r="function"==typeof Map?new Map:void 0;return(v=function(e){if(null===e||(t=e,-1===Function.toString.call(t).indexOf("[native code]")))return e;var t;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==r){if(r.has(e))return r.get(e);r.set(e,n)}function n(){return h(e,arguments,s(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),o(n,e)})(e)}function l(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function d(e,r){var t;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(t=function(e,r){if(e){if("string"==typeof e)return l(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?l(e,r):void 0}}(e))||r&&e&&"number"==typeof e.length){t&&(e=t);var n=0;return function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(t=e[Symbol.iterator]()).next.bind(t)}var w=function(e){for(var r=e,t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];return n.length>0&&(r+=" :: "+JSON.stringify(n)),r},m=function(e){function r(r,t){var n,i=w(r,t);return(n=e.call(this,i)||this).name=r,n.details=t,n}return c(r,e),r}(v(Error));try{self["workbox:routing:6.1.5"]&&_()}catch(e){}var b,g=function(e){return e&&"object"==typeof e?e:{handle:e}},R=function(){function e(e,r,t){void 0===t&&(t="GET"),this.handler=g(r),this.match=e,this.method=t}return e.prototype.setCatchHandler=function(e){this.catchHandler=g(e)},e}(),p=function(e){function r(r,t,n){return e.call(this,(function(e){var t=e.url,n=r.exec(t.href);if(n&&(t.origin===location.origin||0===n.index))return n.slice(1)}),t,n)||this}return c(r,e),r}(R),k=function(e){return new URL(String(e),location.href).href.replace(new RegExp("^"+location.origin),"")},y=function(){function e(){this.t=new Map,this.i=new Map}var r=e.prototype;return r.addFetchListener=function(){var e=this;self.addEventListener("fetch",(function(r){var t=r.request,n=e.handleRequest({request:t,event:r});n&&r.respondWith(n)}))},r.addCacheListener=function(){var e=this;self.addEventListener("message",(function(r){if(r.data&&"CACHE_URLS"===r.data.type){var t=r.data.payload,n=Promise.all(t.urlsToCache.map((function(t){"string"==typeof t&&(t=[t]);var n=h(Request,t);return e.handleRequest({request:n,event:r})})));r.waitUntil(n),r.ports&&r.ports[0]&&n.then((function(){return r.ports[0].postMessage(!0)}))}}))},r.handleRequest=function(e){var r=this,t=e.request,i=e.event,u=new URL(t.url,location.href);if(u.protocol.startsWith("http")){var a=u.origin===location.origin,c=this.findMatchingRoute({event:i,request:t,sameOrigin:a,url:u}),s=c.params,o=c.route,f=o&&o.handler,h=t.method;if(!f&&this.i.has(h)&&(f=this.i.get(h)),f){var v;try{v=f.handle({url:u,request:t,event:i,params:s})}catch(e){v=Promise.reject(e)}var l=o&&o.catchHandler;return v instanceof Promise&&(this.u||l)&&(v=v.catch(function(){var e=n(regeneratorRuntime.mark((function e(n){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!l){e.next=11;break}return e.prev=2,e.next=5,l.handle({url:u,request:t,event:i,params:s});case 5:return e.abrupt("return",e.sent);case 8:e.prev=8,e.t0=e.catch(2),n=e.t0;case 11:if(!r.u){e.next=14;break}return e.abrupt("return",r.u.handle({url:u,request:t,event:i}));case 14:throw n;case 15:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(r){return e.apply(this,arguments)}}())),v}}},r.findMatchingRoute=function(e){for(var r,t=e.url,n=e.sameOrigin,i=e.request,u=e.event,a=d(this.t.get(i.method)||[]);!(r=a()).done;){var c=r.value,s=void 0,o=c.match({url:t,sameOrigin:n,request:i,event:u});if(o)return s=o,(Array.isArray(o)&&0===o.length||o.constructor===Object&&0===Object.keys(o).length||"boolean"==typeof o)&&(s=void 0),{route:c,params:s}}return{}},r.setDefaultHandler=function(e,r){void 0===r&&(r="GET"),this.i.set(r,g(e))},r.setCatchHandler=function(e){this.u=g(e)},r.registerRoute=function(e){this.t.has(e.method)||this.t.set(e.method,[]),this.t.get(e.method).push(e)},r.unregisterRoute=function(e){if(!this.t.has(e.method))throw new m("unregister-route-but-not-found-with-method",{method:e.method});var r=this.t.get(e.method).indexOf(e);if(!(r>-1))throw new m("unregister-route-route-not-registered");this.t.get(e.method).splice(r,1)},u(e,[{key:"routes",get:function(){return this.t}}]),e}(),q=function(){return b||((b=new y).addFetchListener(),b.addCacheListener()),b};function U(e,r,t){var n;if("string"==typeof e){var i=new URL(e,location.href);n=new R((function(e){return e.url.href===i.href}),r,t)}else if(e instanceof RegExp)n=new p(e,r,t);else if("function"==typeof e)n=new R(e,r,t);else{if(!(e instanceof R))throw new m("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});n=e}return q().registerRoute(n),n}try{self["workbox:strategies:6.1.5"]&&_()}catch(e){}var O,L={cacheWillUpdate:(O=n(regeneratorRuntime.mark((function e(r){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(200!==(t=r.response).status&&0!==t.status){e.next=3;break}return e.abrupt("return",t);case 3:return e.abrupt("return",null);case 4:case"end":return e.stop()}}),e)}))),function(e){return O.apply(this,arguments)})},E={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},j=function(e){return[E.prefix,e,E.suffix].filter((function(e){return e&&e.length>0})).join("-")},x=function(e){return e||j(E.precache)},S=function(e){return e||j(E.runtime)};function N(e,r){for(var t,n=new URL(e),i=d(r);!(t=i()).done;){var u=t.value;n.searchParams.delete(u)}return n.href}function P(e,r,t,n){return W.apply(this,arguments)}function W(){return(W=n(regeneratorRuntime.mark((function e(r,t,n,i){var u,c,s,o,f,h,v;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(u=N(t.url,n),t.url!==u){e.next=3;break}return e.abrupt("return",r.match(t,i));case 3:return c=a({},i,{ignoreSearch:!0}),e.next=6,r.keys(t,c);case 6:s=e.sent,o=d(s);case 8:if((f=o()).done){e.next=15;break}if(h=f.value,v=N(h.url,n),u!==v){e.next=13;break}return e.abrupt("return",r.match(h,i));case 13:e.next=8;break;case 15:return e.abrupt("return");case 16:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var T=function(){var e=this;this.promise=new Promise((function(r,t){e.resolve=r,e.reject=t}))},A=new Set;function D(){return M.apply(this,arguments)}function M(){return(M=n(regeneratorRuntime.mark((function e(){var r,t,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=d(A);case 2:if((t=r()).done){e.next=9;break}return n=t.value,e.next=6,n();case 6:case 7:e.next=2;break;case 9:case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function I(e){return new Promise((function(r){return setTimeout(r,e)}))}function F(e){return"string"==typeof e?new Request(e):e}var K=function(){function e(e,r){this.o={},Object.assign(this,r),this.event=r.event,this.h=e,this.v=new T,this.l=[],this.m=[].concat(e.plugins),this.g=new Map;for(var t,n=d(this.m);!(t=n()).done;){var i=t.value;this.g.set(i,{})}this.event.waitUntil(this.v.promise)}var r=e.prototype;return r.fetch=function(e){function r(r){return e.apply(this,arguments)}return r.toString=function(){return e.toString()},r}(function(){var e=n(regeneratorRuntime.mark((function e(r){var t,n,i,u,a,c,s,o,f,h,v,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.event,!("navigate"===(n=F(r)).mode&&t instanceof FetchEvent&&t.preloadResponse)){e.next=9;break}return e.next=5,t.preloadResponse;case 5:if(!(i=e.sent)){e.next=9;break}return e.abrupt("return",i);case 9:u=this.hasCallback("fetchDidFail")?n.clone():null,e.prev=10,a=d(this.iterateCallbacks("requestWillFetch"));case 12:if((c=a()).done){e.next=19;break}return s=c.value,e.next=16,s({request:n.clone(),event:t});case 16:n=e.sent;case 17:e.next=12;break;case 19:e.next=24;break;case 21:throw e.prev=21,e.t0=e.catch(10),new m("plugin-error-request-will-fetch",{thrownError:e.t0});case 24:return o=n.clone(),e.prev=25,e.next=28,fetch(n,"navigate"===n.mode?void 0:this.h.fetchOptions);case 28:f=e.sent,h=d(this.iterateCallbacks("fetchDidSucceed"));case 31:if((v=h()).done){e.next=38;break}return l=v.value,e.next=35,l({event:t,request:o,response:f});case 35:f=e.sent;case 36:e.next=31;break;case 38:return e.abrupt("return",f);case 41:if(e.prev=41,e.t1=e.catch(25),!u){e.next=47;break}return e.next=47,this.runCallbacks("fetchDidFail",{error:e.t1,event:t,originalRequest:u.clone(),request:o.clone()});case 47:throw e.t1;case 48:case"end":return e.stop()}}),e,this,[[10,21],[25,41]])})));return function(r){return e.apply(this,arguments)}}()),r.fetchAndCachePut=function(){var e=n(regeneratorRuntime.mark((function e(r){var t,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.fetch(r);case 2:return t=e.sent,n=t.clone(),this.waitUntil(this.cachePut(r,n)),e.abrupt("return",t);case 6:case"end":return e.stop()}}),e,this)})));return function(r){return e.apply(this,arguments)}}(),r.cacheMatch=function(){var e=n(regeneratorRuntime.mark((function e(r){var t,n,i,u,c,s,o,f,h,v;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=F(r),i=this.h,u=i.cacheName,c=i.matchOptions,e.next=4,this.getCacheKey(t,"read");case 4:return s=e.sent,o=a({},c,{cacheName:u}),e.next=8,caches.match(s,o);case 8:n=e.sent,f=d(this.iterateCallbacks("cachedResponseWillBeUsed"));case 11:if((h=f()).done){e.next=21;break}return v=h.value,e.next=15,v({cacheName:u,matchOptions:c,cachedResponse:n,request:s,event:this.event});case 15:if(e.t0=e.sent,e.t0){e.next=18;break}e.t0=void 0;case 18:n=e.t0;case 19:e.next=11;break;case 21:return e.abrupt("return",n);case 22:case"end":return e.stop()}}),e,this)})));return function(r){return e.apply(this,arguments)}}(),r.cachePut=function(){var e=n(regeneratorRuntime.mark((function e(r,t){var n,i,u,a,c,s,o,f,h,v,l,w;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=F(r),e.next=3,I(0);case 3:return e.next=5,this.getCacheKey(n,"write");case 5:i=e.sent,e.next=9;break;case 9:if(t){e.next=12;break}throw new m("cache-put-with-no-response",{url:k(i.url)});case 12:return e.next=14,this.R(t);case 14:if(u=e.sent){e.next=18;break}return e.abrupt("return",!1);case 18:return a=this.h,c=a.cacheName,s=a.matchOptions,e.next=21,self.caches.open(c);case 21:if(o=e.sent,!(f=this.hasCallback("cacheDidUpdate"))){e.next=29;break}return e.next=26,P(o,i.clone(),["__WB_REVISION__"],s);case 26:e.t0=e.sent,e.next=30;break;case 29:e.t0=null;case 30:return h=e.t0,e.prev=32,e.next=35,o.put(i,f?u.clone():u);case 35:e.next=43;break;case 37:if(e.prev=37,e.t1=e.catch(32),"QuotaExceededError"!==e.t1.name){e.next=42;break}return e.next=42,D();case 42:throw e.t1;case 43:v=d(this.iterateCallbacks("cacheDidUpdate"));case 44:if((l=v()).done){e.next=50;break}return w=l.value,e.next=48,w({cacheName:c,oldResponse:h,newResponse:u.clone(),request:i,event:this.event});case 48:e.next=44;break;case 50:return e.abrupt("return",!0);case 51:case"end":return e.stop()}}),e,this,[[32,37]])})));return function(r,t){return e.apply(this,arguments)}}(),r.getCacheKey=function(){var e=n(regeneratorRuntime.mark((function e(r,t){var n,i,u,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.o[t]){e.next=13;break}n=r,i=d(this.iterateCallbacks("cacheKeyWillBeUsed"));case 3:if((u=i()).done){e.next=12;break}return a=u.value,e.t0=F,e.next=8,a({mode:t,request:n,event:this.event,params:this.params});case 8:e.t1=e.sent,n=(0,e.t0)(e.t1);case 10:e.next=3;break;case 12:this.o[t]=n;case 13:return e.abrupt("return",this.o[t]);case 14:case"end":return e.stop()}}),e,this)})));return function(r,t){return e.apply(this,arguments)}}(),r.hasCallback=function(e){for(var r,t=d(this.h.plugins);!(r=t()).done;){if(e in r.value)return!0}return!1},r.runCallbacks=function(){var e=n(regeneratorRuntime.mark((function e(r,t){var n,i,u;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=d(this.iterateCallbacks(r));case 1:if((i=n()).done){e.next=7;break}return u=i.value,e.next=5,u(t);case 5:e.next=1;break;case 7:case"end":return e.stop()}}),e,this)})));return function(r,t){return e.apply(this,arguments)}}(),r.iterateCallbacks=regeneratorRuntime.mark((function e(r){var t,n,i,u=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=regeneratorRuntime.mark((function e(){var t,n,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("function"!=typeof(t=i.value)[r]){e.next=6;break}return n=u.g.get(t),c=function(e){var i=a({},e,{state:n});return t[r](i)},e.next=6,c;case 6:case"end":return e.stop()}}),e)})),n=d(this.h.plugins);case 2:if((i=n()).done){e.next=6;break}return e.delegateYield(t(),"t0",4);case 4:e.next=2;break;case 6:case"end":return e.stop()}}),e,this)})),r.waitUntil=function(e){return this.l.push(e),e},r.doneWaiting=function(){var e=n(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(r=this.l.shift())){e.next=5;break}return e.next=3,r;case 3:e.next=0;break;case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}(),r.destroy=function(){this.v.resolve()},r.R=function(){var e=n(regeneratorRuntime.mark((function e(r){var t,n,i,u,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=r,n=!1,i=d(this.iterateCallbacks("cacheWillUpdate"));case 3:if((u=i()).done){e.next=16;break}return a=u.value,e.next=7,a({request:this.request,response:t,event:this.event});case 7:if(e.t0=e.sent,e.t0){e.next=10;break}e.t0=void 0;case 10:if(t=e.t0,n=!0,t){e.next=14;break}return e.abrupt("break",16);case 14:e.next=3;break;case 16:return n||t&&200!==t.status&&(t=void 0),e.abrupt("return",t);case 18:case"end":return e.stop()}}),e,this)})));return function(r){return e.apply(this,arguments)}}(),e}(),C=function(){function e(e){void 0===e&&(e={}),this.cacheName=S(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}var r=e.prototype;return r.handle=function(e){return this.handleAll(e)[0]},r.handleAll=function(e){e instanceof FetchEvent&&(e={event:e,request:e.request});var r=e.event,t="string"==typeof e.request?new Request(e.request):e.request,n="params"in e?e.params:void 0,i=new K(this,{event:r,request:t,params:n}),u=this.p(i,t,r);return[u,this.k(u,i,t,r)]},r.p=function(){var e=n(regeneratorRuntime.mark((function e(r,t,n){var i,u,a,c,s,o,f;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.runCallbacks("handlerWillStart",{event:n,request:t});case 2:return i=void 0,e.prev=3,e.next=6,this.q(t,r);case 6:if((i=e.sent)&&"error"!==i.type){e.next=9;break}throw new m("no-response",{url:t.url});case 9:e.next=28;break;case 11:e.prev=11,e.t0=e.catch(3),u=d(r.iterateCallbacks("handlerDidError"));case 14:if((a=u()).done){e.next=23;break}return c=a.value,e.next=18,c({error:e.t0,event:n,request:t});case 18:if(!(i=e.sent)){e.next=21;break}return e.abrupt("break",23);case 21:e.next=14;break;case 23:if(i){e.next=27;break}throw e.t0;case 27:case 28:s=d(r.iterateCallbacks("handlerWillRespond"));case 29:if((o=s()).done){e.next=36;break}return f=o.value,e.next=33,f({event:n,request:t,response:i});case 33:i=e.sent;case 34:e.next=29;break;case 36:return e.abrupt("return",i);case 37:case"end":return e.stop()}}),e,this,[[3,11]])})));return function(r,t,n){return e.apply(this,arguments)}}(),r.k=function(){var e=n(regeneratorRuntime.mark((function e(r,t,n,i){var u,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r;case 3:u=e.sent,e.next=8;break;case 6:e.prev=6,e.t0=e.catch(0);case 8:return e.prev=8,e.next=11,t.runCallbacks("handlerDidRespond",{event:i,request:n,response:u});case 11:return e.next=13,t.doneWaiting();case 13:e.next=18;break;case 15:e.prev=15,e.t1=e.catch(8),a=e.t1;case 18:return e.next=20,t.runCallbacks("handlerDidComplete",{event:i,request:n,response:u,error:a});case 20:if(t.destroy(),!a){e.next=23;break}throw a;case 23:case"end":return e.stop()}}),e,null,[[0,6],[8,15]])})));return function(r,t,n,i){return e.apply(this,arguments)}}(),e}(),B=function(e){function r(r){var t;return void 0===r&&(r={}),(t=e.call(this,r)||this).plugins.some((function(e){return"cacheWillUpdate"in e}))||t.plugins.unshift(L),t.U=r.networkTimeoutSeconds||0,t}c(r,e);var t=r.prototype;return t.q=function(){var e=n(regeneratorRuntime.mark((function e(r,t){var i,u,a,c,s,o,f,h;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=[],u=[],this.U&&(c=this.O({request:r,logs:i,handler:t}),s=c.id,o=c.promise,a=s,u.push(o)),f=this.L({timeoutId:a,request:r,logs:i,handler:t}),u.push(f),e.next=8,t.waitUntil(n(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.waitUntil(Promise.race(u));case 2:if(e.t0=e.sent,e.t0){e.next=7;break}return e.next=6,f;case 6:e.t0=e.sent;case 7:return e.abrupt("return",e.t0);case 8:case"end":return e.stop()}}),e)})))());case 8:if(h=e.sent){e.next=12;break}throw new m("no-response",{url:r.url});case 12:return e.abrupt("return",h);case 13:case"end":return e.stop()}}),e,this)})));return function(r,t){return e.apply(this,arguments)}}(),t.O=function(e){var r=this,t=e.request;e.logs;var i,u=e.handler;return{promise:new Promise((function(e){i=setTimeout(function(){var r=n(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.t0=e,r.next=4,u.cacheMatch(t);case 4:r.t1=r.sent,(0,r.t0)(r.t1);case 6:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}(),1e3*r.U)})),id:i}},t.L=function(){var e=n(regeneratorRuntime.mark((function e(r){var t,n,i,u,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.timeoutId,n=r.request,r.logs,i=r.handler,e.prev=1,e.next=4,i.fetchAndCachePut(n);case 4:a=e.sent,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),u=e.t0;case 10:if(t&&clearTimeout(t),!u&&a){e.next=17;break}return e.next=15,i.cacheMatch(n);case 15:a=e.sent;case 17:return e.abrupt("return",a);case 18:case"end":return e.stop()}}),e,this,[[1,7]])})));return function(r){return e.apply(this,arguments)}}(),r}(C);function V(e,r){var t=r();return e.waitUntil(t),t}try{self["workbox:precaching:6.1.5"]&&_()}catch(e){}function G(e){if(!e)throw new m("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){var r=new URL(e,location.href);return{cacheKey:r.href,url:r.href}}var t=e.revision,n=e.url;if(!n)throw new m("add-to-cache-list-unexpected-type",{entry:e});if(!t){var i=new URL(n,location.href);return{cacheKey:i.href,url:i.href}}var u=new URL(n,location.href),a=new URL(n,location.href);return u.searchParams.set("__WB_REVISION__",t),{cacheKey:u.href,url:a.href}}var H,$=function(){var e=this;this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=function(){var e=n(regeneratorRuntime.mark((function e(r){var t,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=r.request,(n=r.state)&&(n.originalRequest=t);case 2:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),this.cachedResponseWillBeUsed=function(){var r=n(regeneratorRuntime.mark((function r(t){var n,i,u,a;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=t.event,i=t.state,u=t.cachedResponse,"install"===n.type&&(a=i.originalRequest.url,u?e.notUpdatedURLs.push(a):e.updatedURLs.push(a)),r.abrupt("return",u);case 3:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()},J=function(e){var r=this,t=e.precacheController;this.cacheKeyWillBeUsed=function(){var e=n(regeneratorRuntime.mark((function e(t){var n,i,u;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.request,i=t.params,u=i&&i.cacheKey||r.j.getCacheKeyForURL(n.url),e.abrupt("return",u?new Request(u):n);case 3:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),this.j=t};function Q(){if(void 0===H){var e=new Response("");if("body"in e)try{new Response(e.body),H=!0}catch(e){H=!1}H=!1}return H}function z(e,r){return X.apply(this,arguments)}function X(){return(X=n(regeneratorRuntime.mark((function e(r,t){var n,i,u,a,c,s;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=null,r.url&&(i=new URL(r.url),n=i.origin),n===self.location.origin){e.next=4;break}throw new m("cross-origin-copy-response",{origin:n});case 4:if(u=r.clone(),a={headers:new Headers(u.headers),status:u.status,statusText:u.statusText},c=t?t(a):a,!Q()){e.next=11;break}e.t0=u.body,e.next=14;break;case 11:return e.next=13,u.blob();case 13:e.t0=e.sent;case 14:return s=e.t0,e.abrupt("return",new Response(s,c));case 16:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Y=function(e){function t(r){var n;return void 0===r&&(r={}),r.cacheName=x(r.cacheName),(n=e.call(this,r)||this).S=!1!==r.fallbackToNetwork,n.plugins.push(t.copyRedirectedCacheableResponsesPlugin),n}c(t,e);var i=t.prototype;return i.q=function(){var e=n(regeneratorRuntime.mark((function e(r,t){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.cacheMatch(r);case 2:if(n=e.sent){e.next=11;break}if(!t.event||"install"!==t.event.type){e.next=8;break}return e.next=7,this._(r,t);case 7:return e.abrupt("return",e.sent);case 8:return e.next=10,this.N(r,t);case 10:return e.abrupt("return",e.sent);case 11:return e.abrupt("return",n);case 12:case"end":return e.stop()}}),e,this)})));return function(r,t){return e.apply(this,arguments)}}(),i.N=function(){var e=n(regeneratorRuntime.mark((function e(t,n){var i,u;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.S){e.next=7;break}return e.next=4,n.fetch(t);case 4:i=e.sent,e.next=8;break;case 7:throw new m("missing-precache-entry",{cacheName:this.cacheName,url:t.url});case 8:e.next=24;break;case 13:e.t0=e.sent;case 14:u=e.t0,r.groupCollapsed("Precaching is responding to: "+k(t.url)),r.log("Serving the precached url: "+k(u.url)),r.groupCollapsed("View request details here."),r.log(t),r.groupEnd(),r.groupCollapsed("View response details here."),r.log(i),r.groupEnd(),r.groupEnd();case 24:return e.abrupt("return",i);case 25:case"end":return e.stop()}}),e,this)})));return function(r,t){return e.apply(this,arguments)}}(),i._=function(){var e=n(regeneratorRuntime.mark((function e(r,t){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.P(),e.next=3,t.fetch(r);case 3:return n=e.sent,e.next=6,t.cachePut(r,n.clone());case 6:if(e.sent){e.next=9;break}throw new m("bad-precaching-response",{url:r.url,status:n.status});case 9:return e.abrupt("return",n);case 10:case"end":return e.stop()}}),e,this)})));return function(r,t){return e.apply(this,arguments)}}(),i.P=function(){for(var e,r=null,n=0,i=d(this.plugins.entries());!(e=i()).done;){var u=e.value,a=u[0],c=u[1];c!==t.copyRedirectedCacheableResponsesPlugin&&(c===t.defaultPrecacheCacheabilityPlugin&&(r=a),c.cacheWillUpdate&&n++)}0===n?this.plugins.push(t.defaultPrecacheCacheabilityPlugin):n>1&&null!==r&&this.plugins.splice(r,1)},t}(C);Y.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:function(e){return n(regeneratorRuntime.mark((function r(){var t;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if((t=e.response)&&!(t.status>=400)){r.next=3;break}return r.abrupt("return",null);case 3:return r.abrupt("return",t);case 4:case"end":return r.stop()}}),r)})))()}},Y.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:function(e){return n(regeneratorRuntime.mark((function r(){var t;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!(t=e.response).redirected){r.next=7;break}return r.next=4,z(t);case 4:r.t0=r.sent,r.next=8;break;case 7:r.t0=t;case 8:return r.abrupt("return",r.t0);case 9:case"end":return r.stop()}}),r)})))()}};var Z,ee=function(){function e(e){var r=void 0===e?{}:e,t=r.cacheName,n=r.plugins,i=void 0===n?[]:n,u=r.fallbackToNetwork,a=void 0===u||u;this.W=new Map,this.T=new Map,this.A=new Map,this.h=new Y({cacheName:x(t),plugins:[].concat(i,[new J({precacheController:this})]),fallbackToNetwork:a}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}var r=e.prototype;return r.precache=function(e){this.addToCacheList(e),this.D||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this.D=!0)},r.addToCacheList=function(e){for(var r,t=[],n=d(e);!(r=n()).done;){var i=r.value;"string"==typeof i?t.push(i):i&&void 0===i.revision&&t.push(i.url);var u=G(i),a=u.cacheKey,c=u.url,s="string"!=typeof i&&i.revision?"reload":"default";if(this.W.has(c)&&this.W.get(c)!==a)throw new m("add-to-cache-list-conflicting-entries",{firstEntry:this.W.get(c),secondEntry:a});if("string"!=typeof i&&i.integrity){if(this.A.has(a)&&this.A.get(a)!==i.integrity)throw new m("add-to-cache-list-conflicting-integrities",{url:c});this.A.set(a,i.integrity)}if(this.W.set(c,a),this.T.set(c,s),t.length>0){var o="Workbox is precaching URLs without revision info: "+t.join(", ")+"\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache";console.warn(o)}}},r.install=function(e){var r=this;return V(e,n(regeneratorRuntime.mark((function t(){var n,i,u,a,c,s,o,f,h,v,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=new $,r.strategy.plugins.push(n),i=d(r.W);case 3:if((u=i()).done){t.next=12;break}return a=u.value,c=a[0],s=a[1],o=r.A.get(s),f=r.T.get(c),h=new Request(c,{integrity:o,cache:f,credentials:"same-origin"}),t.next=10,Promise.all(r.strategy.handleAll({params:{cacheKey:s},request:h,event:e}));case 10:t.next=3;break;case 12:return v=n.updatedURLs,l=n.notUpdatedURLs,t.abrupt("return",{updatedURLs:v,notUpdatedURLs:l});case 15:case"end":return t.stop()}}),t)}))))},r.activate=function(e){var r=this;return V(e,n(regeneratorRuntime.mark((function e(){var t,n,i,u,a,c,s;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,self.caches.open(r.strategy.cacheName);case 2:return t=e.sent,e.next=5,t.keys();case 5:n=e.sent,i=new Set(r.W.values()),u=[],a=d(n);case 9:if((c=a()).done){e.next=17;break}if(s=c.value,i.has(s.url)){e.next=15;break}return e.next=14,t.delete(s);case 14:u.push(s.url);case 15:e.next=9;break;case 17:return e.abrupt("return",{deletedURLs:u});case 19:case"end":return e.stop()}}),e)}))))},r.getURLsToCacheKeys=function(){return this.W},r.getCachedURLs=function(){return[].concat(this.W.keys())},r.getCacheKeyForURL=function(e){var r=new URL(e,location.href);return this.W.get(r.href)},r.matchPrecache=function(){var e=n(regeneratorRuntime.mark((function e(r){var t,n,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=r instanceof Request?r.url:r,!(n=this.getCacheKeyForURL(t))){e.next=7;break}return e.next=5,self.caches.open(this.strategy.cacheName);case 5:return i=e.sent,e.abrupt("return",i.match(n));case 7:return e.abrupt("return",void 0);case 8:case"end":return e.stop()}}),e,this)})));return function(r){return e.apply(this,arguments)}}(),r.createHandlerBoundToURL=function(e){var r=this,t=this.getCacheKeyForURL(e);if(!t)throw new m("non-precached-url",{url:e});return function(n){return n.request=new Request(e),n.params=a({cacheKey:t},n.params),r.strategy.handle(n)}},u(e,[{key:"strategy",get:function(){return this.h}}]),e}(),re=function(){return Z||(Z=new ee),Z};function te(e,r){void 0===r&&(r=[]);for(var t=function(){var t=i[n];r.some((function(e){return e.test(t)}))&&e.searchParams.delete(t)},n=0,i=[].concat(e.searchParams.keys());n<i.length;n++)t();return e}var ne=regeneratorRuntime.mark(ie);function ie(e,r){var t,n,i,u,a,c,s,o,f,h,v,l,w,m,b,g;return regeneratorRuntime.wrap((function(R){for(;;)switch(R.prev=R.next){case 0:return n=(t=void 0===r?{}:r).ignoreURLParametersMatching,i=void 0===n?[/^utm_/,/^fbclid$/]:n,u=t.directoryIndex,a=void 0===u?"index.html":u,c=t.cleanURLs,s=void 0===c||c,o=t.urlManipulation,(f=new URL(e,location.href)).hash="",R.next=5,f.href;case 5:return h=te(f,i),R.next=8,h.href;case 8:if(!a||!h.pathname.endsWith("/")){R.next=13;break}return(v=new URL(h.href)).pathname+=a,R.next=13,v.href;case 13:if(!s){R.next=18;break}return(l=new URL(h.href)).pathname+=".html",R.next=18,l.href;case 18:if(!o){R.next=27;break}w=o({url:f}),m=d(w);case 21:if((b=m()).done){R.next=27;break}return g=b.value,R.next=25,g.href;case 25:R.next=21;break;case 27:case"end":return R.stop()}}),ne)}var ue=function(e){function r(r,t){return e.call(this,(function(e){for(var n,i=e.request,u=r.getURLsToCacheKeys(),a=d(ie(i.url,t));!(n=a()).done;){var c=n.value,s=u.get(c);if(s)return{cacheKey:s}}}),r.strategy)||this}return c(r,e),r}(R);var ae=function(){var e=n(regeneratorRuntime.mark((function e(r,t){var n,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return void 0===t&&(t="-precache-"),e.next=3,self.caches.keys();case 3:return n=e.sent,i=n.filter((function(e){return e.includes(t)&&e.includes(self.registration.scope)&&e!==r})),e.next=7,Promise.all(i.map((function(e){return self.caches.delete(e)})));case 7:return e.abrupt("return",i);case 8:case"end":return e.stop()}}),e)})));return function(r,t){return e.apply(this,arguments)}}();e.NetworkFirst=B,e.cleanupOutdatedCaches=function(){self.addEventListener("activate",(function(e){var r=x();e.waitUntil(ae(r).then((function(e){})))}))},e.clientsClaim=function(){self.addEventListener("activate",(function(){return self.clients.claim()}))},e.precacheAndRoute=function(e,r){!function(e){re().precache(e)}(e),function(e){var r=re();U(new ue(r,e))}(r)},e.registerRoute=U}));
//# sourceMappingURL=workbox-3a48a458.js.map