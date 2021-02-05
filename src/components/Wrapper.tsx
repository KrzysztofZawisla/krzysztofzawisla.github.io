import styled from "styled-components";

const Wrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  word-break: break-all;
  @media screen and (min-width: 768px) {
    & {
      word-break: normal;
    }
  }
`;

export default Wrapper;
