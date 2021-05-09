import { memo } from "react";
import styled, { StyledComponent } from "styled-components";

export type NavbarItemType = StyledComponent<
  "li",
  never,
  Record<string, unknown>,
  never
>;

const NavbarItem: NavbarItemType = styled.li`
  padding-bottom: 30px;
  padding-left: 10px;
  list-style-type: none;
  font-weight: 100;
  font-size: 20px;
  a {
    display: block;
  }
`;

export default memo(NavbarItem);
