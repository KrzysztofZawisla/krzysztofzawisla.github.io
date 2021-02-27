import { FC } from "react";
import Page from "../../components/Page";
import ProfilePicture from "../../components/ProfilePicture/ProfilePicture";
import Article from "../../components/Article/Article";
import Section from "../../components/Section/Section";
import { useTranslation, UseTranslationResponse } from "react-i18next";

const AboutMe: FC = (): JSX.Element => {
  const { t }: UseTranslationResponse<string> = useTranslation();
  const heading: string = t("pages.aboutMe.heading");
  return (
    <Page title={heading}>
      <h2>{heading}:</h2>
      <Article>
        <h3>Who am I?</h3>
        <ProfilePicture
          title="Krzysztof Zawisła"
          alt="Krzysztof Zawisła"
          src="https://avatars0.githubusercontent.com/u/32432944?s=100&v=4"
          loading="lazy"
          height="100px"
          width="100px"
        />
        <Section>
          Jestem 19-letnim programistą, który specjalizuje się w wielu
          przyszłościowych technologiach. Programuje od 3 gimnazjum, a główne
          języki programowania, jakie mnie interesują to TypeScript oraz Rust.
          Nie skupiam się na jednym odłamie związanym z programowanie.
          Interesuje mnie zarówno praca z front-endem stron jak i budową wysoko
          skalownego serwera czy pisanie obrazów dockerowych.
        </Section>
      </Article>
    </Page>
  );
};

export default AboutMe;
