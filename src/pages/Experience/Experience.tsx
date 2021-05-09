import { FC } from "react";
import Page from "@root/components/Page/Page";
import Article from "@root/components/Article/Article";
import Section from "@root/components/Section/Section";
import { useTranslation, UseTranslationResponse } from "react-i18next";
import ExternalLink from "@root/components/ExternalLink/ExternalLink";

const Experience: FC = (): JSX.Element => {
  const { t }: UseTranslationResponse<string> = useTranslation();
  const vacations: string = t("pages.experience.vacations");
  const heading: string = t("pages.experience.heading");
  return (
    <Page title={heading}>
      <h1>{heading}:</h1>
      <Article>
        <h2>Front-end Developer</h2>
        <Section>Euvic - {vacations} 2020</Section>
      </Article>
      <Article>
        <h2>Front-end Developer</h2>
        <Section>Ephp - {t("pages.experience.schoolPractice")}</Section>
      </Article>
      <Article>
        <h2>Full-stack Developer</h2>
        <Section>COIG S.A. - {vacations} 2019</Section>
      </Article>
      <Article>
        <h2>
          <ExternalLink
            href="https://bulldogjob.pl/blog/authors/krzysztof-zawisla"
            title="BulldogJob"
          >
            {t("pages.experience.bulldogjob")}
          </ExternalLink>
        </h2>
      </Article>
    </Page>
  );
};

export default Experience;
