import { FC } from "react";
import Page from "@root/components/Page/Page";
import Section from "@root/components/Section/Section";
import Article from "@root/components/Article/Article";
import Bold from "@root/components/Bold/Bold";
import ExternalLink from "@root/components/ExternalLink/ExternalLink";
import { useTranslation, UseTranslationResponse } from "react-i18next";

const Projects: FC = (): JSX.Element => {
  const { t }: UseTranslationResponse<string> = useTranslation();
  const usedTechnologies: string = t("pages.projects.usedTechnologies");
  const andManyOther: string = t("pages.shared.andManyOther");
  const heading: string = t("pages.projects.heading");
  return (
    <Page title={heading}>
      <h1>{heading}:</h1>
      <Article>
        <h2>
          <ExternalLink href="https://github.com/ZSBRybnik/ZSBRybnik">
            ZSBRybnik
          </ExternalLink>
        </h2>
        <Section>{t("pages.projects.ZSBRybnikContent")}</Section>
        <h3>Front-end</h3>
        <div>
          <Bold>
            {usedTechnologies}: TypeScript, React, React Context, Docker,
            i18next, Styled-components, ThreeJS, Github Actions {andManyOther}.
          </Bold>
        </div>
        <h3>Back-end</h3>
        <div>
          <Bold>
            {usedTechnologies}: Golang, Rust, Rocket.rs, Gin-gonic, Redis,
            MySQL, Docker, Github Actions {andManyOther}.
          </Bold>
        </div>
      </Article>
      <Article>
        <h2>
          <ExternalLink href="https://github.com/graspd/electron-react-neon-typescript-graspd-like-quick-start">
            electron-react-neon-typescript-graspd-like-quick-start
          </ExternalLink>
        </h2>
        {t(
          "pages.projects.ElectronReactNeonTypescriptGraspdLikeQuickStartContent",
        )}
        <h3>Front-end</h3>
        <div>
          <Bold>
            {usedTechnologies}: Webpack, Babel, TypeScript, React, Docker,
            ESLint, Prettier, Github Actions, Husky {andManyOther}.
          </Bold>
        </div>
        <h3>Back-end</h3>
        <div>
          <Bold>
            {usedTechnologies}: Webpack, Babel, ESLint, Prettier, TypeScript,
            Electron, Express, Rust, Neon-bindings, Docker, Github Actions,
            Husky {andManyOther}.
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
            {usedTechnologies}: Webpack, Babel, TypeScript, React, React
            Context, Styled-components, Docker, ESLint, Prettier, Github
            Actions, Husky, JSDoc, TSDoc, i18next {andManyOther}.
          </Bold>
        </div>
      </Article>
      <Article>
        <h2>
          <ExternalLink href="https://github.com/KrzysztofZawisla/WasmQuery">
            WasmQuery
          </ExternalLink>
        </h2>
        {t("pages.projects.WasmQueryContent")}
        <div>
          <Bold>{usedTechnologies}: Golang, WebAssembly, TypeScript</Bold>
        </div>
      </Article>
      <Article>
        <h2>
          <ExternalLink href="https://github.com/KrzysztofZawisla/SnowyMonitor">
            SnowyMonitor
          </ExternalLink>
        </h2>
        {t("pages.projects.SnowyMonitorContent")}
        <h3>Front-end</h3>
        <div>
          <Bold>{usedTechnologies}: JavaScript, SCSS, Docker</Bold>
        </div>
        <h3>Back-end</h3>
        <div>
          <Bold>{usedTechnologies}: JavaScript, Electron, Docker, NeDB</Bold>
        </div>
      </Article>
      <Article>
        <h2>
          <ExternalLink href="https://github.com/KrzysztofZawisla/SnowyRecorder">
            SnowyRecorder
          </ExternalLink>
        </h2>
        {t("pages.projects.SnowyRecorderContent")}
        <h3>Front-end</h3>
        <div>
          <Bold>{usedTechnologies}: JavaScript, SCSS, Docker</Bold>
        </div>
        <h3>Back-end</h3>
        <div>
          <Bold>{usedTechnologies}: JavaScript, Electron, SoX</Bold>
        </div>
      </Article>
      <Article>
        <h2>
          <ExternalLink href="https://github.com/KrzysztofZawisla/SnowyTicTacToe">
            SnowyTicTacToe
          </ExternalLink>
        </h2>
        {t("pages.projects.SnowyTicTacToeContent")}
        <h3>Front-end</h3>
        <div>
          <Bold>{usedTechnologies}: JavaScript, SCSS</Bold>
        </div>
        <h3>Back-end</h3>
        <div>
          <Bold>{usedTechnologies}: JavaScript, Electron</Bold>
        </div>
      </Article>
      <Article>
        <h2>
          <ExternalLink href="https://github.com/KrzysztofZawisla/PlanLekcjiZSBNextJS">
            PlanLekcjiZSB
          </ExternalLink>
        </h2>
        {t("pages.projects.PlanLekcjiZSBContent")}
        <h3>Front-end</h3>
        <div>
          <Bold>{usedTechnologies}: TypeScript, NextJS, Docker, Axios</Bold>
        </div>
        <h3>Back-end</h3>
        <div>
          <Bold>{usedTechnologies}: PHP, Simple HTML DOM</Bold>
        </div>
      </Article>
      <Article>
        <h2>
          <ExternalLink href="https://github.com/KrzysztofZawisla/SnowyResizer">
            SnowyResizer
          </ExternalLink>
        </h2>
        {t("pages.projects.SnowyResizerContent")}
        <div>
          <Bold>{usedTechnologies}: TypeScript, Electron, NeDB</Bold>
        </div>
      </Article>
      <Article>
        <h2>
          <ExternalLink href="https://github.com/KrzysztofZawisla/BrotliCompressorPY">
            BrotliCompressor in Python
          </ExternalLink>
        </h2>
        <div>
          <Bold>{usedTechnologies}: Python, Brotli</Bold>
        </div>
      </Article>
      <Article>
        <h2>
          <ExternalLink href="https://github.com/KrzysztofZawisla/BrotliCompressorGO">
            BrotliCompressor in Golang
          </ExternalLink>
        </h2>
        <div>
          <Bold>{usedTechnologies}: Golang, Brotli</Bold>
        </div>
      </Article>
      <Article>
        <h2>
          <ExternalLink href="https://github.com/KrzysztofZawisla/levenshtein.js">
            levenshtein.js
          </ExternalLink>
        </h2>
        {t("pages.projects.LevenshteinJSContent")}
        <div>
          <Bold>{usedTechnologies}: TypeScript, Rust, Neon-bindings</Bold>
        </div>
      </Article>
      <Article>
        <h2>
          <ExternalLink href="https://github.com/KrzysztofZawisla/levenshtein_py">
            levenshtein_py
          </ExternalLink>
        </h2>
        {t("pages.projects.LevenshteinPyContent")}
        <div>
          <Bold>{usedTechnologies}: PyO3, Rust</Bold>
        </div>
      </Article>
      <Article>
        <h2>
          <ExternalLink href="https://github.com/KrzysztofZawisla/snowy_simple_logger_python">
            snowy_simple_logger_python
          </ExternalLink>
        </h2>
        {t("pages.projects.SnowySimpleLoggerPythonContent")}
        <div>
          <Bold>{usedTechnologies}: PyO3, Rust</Bold>
        </div>
      </Article>
      <Article>
        <h2>
          <ExternalLink href="https://github.com/KrzysztofZawisla/snowy_simple_logger_nodejs">
            snowy_simple_logger_nodejs
          </ExternalLink>
        </h2>
        {t("pages.projects.SnowySimpleLoggerNodejsContent")}
        <div>
          <Bold>{usedTechnologies}: TypeScript, Rust, Neon-bindings</Bold>
        </div>
      </Article>
      <Article>
        <h2>
          <ExternalLink href="https://github.com/KrzysztofZawisla/SnowyUpdater">
            SnowyUpdater
          </ExternalLink>
        </h2>
        {t("pages.projects.SnowyUpdaterContent")}
        <div>
          <Bold>{usedTechnologies}: Rust</Bold>
        </div>
      </Article>
      <Article>
        <h2>
          <ExternalLink href="https://github.com/KrzysztofZawisla/SnowyYouTubeDownloader">
            SnowyYouTubeDownloader
          </ExternalLink>
        </h2>
        {t("pages.projects.SnowyYouTubeDownloaderContent")}
        <div>
          <Bold>{usedTechnologies}: Python, ffmpeg, pytube</Bold>
        </div>
      </Article>
    </Page>
  );
};

export default Projects;
