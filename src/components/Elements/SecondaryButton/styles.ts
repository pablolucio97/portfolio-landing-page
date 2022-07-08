import styled from "styled-components";

interface SecondaryButtonProps {
  size?: "tiny" | "small" | "medium" | "large";
}

export const Container = styled.button<SecondaryButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 4px;
  width: ${({ size }) =>
    size === "large"
      ? "240px"
      : size === "tiny"
      ? "80px"
      : size === "small"
      ? "120px"
      : "160px"};
  height: 40px;
  background-color: transparent;
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.sizes.medium};

  &:disabled {
    background-color: ${({ theme }) => theme.colors.white100};
    border-color: ${({ theme }) => theme.colors.primary_light};
  }

  @media(max-width: 720px){
    font-size: ${({ theme }) => theme.sizes.normal};
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  min-width: 72%;
`;

