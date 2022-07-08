import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 12px;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const SignOutButton = styled.button`
  display: flex;
  align-items: center;
  border-radius: 2px;
  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.white100};
  font-size: ${({ theme }) => theme.sizes.medium};
  padding: 4px;
  width: 100%;
  height: 24px;
`;

export const SignInButton = styled.button`
  color: ${({ theme }) => theme.colors.white100};
  display: flex;
  align-items: center;
  border-radius: 2px;
  padding: 4px;
  color: ${({ theme }) => theme.colors.primary}};
  background-color: ${({ theme }) => theme.colors.white100};
  font-size: ${({ theme }) => theme.sizes.medium};
  width: 100%;
  height: 24px;
`;

export const Text = styled.p`
  font-size: ${({ theme }) => theme.sizes.medium};
  font-weight: 300;
  color: ${({ theme }) => theme.colors.white100};
  margin: 8px auto;
  @media (max-width: 720px) {
    font-size: ${({ theme }) => theme.sizes.normal};
  }
`;
