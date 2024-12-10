import styled from "styled-components";

export const Container = styled.h3`
  font-size: ${({ theme }) => theme.sizes.large};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.white100};
  width: 92%;
  max-width: 240px;
  word-wrap: break-word;
  text-align: left;
  margin: 40px 0 4px;
  @media (max-width: 768px){
    margin: 40px auto 0;
    width: 100%;
    text-align: center;
    font-size: ${({ theme }) => theme.sizes.medium};
  }
`;