import { memo } from "react";
import styled from "styled-components";

const NavbarSpliter = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: linear-gradient(
    to bottom,
    #ffdc7d,
    #f46f30,
    #7232bd,
    #4c5fd7,
    #c32aa3
  );
  height: 100%;
  width: 1.75px;
  right: 0;
`;

export default memo(NavbarSpliter);
