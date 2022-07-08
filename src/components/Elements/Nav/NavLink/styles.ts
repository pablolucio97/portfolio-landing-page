import styled from "styled-components";

export const Container = styled.a`
  font-size: ${({ theme }) => theme.sizes.medium};
  font-weight: 400;
  color: ${({ theme }) => theme.colors.element_base};
  margin: 4px 16px;
  word-wrap: break-word;
  cursor: pointer;
  @media (max-width: 720px){
    width: 100%;
    font-size: ${({ theme }) => theme.sizes.medium};
  }
`;