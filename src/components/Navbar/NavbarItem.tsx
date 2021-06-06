import { memo } from "react";
import styled from "@emotion/styled";

const NavbarItem = styled.li`
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
