import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  width: 12vw;
  overflow: auto;
  overflow-x: hidden;
  background-color: ${({ theme }) => theme.colors.primary};
  @media (max-width: 1440px) {
    width: 20vw;
  }
  @media (max-width: 1080px) {
    width: 28vw;
  }
  @media (max-width: 720px) {
    display: none;
    overflow-x: hidden;
  }
`;
