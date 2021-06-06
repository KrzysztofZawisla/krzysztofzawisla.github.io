import { memo } from "react";
import styled from "@emotion/styled";

const Article = styled.article`
  background: #eee;
  padding: 7.5px;
  border-radius: 7.5px;
  margin-bottom: 15px;
  &:nth-last-of-type(1) {
    margin-bottom: 0;
  }
`;

export default memo(Article);
