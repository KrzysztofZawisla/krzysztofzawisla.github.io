import { memo } from "react";
import styled, { StyledComponent } from "styled-components";

export type ImageType = StyledComponent<
  "img",
  never,
  Record<string, unknown>,
  never
>;

const Image: ImageType = styled.img`
  border-radius: 7.5px;
  width: 100%;
  max-width: 100px;
  height: auto;
`;

export default memo(Image);
