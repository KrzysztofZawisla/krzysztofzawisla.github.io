import { FC } from "react";
import Page from "../../components/Page";
import Article from "../../components/Article/Article";
import Section from "../../components/Section/Section";
import { useTranslation, UseTranslationResponse } from "react-i18next";

const Skills: FC = (): JSX.Element => {
  const { t }: UseTranslationResponse<string> = useTranslation();
  const heading: string = t("pages.skills.heading");
  const andManyOther: string = t("pages.shared.andManyOther");
  return (
    <Page title={heading}>
      <h1>{heading}:</h1>
      <Article>
        <h2>{t("pages.skills.programmingLanguages")}:</h2>
        <h3>Advanced:</h3>
        <Section>JavaScript, TypeScript</Section>
        <h3>Regular:</h3>
        <Section>Golang, Rust, Python, AssemblyScript</Section>
        <h3>Junior:</h3>
        <Section>PHP</Section>
      </Article>
      <Article>
        <h2>{t("pages.skills.databases")}:</h2>
        <h3>Regular:</h3>
        <Section>MySQL, MariaDB, Redis, NeDB</Section>
        <h3>Junior:</h3>
        <Section>PostgreSQL</Section>
      </Article>
      <Article>
        <h2>{t("pages.skills.queryLanguages")}:</h2>
        <h3>Regular:</h3>
        <Section>SQL</Section>
        <h3>Junior:</h3>
        <Section>GraphQL</Section>
      </Article>
      <Article>
        <h2>{t("pages.skills.runtimesAndImplementations")}:</h2>
        <h3>Advanced:</h3>
        <Section>NodeJS</Section>
        <h3>Regular:</h3>
        <Section>PyPy</Section>
        <h3>Junior:</h3>
        <Section>Deno</Section>
      </Article>
      <Article>
        <h2>{t("pages.skills.descriptiveLanguages")}:</h2>
        <h3>Advanced:</h3>
        <Section>HTML5</Section>
        <h3>Regular:</h3>
        <Section>SCSS, Less, CSS3, Markdown</Section>
      </Article>
      <Article>
        <h2>{t("pages.skills.versionControlSystemsAndContainerization")}:</h2>
        <h3>Advanced:</h3>
        <Section>Docker, Podman</Section>
        <h3>Regular:</h3>
        <Section>Git, Github, Gitlab, Github Actions</Section>
      </Article>
      <Article>
        <h2>{t("pages.skills.frameworksAndLibraries")}:</h2>
        <h3>JavaScript/TypeScript ecosystem:</h3>
        <Section>
          React, React Context, Hookstate, Preact, NextJS, Electron, Express,
          Jest, Puppeteer, React Native, Babel, Webpack, Styled-components,
          ESLint, SWC, Husky, JSDoc, Lodash, Prettier, Spectron, i18next,
          AnimeJS, Socket.io, ThreeJS, WebAssembly, tsd{` ${andManyOther}`}.
        </Section>
        <h3>Python ecosystem:</h3>
        <Section>Selenium, Numba{` ${andManyOther}`}.</Section>
        <h3>Golang ecosystem:</h3>
        <Section>Gin-gonic, WebAssembly{` ${andManyOther}`}.</Section>
        <h3>Rust ecosystem:</h3>
        <Section>
          PyO3, Neon-bindings, Rocket.rs, Yew, Diesel, Tokio, wasm-pack,
          WebAssembly
          {` ${andManyOther}`}.
        </Section>
      </Article>
      <Article>
        <h2>{t("pages.skills.quantumProgrammingLanguages")}:</h2>
        <h3>{t("pages.skills.acquaintedWithBasics")}:</h3>
        <Section>Q#</Section>
      </Article>
      <Article>
        <h2>{t("pages.skills.languages")}:</h2>
        <h3>{t("pages.skills.nativeLanguage")}:</h3>
        <Section>Polish</Section>
        <h3>B2:</h3>
        <Section>English</Section>
      </Article>
    </Page>
  );
};

export default Skills;
