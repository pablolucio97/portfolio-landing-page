import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;
  min-height: 20vh;
  background: -webkit-linear-gradient(-141deg, #290ac2, #000000, #290ac2);
  background: linear-gradient(-141deg, #290ac2, #000000, #290ac2);
  display: flex;
  justify-content: center;
  margin: 0 auto;
  padding: 32px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

export const FirstContainer = styled.div`
  display: flex;
  min-width: 320px;
  flex-direction: column;
  justify-content: flex-start;
  grid-area: First;
  @media (max-width: 768px) {
    align-items: center;
  }
`;

export const SecondContainer = styled.div`
  display: flex;
  min-width: 320px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  grid-area: Second;
`;

export const ThirdContainer = styled.div`
  display: flex;
  min-width: 320px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  grid-area: Third;
`;

export const FourthContainer = styled.div`
  display: flex;
  min-width: 320px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  grid-area: Fourth;
`;
