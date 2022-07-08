import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  cursor: pointer;
  @media (max-width: 720px) {
    width: 98%;
  }
`;

export const SlickContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 320px;
  text-align: center;

  & img {
    align-self: center;
    margin: auto;
    @media (max-width: 720px) {
      width: 92%;
    }
  }
`;
