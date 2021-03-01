import { memo, MemoExoticComponent } from "react";
import styled, { StyledComponent } from "styled-components";

export type WrapperType = MemoExoticComponent<
  // eslint-disable-next-line @typescript-eslint/ban-types
  StyledComponent<"div", never, {}, never>
>;

const Wrapper: WrapperType = memo(styled.div`
  width: 80%;
  margin: 0 auto;
  word-break: break-word;
`);

export default Wrapper;
