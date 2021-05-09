import { memo } from "react";
import styled, { StyledComponent } from "styled-components";

export type ArticleType = StyledComponent<
  "article",
  never,
  Record<string, unknown>,
  never
>;

const Article: ArticleType = styled.article`
  background: #eee;
  padding: 7.5px;
  border-radius: 7.5px;
  margin-bottom: 15px;
  &:nth-last-child(1) {
    margin-bottom: 0;
  }
`;

export default memo(Article);
