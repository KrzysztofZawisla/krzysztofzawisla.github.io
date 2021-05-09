import { FC } from "react";
import Page from "@root/components/Page/Page";
import Image from "@root/components/Image/Image";
import Article from "@root/components/Article/Article";
import Section from "@root/components/Section/Section";
import { useTranslation, UseTranslationResponse } from "react-i18next";

const AboutMe: FC = (): JSX.Element => {
  const { t }: UseTranslationResponse<string> = useTranslation();
  const heading: string = t("pages.aboutMe.heading");
  return (
    <Page title={heading}>
      <h2>{heading}:</h2>
      <Article>
        <h3>{t("pages.aboutMe.whoAmI.heading")}</h3>
        <Image
          title="Krzysztof Zawisła"
          alt="Krzysztof Zawisła"
          src="https://avatars0.githubusercontent.com/u/32432944?s=200&v=4"
          loading="lazy"
          height="100px"
          width="100px"
        />
        <Section>{t("pages.aboutMe.whoAmI.content")}</Section>
      </Article>
    </Page>
  );
};

export default AboutMe;
