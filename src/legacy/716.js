(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[716],{159:(e,n,i)=>{"use strict";i.d(n,{Z:()=>r});const r=i(2993).ZP.article(["background:#eee;padding:7.5px;border-radius:7.5px;margin-bottom:15px;"])},4201:(e,n,i)=>{"use strict";i.d(n,{Z:()=>a});i(1807),i(44);var r=i(7557);function t(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,r)}return i}function s(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?t(Object(i),!0).forEach((function(n){o(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):t(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function o(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function c(e,n){if(null==e)return{};var i,r,t=function(e,n){if(null==e)return{};var i,r,t={},s=Object.keys(e);for(r=0;r<s.length;r++)i=s[r],n.indexOf(i)>=0||(t[i]=e[i]);return t}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)i=s[r],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(t[i]=e[i])}return t}const a=function(e){var n=e.children,i=c(e,["children"]);return(0,r.jsx)("a",s(s({rel:"noopener noreferrer"},i),{},{children:n}))}},7644:(e,n,i)=>{"use strict";i.d(n,{Z:()=>d});var r=i(9526),t=i(1011),s=i(6306);const o=i(2993).ZP.div(["width:80%;margin:0 auto;word-break:break-word;"]);var c=i(7557);function a(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var i=[],r=!0,t=!1,s=void 0;try{for(var o,c=e[Symbol.iterator]();!(r=(o=c.next()).done)&&(i.push(o.value),!n||i.length!==n);r=!0);}catch(e){t=!0,s=e}finally{try{r||null==c.return||c.return()}finally{if(t)throw s}}return i}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return l(e,n);var i=Object.prototype.toString.call(e).slice(8,-1);"Object"===i&&e.constructor&&(i=e.constructor.name);if("Map"===i||"Set"===i)return Array.from(e);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return l(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,n){(null==n||n>e.length)&&(n=e.length);for(var i=0,r=new Array(n);i<n;i++)r[i]=e[i];return r}const d=function(e){var n=e.title,i=e.children,l=a((0,r.useContext)(s.ZP).languageDispatcher,1)[0],d="Krzysztof Zawisła".concat(""!==n?" - ".concat(n):"");return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(t.q,{htmlAttributes:{lang:l},children:[(0,c.jsx)("title",{children:d}),(0,c.jsx)("meta",{name:"og:title",content:d})]}),(0,c.jsx)(o,{children:i})]})}},2695:(e,n,i)=>{"use strict";i.d(n,{Z:()=>r});const r=i(2993).ZP.section(["text-align:justify;"])},7716:(e,n,i)=>{"use strict";i.r(n),i.d(n,{default:()=>l});var r=i(7644),t=i(2695),s=i(159);const o=i(2993).ZP.span(["font-weight:700;"]);var c=i(4201),a=i(7557);const l=function(){return(0,a.jsxs)(r.Z,{title:"Projects",children:[(0,a.jsx)("h1",{children:"Projects:"}),(0,a.jsxs)(s.Z,{children:[(0,a.jsx)("h2",{children:(0,a.jsx)(c.Z,{href:"https://github.com/ZSBRybnik/ZSBRybnik",children:"ZSBRybnik"})}),(0,a.jsx)(t.Z,{children:"Aplikacja PWA (Custom CMS) dla Zespołu Szkół Budowlanych w Rybniku. Jest to mój największy projekt, który wciąż jest w budowie. Cała aplikacja została skonteneryzowana z użyciem Dockera."}),(0,a.jsx)("h3",{children:"Front-end"}),(0,a.jsx)(t.Z,{children:"Front-end strony jest napisany funkcyjnie w TypeScriptcie z wykorzystaniem biblioteki do tworzenia aplikacji internetowych SPA (React). Do ostylowania strony wykorzystałem bibliotekę Styled-components."}),(0,a.jsx)("div",{children:(0,a.jsx)(o,{children:"Used technologies: TypeScript, React, React Context, Docker, i18next, Styled-components, ThreeJS, Github Actions and many others."})}),(0,a.jsx)("h3",{children:"Back-end"}),(0,a.jsx)(t.Z,{children:"Back-end strony jest podzielony na dwie części. Pierwsza to CDN napisany w Rustcie z użyciem Rocket.rs. Natomiast druga część to serwer wystawiający API. Serwer został napisany w Go z wykorzystaniem biblioteki Gin-gonic."}),(0,a.jsx)("div",{children:(0,a.jsx)(o,{children:"Used technologies: Golang, Rust, Rocket.rs, Gin-gonic, Redis, MySQL, Docker, Github Actions and many others."})})]}),(0,a.jsxs)(s.Z,{children:[(0,a.jsx)("h2",{children:(0,a.jsx)(c.Z,{href:"https://github.com/graspd/electron-react-neon-typescript-graspd-like-quick-start",children:"electron-react-neon-typescript-graspd-like-quick-start"})}),"Szablon pod aplikacje desktopowe napisane w TypeScriptcie z wykorzystaniem Electrona. Konfiguracja została stworzona tak, aby umożliwić bindowanie funkcji z Rusta oraz umożliwić pisanie Front-endu w aplikacji z wykorzystaniem Reacta. Cały codebase został dostosowany do zachowania przejrzystości kodu przez zastosowanie ESLinta, Prettiera i Husky.",(0,a.jsx)("h3",{children:"Front-end"}),(0,a.jsx)("div",{children:(0,a.jsx)(o,{children:"Used technologies: Webpack, Babel, TypeScript, React, Docker, ESLint, Prettier, Github Actions, Husky and many others."})}),(0,a.jsx)("h3",{children:"Back-end"}),(0,a.jsx)("div",{children:(0,a.jsx)(o,{children:"Used technologies: Webpack, Babel, ESLint, Prettier, TypeScript, Electron, Express, Rust, Neon-bindings, Docker, Github Actions, Husky and many others."})})]}),(0,a.jsxs)(s.Z,{children:[(0,a.jsx)("h2",{children:(0,a.jsx)(c.Z,{href:"https://github.com/KrzysztofZawisla/krzysztofzawisla.github.io",children:"Portfolio"})}),(0,a.jsx)("h3",{children:"Front-end"}),(0,a.jsx)("div",{children:(0,a.jsx)(o,{children:"Used technologies: Webpack, Babel, TypeScript, React, React Context, Styled-components, Docker, ESLint, Prettier, Github Actions, Husky, JSDoc, TSDoc, i18next and many others."})})]}),(0,a.jsxs)(s.Z,{children:[(0,a.jsx)("h2",{children:(0,a.jsx)(c.Z,{href:"https://github.com/KrzysztofZawisla/WasmQuery",children:"WasmQuery"})}),"Eksperymentalna biblioteka wzorowana na jQuery napisana w Go i skompilowana na moduł WebAssembly. Biblioteka ma na celu ułatwienie pisania kodu JavaScript i udostępnienie funkcji z standardowej biblioteki Golanga.",(0,a.jsx)("div",{children:(0,a.jsx)(o,{children:"Used technologies: Golang, WebAssembly, TypeScript"})})]}),(0,a.jsxs)(s.Z,{children:[(0,a.jsx)("h2",{children:(0,a.jsx)(c.Z,{href:"https://github.com/KrzysztofZawisla/SnowyMonitor",children:"SnowyMonitor"})}),(0,a.jsx)("h3",{children:"Front-end"}),(0,a.jsx)("div",{children:(0,a.jsx)(o,{children:"Used technologies: JavaScript, SCSS, Docker"})}),(0,a.jsx)("h3",{children:"Back-end"}),(0,a.jsx)("div",{children:(0,a.jsx)(o,{children:"Used technologies: JavaScript, Electron, Docker, NeDB"})})]}),(0,a.jsxs)(s.Z,{children:[(0,a.jsx)("h2",{children:(0,a.jsx)(c.Z,{href:"https://github.com/KrzysztofZawisla/SnowyRecorder",children:"SnowyRecorder"})}),(0,a.jsx)("h3",{children:"Front-end"}),(0,a.jsx)("div",{children:(0,a.jsx)(o,{children:"Used technologies: JavaScript, SCSS, Docker"})}),(0,a.jsx)("h3",{children:"Back-end"}),(0,a.jsx)("div",{children:(0,a.jsx)(o,{children:"Used technologies: JavaScript, Electron, SoX"})})]}),(0,a.jsxs)(s.Z,{children:[(0,a.jsx)("h2",{children:(0,a.jsx)(c.Z,{href:"https://github.com/KrzysztofZawisla/SnowyTicTacToe",children:"SnowyTicTacToe"})}),(0,a.jsx)("h3",{children:"Front-end"}),(0,a.jsx)("div",{children:(0,a.jsx)(o,{children:"Used technologies: JavaScript, SCSS"})}),(0,a.jsx)("h3",{children:"Back-end"}),(0,a.jsx)("div",{children:(0,a.jsx)(o,{children:"Used technologies: JavaScript, Electron"})})]}),(0,a.jsxs)(s.Z,{children:[(0,a.jsx)("h2",{children:(0,a.jsx)(c.Z,{href:"https://github.com/KrzysztofZawisla/PlanLekcjiZSBNextJS",children:"PlanLekcjiZSB"})}),(0,a.jsx)("h3",{children:"Front-end"}),(0,a.jsx)("div",{children:(0,a.jsx)(o,{children:"Used technologies: TypeScript, NextJS, Docker, Axios"})}),(0,a.jsx)("h3",{children:"Back-end"}),(0,a.jsx)("div",{children:(0,a.jsx)(o,{children:"Used technologies: PHP, Simple HTML DOM"})})]}),(0,a.jsxs)(s.Z,{children:[(0,a.jsx)("h2",{children:(0,a.jsx)(c.Z,{href:"https://github.com/KrzysztofZawisla/SnowyResizer",children:"SnowyResizer"})}),"1KB biblioteka napisana do Electrona służąca przywracaniu rozmiaru okna przed jego zamknięciem.",(0,a.jsx)("div",{children:(0,a.jsx)(o,{children:"Used technologies: TypeScript, Electron, NeDB"})})]}),(0,a.jsxs)(s.Z,{children:[(0,a.jsx)("h2",{children:(0,a.jsx)(c.Z,{href:"https://github.com/KrzysztofZawisla/BrotliCompressorPY",children:"BrotliCompressor in Python"})}),"Kompresor do Brotli stworzony na potrzeby kompresji plików WASM. Kompresor napisany w Pythonie.",(0,a.jsx)("div",{children:(0,a.jsx)(o,{children:"Used technologies: Python, Brotli"})})]}),(0,a.jsxs)(s.Z,{children:[(0,a.jsx)("h2",{children:(0,a.jsx)(c.Z,{href:"https://github.com/KrzysztofZawisla/BrotliCompressorGO",children:"BrotliCompressor in Golang"})}),"Kompresor do Brotli stworzony na potrzeby kompresji plików WASM. Kompresor napisany w Golangu.",(0,a.jsx)("div",{children:(0,a.jsx)(o,{children:"Used technologies: Golang, Brotli"})})]}),(0,a.jsxs)(s.Z,{children:[(0,a.jsx)("h2",{children:(0,a.jsx)(c.Z,{href:"https://github.com/KrzysztofZawisla/levenshtein.js",children:"levenshtein.js"})}),"Biblioteka udostępniająca do NodeJS funkcję na wykluczanie elementów z tablicy, które posiadają za duży levenshtein distance względem wyrazu do którego porównujemy listę. Biblioteka została napisana w Rustcie.",(0,a.jsx)("div",{children:(0,a.jsx)(o,{children:"Used technologies: TypeScript, Rust, Neon-bindings"})})]}),(0,a.jsxs)(s.Z,{children:[(0,a.jsx)("h2",{children:(0,a.jsx)(c.Z,{href:"https://github.com/KrzysztofZawisla/levenshtein_py",children:"levenshtein_py"})}),"Biblioteka udostępniająca do Pythona funkcję na wykluczanie elementów z tablicy, które posiadają za duży levenshtein distance względem wyrazu do którego porównujemy listę. Biblioteka została napisana w Rustcie.",(0,a.jsx)("div",{children:(0,a.jsx)(o,{children:"Used technologies: PyO3, Rust"})})]}),(0,a.jsxs)(s.Z,{children:[(0,a.jsx)("h2",{children:(0,a.jsx)(c.Z,{href:"https://github.com/KrzysztofZawisla/snowy_simple_logger_python",children:"snowy_simple_logger_python"})}),"Biblioteka udostępniająca do Pythona proste i szybkie logger API. Biblioteka została napisana w Rustcie.",(0,a.jsx)("div",{children:(0,a.jsx)(o,{children:"Used technologies: PyO3, Rust"})})]}),(0,a.jsxs)(s.Z,{children:[(0,a.jsx)("h2",{children:(0,a.jsx)(c.Z,{href:"https://github.com/KrzysztofZawisla/snowy_simple_logger_nodejs",children:"snowy_simple_logger_nodejs"})}),"Biblioteka udostępniająca do NodeJS proste i szybkie logger API. Biblioteka została napisana w Rustcie.",(0,a.jsx)("div",{children:(0,a.jsx)(o,{children:"Used technologies: TypeScript, Rust, Neon-bindings"})})]}),(0,a.jsxs)(s.Z,{children:[(0,a.jsx)("h2",{children:(0,a.jsx)(c.Z,{href:"https://github.com/KrzysztofZawisla/SnowyUpdater",children:"SnowyUpdater"})}),"Mocno ograniczony aktualizator aplikacji napisany w Rustcie.",(0,a.jsx)("div",{children:(0,a.jsx)(o,{children:"Used technologies: Rust"})})]}),(0,a.jsxs)(s.Z,{children:[(0,a.jsx)("h2",{children:(0,a.jsx)(c.Z,{href:"https://github.com/KrzysztofZawisla/SnowyYouTubeDownloader",children:"SnowyYouTubeDownloader"})}),"Przestarzały downloader do filmów z YouTube napisany w Pythonie.",(0,a.jsx)("div",{children:(0,a.jsx)(o,{children:"Used technologies: Python, ffmpeg, pytube"})})]})]})}},667:(e,n,i)=>{var r=i(8794),t=i(8869);e.exports=Object.keys||function(e){return r(e,t)}},1807:(e,n,i)=>{"use strict";var r=i(9882),t=i(7190).indexOf,s=i(4324),o=[].indexOf,c=!!o&&1/[1].indexOf(1,-0)<0,a=s("indexOf");r({target:"Array",proto:!0,forced:c||!a},{indexOf:function(e){return c?o.apply(this,arguments)||0:t(this,e,arguments.length>1?arguments[1]:void 0)}})},44:(e,n,i)=>{var r=i(9882),t=i(744),s=i(667);r({target:"Object",stat:!0,forced:i(9044)((function(){s(1)}))},{keys:function(e){return s(t(e))}})}}]);
//# sourceMappingURL=716.js.map