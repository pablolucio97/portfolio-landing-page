import styled from "styled-components";

export const Title = styled.h3`
  font-size: ${({ theme }) => theme.sizes.large};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.white100};
  @media (max-width: 1080px) {
    font-size: ${({ theme }) => theme.sizes.medium};
  }
`;
