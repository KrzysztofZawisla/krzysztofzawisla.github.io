import { FC, memo } from "react";
import Spliter from "@root/components/Spliter/Spliter";
import FooterWrapper from "@root/components/FooterWrapper/FooterWrapper";

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

export default memo(Footer);
