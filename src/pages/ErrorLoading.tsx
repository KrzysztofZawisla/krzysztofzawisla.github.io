import { FC } from "react";
import Page from "../components/Page";
import Article from "../components/Article/Article";
import Section from "../components/Section/Section";
import { useTranslation, UseTranslationResponse } from "react-i18next";

const ErrorLoading: FC = (): JSX.Element => {
  const { t }: UseTranslationResponse<string> = useTranslation();
  const heading: string = t("pages.errorLoading.heading");
  return (
    <Page title={heading}>
      <h2>{heading}:</h2>
      <Article>
        <Section>
          {`${t("pages.errorLoading.error")} `}
          <span role="img" aria-label="crying emoji">
            😢
          </span>
          .
        </Section>
      </Article>
    </Page>
  );
};

export default ErrorLoading;
