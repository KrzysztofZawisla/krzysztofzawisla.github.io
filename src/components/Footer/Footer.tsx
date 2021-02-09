import { FC } from "react";
import Spliter from "../Spliter";
import FooterWrapper from "../FooterWrapper/FooterWrapper";

const Footer: FC = (): JSX.Element => {
  return (
    <FooterWrapper>
      <Spliter />
      <a
        rel="noreferrer noopener"
        title="GitHub"
        href="https://github.com/KrzysztofZawisla"
      >
        Krzysztof Zawisła &copy;
      </a>
    </FooterWrapper>
  );
};

export default Footer;
