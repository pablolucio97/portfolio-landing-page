import styled from "styled-components";

interface PrimaryButtonProps {
  size?: "tiny" | "small" | "medium" | "large";
}

export const Container = styled.button<PrimaryButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: ${({ size }) =>
    size === "large"
      ? "240px"
      : size === "tiny"
      ? "80px"
      : size === "small"
      ? "120px"
      : "98%"};
  height: 40px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.white100};

  &:disabled {
    background-color: ${({ theme }) => theme.colors.primary_light};
  }

  @media (max-width: 720px) {
    width: 96%;
    font-size: ${({ theme }) => theme.sizes.normal};
  }
`;
