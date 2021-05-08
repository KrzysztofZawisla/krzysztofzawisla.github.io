import { memo } from "react";
import styled from "styled-components";

const Image = memo(styled.img`
  border-radius: 7.5px;
  width: 100%;
  max-width: 100px;
  height: auto;
`);

export default Image;
