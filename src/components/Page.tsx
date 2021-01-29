import { FC, ReactNode } from "react";
import { Helmet } from "react-helmet-async";
import Wrapper from "./Wrapper";

interface PageProperties {
  title: string;
  children: ReactNode;
}

const Page: FC<PageProperties> = ({
  title,
  children,
}: PageProperties): JSX.Element => {
  const fixedTitle: string = `Krzysztof Zawisła${
    title !== "" ? ` - ${title}` : ""
  }`;
  return (
    <>
      <Helmet>
        <title>{fixedTitle}</title>
        <meta name="og:title" content={fixedTitle} />
      </Helmet>
      <Wrapper>{children}</Wrapper>
    </>
  );
};

export default Page;
