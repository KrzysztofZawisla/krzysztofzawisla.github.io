import { memo } from "react";
import styled from "styled-components";

const Article = memo(styled.article`
  background: #eee;
  padding: 7.5px;
  border-radius: 7.5px;
  margin-bottom: 15px;
  &:nth-last-child(1) {
    margin-bottom: 0;
  }
`);

export default Article;
