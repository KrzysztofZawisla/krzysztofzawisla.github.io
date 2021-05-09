import { memo } from "react";
import styled, { StyledComponent } from "styled-components";

export type NavbarMenuType = StyledComponent<
  "ul",
  never,
  Record<string, unknown>,
  never
>;

const NavbarMenu: NavbarMenuType = styled.ul`
  position: absolute;
  top: 50%;
  padding-left: 10px;
  transform: translateY(-50%);
  a {
    text-decoration: none;
  }
`;

export default memo(NavbarMenu);
