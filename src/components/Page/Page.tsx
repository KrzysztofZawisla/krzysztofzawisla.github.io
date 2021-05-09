import { FC, memo, ReactNode } from "react";
import { Helmet } from "react-helmet-async";
import { useState } from "@hookstate/core";
import { languageGlobal } from "@root/other/globalStates/globalStates";
import Wrapper from "@root/components/Wrapper/Wrapper";

interface PageProperties {
  title: string;
  children: ReactNode;
}

const Page: FC<PageProperties> = ({
  title,
  children,
}: PageProperties): JSX.Element => {
  const language = useState(languageGlobal);
  const fixedTitle: string = `Krzysztof Zawisła${
    title !== "" ? ` - ${title}` : ""
  }`;
  return (
    <>
      <Helmet
        htmlAttributes={{
          lang: language.get(),
          translate: language.get() === ("pl" || "en") ? "no" : "yes",
        }}
      >
        <title>{fixedTitle}</title>
        <meta name="og:title" content={fixedTitle} />
      </Helmet>
      <Wrapper>{children}</Wrapper>
    </>
  );
};

export default memo(Page);
