import { memo } from "react";
import styled, { StyledComponent } from "styled-components";

export type SectionType = StyledComponent<
  "section",
  never,
  Record<string, unknown>,
  never
>;

const Section: SectionType = styled.section`
  text-align: left;
  @media screen and (min-width: 768px) {
    text-align: justify;
  }
`;

export default memo(Section);
