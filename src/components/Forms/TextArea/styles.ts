import styled from "styled-components";



export const Container = styled.div`
  position: relative;
  width: 98%;
`;

export const TextAreaElement = styled.textarea`
  border-radius: 4px;
  width: 100%;
  padding: 16px;
  box-shadow: ${({ theme }) => theme.shadows.soft};
  outline: none;
  resize: none;
  font-size: ${({ theme }) => theme.sizes.medium};

  &:focus {
    border: 2px solid ${({ theme }) => theme.colors.primary};
  }

  &:disabled {
    background: ${({ theme }) => theme.colors.element_base};
  }

  @media (max-width: 720px) {
    font-size: ${({ theme }) => theme.sizes.normal};
    margin: 0 auto;
  }
`;

export const Counter = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  background: ${({ theme }) => theme.colors.white100};
  font-size: ${({ theme }) => theme.sizes.xsmall};
  font-weight: 700;
  z-index: 999;
  position: absolute;
  bottom: 24%;
  right: 3%;
  @media (max-width: 1080px) {
    right: 4%;
  }
  @media (max-width: 720px) {
    right: 10%;
  }

`;
