import { memo } from "react";
import styled, { StyledComponent } from "styled-components";

export type FooterWrapperType = StyledComponent<
  "footer",
  never,
  Record<string, unknown>,
  never
>;

const FooterWrapper = styled.footer`
  background: $fff;
  text-align: center;
  position: relative;
  width: calc(100vw - 50px);
  left: 50px;
  a {
    font-size: 22px;
    text-decoration: none;
  }
`;

export default memo(FooterWrapper);
