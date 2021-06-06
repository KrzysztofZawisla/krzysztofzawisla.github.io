import { memo } from "react";
import styled from "@emotion/styled";

const Section = styled.section`
  text-align: left;
  @media screen and (min-width: 768px) {
    text-align: justify;
  }
`;

export default memo(Section);
