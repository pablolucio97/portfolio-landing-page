import styled from "styled-components";

export const Text = styled.p`
  font-size: ${({ theme }) => theme.sizes.medium};
  font-weight: 300;
  margin: 4px 0;
  color: ${({ theme }) => theme.colors.text};
  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.sizes.xsmall};
  }
`;
