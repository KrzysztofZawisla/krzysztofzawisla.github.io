import { FC, memo, MemoExoticComponent } from "react";
import Spliter from "../Spliter/Spliter";
import FooterWrapper from "../FooterWrapper/FooterWrapper";

// eslint-disable-next-line react/display-name
const Footer: MemoExoticComponent<FC> = memo(
  (): JSX.Element => {
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
  },
);

export default Footer;
