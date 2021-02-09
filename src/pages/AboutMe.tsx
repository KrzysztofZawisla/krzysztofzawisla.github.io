import { FC } from "react";
import Page from "../components/Page";
import ProfilePicture from "../components/ProfilePicture/ProfilePicture";
import Article from "../components/Article/Article";
import Section from "../components/Section/Section";
import { useTranslation } from "react-i18next";

const AboutMe: FC = (): JSX.Element => {
  const { t } = useTranslation();
  const heading: string = t("pages.aboutMe.heading");
  return (
    <Page title={heading}>
      <h2>{heading}:</h2>
      <Article>
        <h3>Who am I?</h3>
        <ProfilePicture
          title="Krzysztof Zawisła"
          alt="Krzysztof Zawisła"
          src="https://avatars0.githubusercontent.com/u/32432944?s=460&v=4"
          loading="lazy"
          height="100px"
          width="100px"
        />
        <Section>123</Section>
      </Article>
    </Page>
  );
};

export default AboutMe;
