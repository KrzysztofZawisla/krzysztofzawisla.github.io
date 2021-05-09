import {
  AnchorHTMLAttributes,
  DetailedHTMLProps as DetailedHTMLProperties,
  FC,
  memo,
  ReactNode,
} from "react";

export interface ExternalLinkProperties
  extends DetailedHTMLProperties<
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

export default memo(ExternalLink);
