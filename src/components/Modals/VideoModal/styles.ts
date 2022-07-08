import styled from "styled-components";

export const Container = styled.iframe`
  width: 720px;
  height: 400px;
  border: 0;
  @media (max-width: 720px) {
    width: 320px;
    height: 240px;
    margin: 0 auto;
  }
`;
