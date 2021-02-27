import { memo, MemoExoticComponent } from "react";
import styled, { StyledComponent } from "styled-components";

export type SpliterType = MemoExoticComponent<
  // eslint-disable-next-line @typescript-eslint/ban-types
  StyledComponent<"div", never, {}, never>
>;

const Spliter: SpliterType = memo(styled.div`
  background: linear-gradient(
    to right,
    #ffdc7d,
    #f46f30,
    #7232bd,
    #4c5fd7,
    #c32aa3
  );
  height: 1.75px;
`);

export default Spliter;
