import styled from "styled-components";

export const Container = styled.a`
  font-size: ${({ theme }) => theme.sizes.medium};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.white100};
  width: 92%;
  max-width: 240px;
  margin-right: 4rem;
  word-wrap: break-word;
  text-align: center;
  cursor: pointer;
  @media (max-width: 768px){
    margin: 1rem auto;
    width: 100%;
    text-align: center;
    font-size: ${({ theme }) => theme.sizes.small};
  }
`;