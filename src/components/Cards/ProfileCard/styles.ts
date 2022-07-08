import Image from "next/image";
import styled from "styled-components";

interface ProfileCardProps {
  bgColor?: string;
}

export const Container = styled.div`
  & .glassEffect {
    backdrop-filter: blur(8px) saturate(120%);
    -webkit-backdrop-filter: blur(8px) saturate(120%);
    background-color: rgba(17, 25, 40, 0.24);
    border: 1px solid rgba(255, 255, 255, 0.125);
  }
`;
export const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 320px;
  margin: 4px auto;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.white100};
  box-shadow: ${({ theme }) => theme.shadows.soft};
  @media (max-width: 720px) {
    width: 98%;
  }
`;

export const ColorContainer = styled.div<ProfileCardProps>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 120px;
  background-color: ${({ bgColor, theme }) =>
    bgColor ? bgColor : theme.colors.primary};
  border-radius: 4px 4px 0 0;
  z-index: 0;
`;

export const AvatarContainer = styled.div`
  margin-top: 56px;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 16px;
  width: 100%;
`;

export const Avatar = styled(Image)`
  border-radius: 50%;
  z-index: 999;
`;

export const Text = styled.p`
  font-size: ${({ theme }) => theme.sizes.medium};
  font-weight: 300;
  color: ${({ theme }) => theme.colors.text};
  padding: 8px 4px;
  margin: 8px auto;
  word-wrap: break-word;
  text-align: center;
  width: 100%;
  @media (max-width: 720px) {
    font-size: ${({ theme }) => theme.sizes.normal};
  }
`;

export const Title = styled.h3`
  font-size: ${({ theme }) => theme.sizes.large};
  font-weight: 500;
  margin-top: 48px;
  color: ${({ theme }) => theme.colors.title};
  padding: 8px 4px;
  text-align: right;
  word-wrap: break-word;
  @media (max-width: 720px) {
    font-size: ${({ theme }) => theme.sizes.medium};
  }
`;

export const SocialContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 12px auto;
`;

export const Button = styled.button`
  background: transparent;
`;
