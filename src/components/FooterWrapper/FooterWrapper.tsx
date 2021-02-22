import { memo } from "react";
import styled from "styled-components";

const FooterWrapper = memo(styled.footer`
  background: $fff;
  text-align: center;
  position: relative;
  width: calc(100vw - 50px);
  left: 50px;
  a {
    font-size: 22px;
    text-decoration: none;
  }
`);

export default FooterWrapper;
