import styled from "styled-components";

interface ImageCardProps {
  imgSize?: "small" | "medium" | "large";
}

export const Container = styled.div`
  & .glassEffect {
    backdrop-filter: blur(8px) saturate(120%);
    -webkit-backdrop-filter: blur(8px) saturate(120%);
    background-color: rgba(17, 25, 40, 0.24);
    border: 1px solid rgba(255, 255, 255, 0.125);
  }
`;

export const ImageContainer = styled.div<ImageCardProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: ${({ imgSize }) =>
    imgSize === "large" ? 640 : imgSize === "small" ? 480 : 320};
  height: ${({ imgSize }) =>
    imgSize === "large" ? 640 : imgSize === "small" ? 480 : 320};
  padding: 16px;
  margin: 4px auto;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.white100};
  box-shadow: ${({ theme }) => theme.shadows.soft};
  @media (max-width: 720px) {
    width: 320px;
    height: 320px;
  }
`;

export const Text = styled.p`
  font-size: ${({ theme }) => theme.sizes.medium};
  font-weight: 300;
  color: ${({ theme }) => theme.colors.text};
  word-wrap: break-word;
  padding: 0 4px;
  @media (max-width: 720px) {
    font-size: ${({ theme }) => theme.sizes.normal};
  }
`;
export const Title = styled.h3`
  font-size: ${({ theme }) => theme.sizes.large};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.title};
  padding: 4px;
  word-wrap: break-word;
  @media (max-width: 720px) {
    font-size: ${({ theme }) => theme.sizes.medium};
  }
`;
