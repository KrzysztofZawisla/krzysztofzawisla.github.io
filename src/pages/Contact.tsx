import { FC } from "react";
import { useTranslation } from "react-i18next";
import Page from "../components/Page";
import Article from "../components/Article/Article";
import Section from "../components/Section/Section";
import ExternalLink from "../components/ExternalLink";

const Contact: FC = (): JSX.Element => {
  const { t } = useTranslation();
  const heading: string = t("pages.contact.heading");
  return (
    <Page title={heading}>
      <h2>{heading}:</h2>
      <Article>
        <Section>
          <h3>Email</h3>
          <ExternalLink href="mailto:zawislakrzysztof.zk@gmail.com">
            zawislakrzysztof.zk@gmail.com
          </ExternalLink>
        </Section>
      </Article>
      <Article>
        <Section>
          <h3>
            <ExternalLink href="https://www.linkedin.com/in/krzysztof-zawis%C5%82a-520a06199/">
              LinkedIn
            </ExternalLink>
          </h3>
        </Section>
      </Article>
      <Article>
        <Section>
          <h3>
            <ExternalLink href="https://twitter.com/Krzysztof_zaw">
              Twitter
            </ExternalLink>
          </h3>
        </Section>
      </Article>
      <Article>
        <Section>
          <h3>
            <ExternalLink href="https://www.facebook.com/profile.php?id=100006723130084">
              Facebook
            </ExternalLink>
          </h3>
        </Section>
      </Article>
      <Article>
        <Section>
          <h3>
            <ExternalLink href="https://www.instagram.com/krzysztof_zawisla/">
              Instagram
            </ExternalLink>
          </h3>
        </Section>
      </Article>
    </Page>
  );
};

export default Contact;
