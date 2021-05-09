import {
  AnchorHTMLAttributes,
  DetailedHTMLProps,
  FC,
  memo,
  MemoExoticComponent,
  ReactNode,
} from "react";

export interface ExternalLinkProperties
  extends DetailedHTMLProps<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  children: ReactNode;
}

// eslint-disable-next-line react/display-name
const ExternalLink: MemoExoticComponent<FC<ExternalLinkProperties>> = memo(
  ({ children, ...rest }: ExternalLinkProperties): JSX.Element => {
    return (
      <a rel="noopener noreferrer" {...rest}>
        {children}
      </a>
    );
  },
);

export default ExternalLink;
