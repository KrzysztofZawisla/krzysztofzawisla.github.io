import { memo, MemoExoticComponent } from "react";
import styled, { StyledComponent } from "styled-components";

export type ArticleType = MemoExoticComponent<
  // eslint-disable-next-line @typescript-eslint/ban-types
  StyledComponent<"article", never, {}, never>
>;

const Article: ArticleType = memo(styled.article`
  background: #eee;
  padding: 7.5px;
  border-radius: 7.5px;
  margin-bottom: 15px;
  &:nth-last-child(1) {
    margin-bottom: 0;
  }
`);

export default Article;
