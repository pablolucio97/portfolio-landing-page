import styled from "styled-components";

export const Container = styled.a`
  font-weight: 300;
  color: ${({ theme }) => theme.colors.element_base};
  font-size: ${({ theme }) => theme.sizes.normal};
  width: 92%;
  max-width: 240px;
  word-wrap: break-word;
  cursor: pointer;
  text-align: left;
  margin: 4px;
  @media (max-width: 768px){
    margin: auto;
    width: 100%;
    text-align: center;
    font-size: ${({ theme }) => theme.sizes.small};
  }
`;