import { memo, MemoExoticComponent } from "react";
import styled, { StyledComponent } from "styled-components";

export type FlagType = MemoExoticComponent<
  // eslint-disable-next-line @typescript-eslint/ban-types
  StyledComponent<"img", never, {}, never>
>;

const Flag: FlagType = memo(styled.img`
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 1px #eee;
  position: relative;
`);

export default Flag;
