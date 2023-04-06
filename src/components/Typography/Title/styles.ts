import styled from "styled-components";

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.sizes.huge};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.black100};
  @media (max-width: 1080px) {
    font-size: ${({ theme }) => theme.sizes.xlarge};
  }
  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.sizes.large};
  }
`;
