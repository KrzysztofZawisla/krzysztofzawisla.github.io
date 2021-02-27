import { FC } from "react";
import Page from "../../components/Page";
import Article from "../../components/Article/Article";
import Section from "../../components/Section/Section";
import { useTranslation, UseTranslationResponse } from "react-i18next";
import ExternalLink from "../../components/ExternalLink";

const Experience: FC = (): JSX.Element => {
  const { t }: UseTranslationResponse<string> = useTranslation();
  const vacations: string = t("pages.experience.vacations");
  const heading: string = t("pages.experience.heading");
  return (
    <Page title={heading}>
      <h2>{heading}:</h2>
      <Article>
        <h3>Front-end Developer</h3>
        <Section>Euvic - {vacations} 2020</Section>
      </Article>
      <Article>
        <h3>Front-end Developer</h3>
        <Section>Ephp - {t("pages.experience.schoolPractice")}</Section>
      </Article>
      <Article>
        <h3>Full-Stack Developer</h3>
        <Section>COIG S.A. - {vacations} 2019</Section>
      </Article>
      <Article>
        <h3>
          <ExternalLink
            href="https://bulldogjob.pl/blog/authors/krzysztof-zawisla"
            title="BulldogJob"
          >
            {t("pages.experience.bulldogjob")}
          </ExternalLink>
        </h3>
      </Article>
    </Page>
  );
};

export default Experience;
