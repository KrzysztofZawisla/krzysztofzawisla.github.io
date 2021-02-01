import { FC } from "react";
import { useTranslation } from "react-i18next";
import Page from "../components/Page";
import Article from "../components/Article";
import Section from "../components/Section";

const Contact: FC = (): JSX.Element => {
  const { t } = useTranslation();
  const heading: string = t("pages.contact.heading");
  return (
    <Page title={heading}>
      <h2>{heading}:</h2>
      <Article>
        <Section>
          <h3>Email</h3>
          <a href="mailto:zawislakrzysztof.zk@gmail.com">
            zawislakrzysztof.zk@gmail.com
          </a>
        </Section>
      </Article>
      <Article>
        <Section>
          <a href="https://twitter.com/Krzysztof_zaw">
            <h3>Twitter</h3>
          </a>
        </Section>
      </Article>
      <Article>
        <Section>
          <a href="https://www.facebook.com/profile.php?id=100006723130084">
            <h3>Facebook</h3>
          </a>
        </Section>
      </Article>
      <Article>
        <Section>
          <a href="https://www.instagram.com/krzysztof_zawisla/">
            <h3>Instagram</h3>
          </a>
        </Section>
      </Article>
    </Page>
  );
};

export default Contact;
