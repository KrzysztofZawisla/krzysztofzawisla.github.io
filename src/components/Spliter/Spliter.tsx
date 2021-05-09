import { memo } from "react";
import styled, { StyledComponent } from "styled-components";

export type SpliterType = StyledComponent<
  "div",
  never,
  Record<string, unknown>,
  never
>;

const Spliter: SpliterType = styled.div`
  background: linear-gradient(
    to right,
    #ffdc7d,
    #f46f30,
    #7232bd,
    #4c5fd7,
    #c32aa3
  );
  height: 1.75px;
`;

export default memo(Spliter);
