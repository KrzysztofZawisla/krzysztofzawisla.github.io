import { AnchorHTMLAttributes, DetailedHTMLProps, FC, ReactNode } from "react";

export interface ExternalLinkProperties
  extends DetailedHTMLProps<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  children: ReactNode;
}

const ExternalLink: FC<ExternalLinkProperties> = ({
  children,
  ...rest
}: ExternalLinkProperties): JSX.Element => {
  return (
    <a rel="noopener noreferrer" {...rest}>
      {children}
    </a>
  );
};

export default ExternalLink;
