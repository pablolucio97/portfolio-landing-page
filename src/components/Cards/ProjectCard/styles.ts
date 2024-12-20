import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  padding: 1rem;
  background-color: none;
  margin-bottom: 1rem;
  background-color: ${({ theme }) => theme.colors.primary_dark};
`;

export const SubContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  & iframe {
    min-height: 320px;
  }
`;

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.sizes.medium};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.white100};
  @media (max-width: 720px) {
    font-size: ${({ theme }) => theme.sizes.normal};
  }
`;

export const Text = styled.h2`
  font-size: ${({ theme }) => theme.sizes.normal};
  margin:  1rem 0;
  color: ${({ theme }) => theme.colors.white300};
  @media (max-width: 720px) {
    font-size: ${({ theme }) => theme.sizes.small};
  }
`;
