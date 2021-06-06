import { memo } from "react";
import styled from "@emotion/styled";

const NavbarTitle = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  transform: rotate(270deg);
  right: 0px;
  font-weight: 700;
  font-size: 22px;
`;

export default memo(NavbarTitle);
