import { memo } from "react";
import styled from "styled-components";

const NavbarMenu = memo(styled.ul`
  position: absolute;
  top: 50%;
  padding-left: 10px;
  transform: translateY(-50%);
  a {
    text-decoration: none;
  }
`);

export default NavbarMenu;
