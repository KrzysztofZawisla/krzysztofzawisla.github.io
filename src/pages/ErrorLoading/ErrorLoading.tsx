import { FC } from "react";
import Page from "@root/components/Page/Page";
import Article from "@root/components/Article/Article";
import Section from "@root/components/Section/Section";
import { useTranslation, UseTranslationResponse } from "react-i18next";

const ErrorLoading: FC = (): JSX.Element => {
  const { t }: UseTranslationResponse<string> = useTranslation();
  const heading: string = t("pages.errorLoading.heading");
  return (
    <Page title={heading}>
      <h1>{heading}:</h1>
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
