import { memo } from "react";
import styled from "styled-components";

const Section = memo(styled.section`
  text-align: left;
  @media screen and (min-width: 768px) {
    text-align: justify;
  }
`);

export default Section;
