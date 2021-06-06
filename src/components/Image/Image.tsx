import { memo } from "react";
import styled from "@emotion/styled";

const Image = styled.img`
  border-radius: 7.5px;
  width: 100%;
  max-width: 100px;
  height: auto;
`;

export default memo(Image);
