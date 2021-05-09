import { memo } from "react";
import styled, { StyledComponent } from "styled-components";

export type NavbarWrapperType = StyledComponent<
  "div",
  never,
  Record<string, unknown>,
  never
>;

const NavbarTitle: NavbarWrapperType = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  transform: rotate(270deg);
  right: 0px;
  font-weight: 700;
  font-size: 22px;
`;

export default memo(NavbarTitle);
