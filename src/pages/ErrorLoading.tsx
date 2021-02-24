import { FC } from "react";
import Page from "../components/Page";
import Article from "../components/Article/Article";
import Section from "../components/Section/Section";

const ErrorLoading: FC = (): JSX.Element => {
  const heading: string = "Błąd ładowania";
  return (
    <Page title={heading}>
      <h2>{heading}:</h2>
      <Article>
        <Section>Wystąpił błąd ładowania strony.</Section>
      </Article>
    </Page>
  );
};

export default ErrorLoading;
