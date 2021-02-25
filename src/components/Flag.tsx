import { memo } from "react";
import styled from "styled-components";

const Flag = memo(styled.img`
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 1px #eee;
  position: relative;
`);

export default Flag;
