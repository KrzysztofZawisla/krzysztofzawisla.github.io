import { FC } from "react";
import Page from "../components/Page";
import Section from "../components/Section/Section";
import Article from "../components/Article/Article";
import Bold from "../components/Bold/Bold";
import ExternalLink from "../components/ExternalLink";

const Projects: FC = (): JSX.Element => {
  return (
    <Page title="Projects">
      <h1>Projects:</h1>
      <Article>
        <h2>
          <ExternalLink href="https://github.com/ZSBRybnik/ZSBRybnik">
            ZSBRybnik
          </ExternalLink>
        </h2>
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
        <div>
          <Bold>
            Used technologies: TypeScript, React, React Context, Docker,
            i18next, Styled-components, ThreeJS, Github Actions and many others.
          </Bold>
        </div>
        <h3>Back-end</h3>
        <Section>
          Back-end strony jest podzielony na dwie części. Pierwsza to CDN
          napisany w Rustcie z użyciem Rocket.rs. Natomiast druga część to
          serwer wystawiający API. Serwer został napisany w Go z wykorzystaniem
          biblioteki Gin-gonic.
        </Section>
        <div>
          <Bold>
            Used technologies: Golang, Rust, Rocket.rs, Gin-gonic, Redis, MySQL,
            Docker, Github Actions and many others.
          </Bold>
        </div>
      </Article>
      <Article>
        <h2>
          <ExternalLink href="https://github.com/graspd/electron-react-neon-typescript-graspd-like-quick-start">
            electron-react-neon-typescript-graspd-like-quick-start
          </ExternalLink>
        </h2>
        Szablon pod aplikacje desktopowe napisane w TypeScriptcie z
        wykorzystaniem Electrona. Konfiguracja została stworzona tak, aby
        umożliwić bindowanie funkcji z Rusta oraz umożliwić pisanie Front-endu w
        aplikacji z wykorzystaniem Reacta. Cały codebase został dostosowany do
        zachowania przejrzystości kodu przez zastosowanie ESLinta, Prettiera i
        Husky.
        <h3>Front-end</h3>
        <div>
          <Bold>
            Used technologies: Webpack, Babel, TypeScript, React, Docker,
            ESLint, Prettier, Github Actions, Husky and many others.
          </Bold>
        </div>
        <h3>Back-end</h3>
        <div>
          <Bold>
            Used technologies: Webpack, Babel, ESLint, Prettier, TypeScript,
            Electron, Express, Rust, Neon-bindings, Docker, Github Actions,
            Husky and many others.
          </Bold>
        </div>
      </Article>
      <Article>
        <h2>
          <ExternalLink href="https://github.com/KrzysztofZawisla/krzysztofzawisla.github.io">
            Portfolio
          </ExternalLink>
        </h2>
        <h3>Front-end</h3>
        <div>
          <Bold>
            Used technologies: Webpack, Babel, TypeScript, React, React Context,
            Styled-components, Docker, ESLint, Prettier, Github Actions, Husky,
            JSDoc, TSDoc, i18next and many others.
          </Bold>
        </div>
      </Article>
      <Article>
        <h2>
          <ExternalLink href="https://github.com/KrzysztofZawisla/WasmQuery">
            WasmQuery
          </ExternalLink>
        </h2>
        Eksperymentalna biblioteka wzorowana na jQuery napisana w Go i
        skompilowana na moduł WebAssembly. Biblioteka ma na celu ułatwienie
        pisania kodu JavaScript i udostępnienie funkcji z standardowej
        biblioteki Golanga.
        <div>
          <Bold>Used technologies: Golang, WebAssembly, TypeScript</Bold>
        </div>
      </Article>
      <Article>
        <h2>
          <ExternalLink href="https://github.com/KrzysztofZawisla/SnowyMonitor">
            SnowyMonitor
          </ExternalLink>
        </h2>
        <h3>Front-end</h3>
        <div>
          <Bold>Used technologies: JavaScript, SCSS, Docker</Bold>
        </div>
        <h3>Back-end</h3>
        <div>
          <Bold>Used technologies: JavaScript, Electron, Docker, NeDB</Bold>
        </div>
      </Article>
      <Article>
        <h2>
          <ExternalLink href="https://github.com/KrzysztofZawisla/SnowyRecorder">
            SnowyRecorder
          </ExternalLink>
        </h2>
        <h3>Front-end</h3>
        <div>
          <Bold>Used technologies: JavaScript, SCSS, Docker</Bold>
        </div>
        <h3>Back-end</h3>
        <div>
          <Bold>Used technologies: JavaScript, Electron, SoX</Bold>
        </div>
      </Article>
      <Article>
        <h2>
          <ExternalLink href="https://github.com/KrzysztofZawisla/SnowyTicTacToe">
            SnowyTicTacToe
          </ExternalLink>
        </h2>
        <h3>Front-end</h3>
        <div>
          <Bold>Used technologies: JavaScript, SCSS</Bold>
        </div>
        <h3>Back-end</h3>
        <div>
          <Bold>Used technologies: JavaScript, Electron</Bold>
        </div>
      </Article>
      <Article>
        <h2>
          <ExternalLink href="https://github.com/KrzysztofZawisla/PlanLekcjiZSBNextJS">
            PlanLekcjiZSB
          </ExternalLink>
        </h2>
        <h3>Front-end</h3>
        <div>
          <Bold>Used technologies: TypeScript, NextJS, Docker, Axios</Bold>
        </div>
        <h3>Back-end</h3>
        <div>
          <Bold>Used technologies: PHP, Simple HTML DOM</Bold>
        </div>
      </Article>
      <Article>
        <h2>
          <ExternalLink href="https://github.com/KrzysztofZawisla/SnowyResizer">
            SnowyResizer
          </ExternalLink>
        </h2>
        1KB biblioteka napisana do Electrona służąca przywracaniu rozmiaru okna
        przed jego zamknięciem.
        <div>
          <Bold>Used technologies: TypeScript, Electron, NeDB</Bold>
        </div>
      </Article>
      <Article>
        <h2>
          <ExternalLink href="https://github.com/KrzysztofZawisla/BrotliCompressorPY">
            BrotliCompressor in Python
          </ExternalLink>
        </h2>
        Kompresor do Brotli stworzony na potrzeby kompresji plików WASM.
        Kompresor napisany w Pythonie.
        <div>
          <Bold>Used technologies: Python, Brotli</Bold>
        </div>
      </Article>
      <Article>
        <h2>
          <ExternalLink href="https://github.com/KrzysztofZawisla/BrotliCompressorGO">
            BrotliCompressor in Golang
          </ExternalLink>
        </h2>
        Kompresor do Brotli stworzony na potrzeby kompresji plików WASM.
        Kompresor napisany w Golangu.
        <div>
          <Bold>Used technologies: Golang, Brotli</Bold>
        </div>
      </Article>
      <Article>
        <h2>
          <ExternalLink href="https://github.com/KrzysztofZawisla/levenshtein.js">
            levenshtein.js
          </ExternalLink>
        </h2>
        Biblioteka udostępniająca do NodeJS funkcję na wykluczanie elementów z
        tablicy, które posiadają za duży levenshtein distance względem wyrazu do
        którego porównujemy listę. Biblioteka została napisana w Rustcie.
        <div>
          <Bold>Used technologies: TypeScript, Rust, Neon-bindings</Bold>
        </div>
      </Article>
      <Article>
        <h2>
          <ExternalLink href="https://github.com/KrzysztofZawisla/levenshtein_py">
            levenshtein_py
          </ExternalLink>
        </h2>
        Biblioteka udostępniająca do Pythona funkcję na wykluczanie elementów z
        tablicy, które posiadają za duży levenshtein distance względem wyrazu do
        którego porównujemy listę. Biblioteka została napisana w Rustcie.
        <div>
          <Bold>Used technologies: PyO3, Rust</Bold>
        </div>
      </Article>
      <Article>
        <h2>
          <ExternalLink href="https://github.com/KrzysztofZawisla/snowy_simple_logger_python">
            snowy_simple_logger_python
          </ExternalLink>
        </h2>
        Biblioteka udostępniająca do Pythona proste i szybkie logger API.
        Biblioteka została napisana w Rustcie.
        <div>
          <Bold>Used technologies: PyO3, Rust</Bold>
        </div>
      </Article>
      <Article>
        <h2>
          <ExternalLink href="https://github.com/KrzysztofZawisla/snowy_simple_logger_nodejs">
            snowy_simple_logger_nodejs
          </ExternalLink>
        </h2>
        Biblioteka udostępniająca do NodeJS proste i szybkie logger API.
        Biblioteka została napisana w Rustcie.
        <div>
          <Bold>Used technologies: TypeScript, Rust, Neon-bindings</Bold>
        </div>
      </Article>
      <Article>
        <h2>
          <ExternalLink href="https://github.com/KrzysztofZawisla/SnowyUpdater">
            SnowyUpdater
          </ExternalLink>
        </h2>
        Mocno ograniczony aktualizator aplikacji napisany w Rustcie.
        <div>
          <Bold>Used technologies: Rust</Bold>
        </div>
      </Article>
      <Article>
        <h2>
          <ExternalLink href="https://github.com/KrzysztofZawisla/SnowyYouTubeDownloader">
            SnowyYouTubeDownloader
          </ExternalLink>
        </h2>
        Przestarzały downloader do filmów z YouTube napisany w Pythonie.
        <div>
          <Bold>Used technologies: Python, ffmpeg, pytube</Bold>
        </div>
      </Article>
    </Page>
  );
};

export default Projects;
