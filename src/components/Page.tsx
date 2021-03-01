import { FC, ReactNode, useContext } from "react";
import { Helmet } from "react-helmet-async";
import GlobalContext, {
  GlobalContextCompleteValues,
  LanguageDispatcher,
} from "../contexts/globalContext";
import Wrapper from "./Wrapper/Wrapper";

interface PageProperties {
  title: string;
  children: ReactNode;
}

const Page: FC<PageProperties> = ({
  title,
  children,
}: PageProperties): JSX.Element => {
  const { languageDispatcher }: GlobalContextCompleteValues = useContext(
    GlobalContext,
  );
  const [language]: LanguageDispatcher = languageDispatcher;
  const fixedTitle: string = `Krzysztof Zawisła${
    title !== "" ? ` - ${title}` : ""
  }`;
  return (
    <>
      <Helmet
        htmlAttributes={{
          lang: language,
          translate: language === ("pl" || "en") ? "no" : "yes",
        }}
      >
        <title>{fixedTitle}</title>
        <meta name="og:title" content={fixedTitle} />
      </Helmet>
      <Wrapper>{children}</Wrapper>
    </>
  );
};

export default Page;
