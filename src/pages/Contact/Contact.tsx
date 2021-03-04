import { FC } from "react";
import { useTranslation, UseTranslationResponse } from "react-i18next";
import Page from "../../components/Page";
import Article from "../../components/Article/Article";
import Section from "../../components/Section/Section";
import ExternalLink from "../../components/ExternalLink/ExternalLink";
import Image from "../../components/Image/Image";

const Contact: FC = (): JSX.Element => {
  const { t }: UseTranslationResponse<string> = useTranslation();
  const heading: string = t("pages.contact.heading");
  const qrCodePath: string = `${process.env.PUBLIC_URL}/images/qrcode.png`;
  return (
    <Page title={heading}>
      <h1>{heading}:</h1>
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
            <ExternalLink href="https://www.linkedin.com/in/krzysztof-zawisła">
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
      <Article>
        <h3>{t("pages.contact.qrCodeHeading")}</h3>
        <Section>{t("pages.contact.qrCodeContent")}</Section>
        <Image
          src={qrCodePath}
          loading="lazy"
          width="200px"
          height="200px"
          alt="QR code"
        />
      </Article>
    </Page>
  );
};

export default Contact;
