import { FC } from "react";
import Page from "../components/Page";
import Section from "../components/Section/Section";
import Article from "../components/Article/Article";
import Bold from "../components/Bold/Bold";

const Projects: FC = (): JSX.Element => {
  return (
    <Page title="Projects">
      <h1>Projects:</h1>
      <Article>
        <a href="https://github.com/ZSBRybnik/ZSBRybnik">
          <h2>ZSBRybnik</h2>
        </a>
        <Section>
          Aplikacja PWA (Custom CMS) dla Zespołu Szkół Budowlanych w Rybniku.
          Jest to mój największy projekt, który wciąż jest w budowie. Cała
          aplikacja została skonteneryzowana z użyciem Dockera.
        </Section>
        <h3>Front-end</h3>
        <Section>
          Front-end strony jest napisany funkcyjnie w TypeScriptcie z
          wykorzystaniem biblioteki do tworzenia aplikacji internetowych SPA
          (React). Do ostylowania strony wykorzystałem bibliotekę
          Styled-components.
        </Section>
        <Bold>
          Used technologies: TypeScript, React, React Context, Docker, i18next,
          Styled-components, ThreeJS, Github Actions and many others.
        </Bold>
        <h3>Back-end</h3>
        <Section>
          Back-end strony jest podzielony na dwie części. Pierwsza to CDN
          napisany w Rustcie z użyciem Rocket.rs. Natomiast druga część to
          serwer wystawiający API. Serwer został napisany w Go z wykorzystaniem
          biblioteki Gin-gonic.
        </Section>
        <Bold>
          Used technologies: Golang, Rust, Rocket.rs, Gin-gonic, Redis, MySQL,
          Docker, Github Actions and many others.
        </Bold>
      </Article>
      <Article>
        <a href="https://github.com/graspd/electron-react-neon-typescript-graspd-like-quick-start">
          <h2>electron-react-neon-typescript-graspd-like-quick-start</h2>
        </a>
        Szablon pod aplikacje desktopowe napisane w TypeScriptcie z
        wykorzystaniem Electrona. Konfiguracja została stworzona tak, aby
        umożliwić bindowanie funkcji z Rusta oraz umożliwić pisanie Front-endu w
        aplikacji z wykorzystaniem Reacta. Cały codebase został dostosowany do
        zachowania przejrzystości kodu przez zastosowanie ESLinta, Prettiera i
        Husky.
        <h3>Front-end</h3>
        <Bold>
          Used technologies: Webpack, Babel, TypeScript, React, Docker, ESLint,
          Prettier, Github Actions, Husky and many others.
        </Bold>
        <h3>Back-end</h3>
        <Bold>
          Used technologies: Webpack, Babel, ESLint, Prettier, TypeScript,
          Electron, Express, Rust, Neon-bindings, Docker, Github Actions, Husky
          and many others.
        </Bold>
      </Article>
      <Article>
        <a href="https://github.com/KrzysztofZawisla/krzysztofzawisla.github.io">
          <h2>Portfolio</h2>
        </a>
        <h3>Front-end</h3>
        <Bold>
          Used technologies: Webpack, Babel, TypeScript, React, React Context,
          Styled-components, Docker, ESLint, Prettier, Github Actions, Husky,
          JSDoc, TSDoc, i18next and many others.
        </Bold>
      </Article>
      <Article>
        <a href="https://github.com/KrzysztofZawisla/WasmQuery">
          <h2>WasmQuery</h2>
        </a>
        Eksperymentalna biblioteka wzorowana na jQuery napisana w Go i
        skompilowana na moduł WebAssembly. Biblioteka ma na celu ułatwienie
        pisania kodu JavaScript i udostępnienie funkcji z standardowej
        biblioteki Golanga.
        <Bold>Used technologies: Golang, WebAssembly, TypeScript</Bold>
      </Article>
      <Article>
        <a href="https://github.com/KrzysztofZawisla/WasmQuery">
          <h2>SnowyMonitor</h2>
        </a>
        <h3>Front-end</h3>
        <Bold>Used technologies: JavaScript, SCSS, Docker</Bold>
        <h3>Back-end</h3>
        <Bold>Used technologies: JavaScript, Electron, Docker, NeDB</Bold>
      </Article>
      <Article>
        <a href="https://github.com/KrzysztofZawisla/WasmQuery">
          <h2>SnowyRecorder</h2>
        </a>
        <h3>Front-end</h3>
        <Bold>Used technologies: JavaScript, SCSS, Docker</Bold>
        <h3>Back-end</h3>
        <Bold>Used technologies: JavaScript, Electron, SoX</Bold>
      </Article>
      <Article>
        <a href="https://github.com/KrzysztofZawisla/WasmQuery">
          <h2>SnowyTicTacToe</h2>
        </a>
        <h3>Front-end</h3>
        <Bold>Used technologies: JavaScript, SCSS</Bold>
        <h3>Back-end</h3>
        <Bold>Used technologies: JavaScript, Electron</Bold>
      </Article>
      <Article>
        <a href="https://github.com/KrzysztofZawisla/WasmQuery">
          <h2>PlanLekcjiZSB</h2>
        </a>
        <h3>Front-end</h3>
        <Bold>Used technologies: TypeScript, NextJS, Docker, Axios</Bold>
        <h3>Back-end</h3>
        <Bold>Used technologies: PHP, Simple HTML DOM</Bold>
      </Article>
      <Article>
        <a href="https://github.com/KrzysztofZawisla/WasmQuery">
          <h2>SnowyResizer</h2>
        </a>
        1KB biblioteka napisana do Electrona służąca przywracaniu rozmiaru okna
        przed jego zamknięciem.
        <Bold>Used technologies: TypeScript, Electron, NeDB</Bold>
      </Article>
      <Article>
        <a href="https://github.com/KrzysztofZawisla/WasmQuery">
          <h2>BrotliCompressor in Python</h2>
        </a>
        Kompresor do Brotli stworzony na potrzeby kompresji plików WASM.
        Kompresor napisany w Pythonie.
        <Bold>Used technologies: Python, Brotli</Bold>
      </Article>
      <Article>
        <a href="https://github.com/KrzysztofZawisla/WasmQuery">
          <h2>BrotliCompressor in Golang</h2>
        </a>
        Kompresor do Brotli stworzony na potrzeby kompresji plików WASM.
        Kompresor napisany w Golangu.
        <Bold>Used technologies: Golang, Brotli</Bold>
      </Article>
      <Article>
        <a href="https://github.com/KrzysztofZawisla/WasmQuery">
          <h2>levenshtein.js</h2>
        </a>
        Biblioteka udostępniająca do NodeJS funkcję na wykluczanie elementów z
        tablicy, które posiadają za duży levenshtein distance względem wyrazu do
        którego porównujemy listę. Biblioteka została napisana w Rustcie.
        <Bold>Used technologies: TypeScript, Rust, Neon-bindings</Bold>
      </Article>
      <Article>
        <a href="https://github.com/KrzysztofZawisla/WasmQuery">
          <h2>levenshtein_py</h2>
        </a>
        Biblioteka udostępniająca do Pythona funkcję na wykluczanie elementów z
        tablicy, które posiadają za duży levenshtein distance względem wyrazu do
        którego porównujemy listę. Biblioteka została napisana w Rustcie.
        <Bold>Used technologies: PyO3, Rust</Bold>
      </Article>
      <Article>
        <a href="https://github.com/KrzysztofZawisla/WasmQuery">
          <h2>snowy_simple_logger_python</h2>
        </a>
        Biblioteka udostępniająca do Pythona proste i szybkie logger API.
        Biblioteka została napisana w Rustcie.
        <Bold>Used technologies: PyO3, Rust</Bold>
      </Article>
      <Article>
        <a href="https://github.com/KrzysztofZawisla/WasmQuery">
          <h2>snowy_simple_logger_nodejs</h2>
        </a>
        Biblioteka udostępniająca do NodeJS proste i szybkie logger API.
        Biblioteka została napisana w Rustcie.
        <Bold>Used technologies: TypeScript, Rust, Neon-bindings</Bold>
      </Article>
      <Article>
        <a href="https://github.com/KrzysztofZawisla/WasmQuery">
          <h2>SnowyUpdater</h2>
        </a>
        Mocno ograniczony aktualizator aplikacji napisany w Rustcie.
        <Bold>Used technologies: Rust</Bold>
      </Article>
      <Article>
        <a href="https://github.com/KrzysztofZawisla/SnowyYouTubeDownloader">
          <h2>SnowyYouTubeDownloader</h2>
          Przestarzały downloader do filmów z YouTube napisany w Pythonie.
        </a>
        <Bold>Used technologies: Python, ffmpeg, pytube</Bold>
      </Article>
    </Page>
  );
};

export default Projects;
