import { memo } from "react";
import styled from "@emotion/styled";

const NavbarMenu = styled.ul`
  position: absolute;
  top: 50%;
  padding-left: 10px;
  transform: translateY(-50%);
  a {
    text-decoration: none;
  }
`;

export default memo(NavbarMenu);
