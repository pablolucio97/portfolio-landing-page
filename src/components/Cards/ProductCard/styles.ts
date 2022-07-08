import styled from "styled-components";

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
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white100};
  width: 320px;
  min-height: 320px;
  border-radius: 4px;
  box-shadow: ${({ theme }) => theme.shadows.soft};
  padding: 16px;
  margin: 8px;
  position: relative;
`;

export const RatingsContainer = styled.div`
  display: flex;
`;

export const Title = styled.h3`
  font-size: ${({ theme }) => theme.sizes.large};
  font-weight: 500;
  margin-top: 32px;
  color: ${({ theme }) => theme.colors.black100};
  @media (max-width: 720px) {
    font-size: ${({ theme }) => theme.sizes.medium};
    text-align: center;
  }
`;

export const PurchaseButton = styled.button`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 240px;
  height: 40px;
  margin: 4px auto;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.white100};

  &:disabled {
    background-color: ${({ theme }) => theme.colors.primary_light};
  }
  @media (max-width: 720px) {
    font-size: ${({ theme }) => theme.sizes.medium};
  }
`;

export const FavoriteButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 32px;
  height: 32px;
  background-color: transparent;
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.white100};
  position: absolute;
  left: 272px;
  top: 12px;

  &:disabled {
    background-color: ${({ theme }) => theme.colors.primary_light};
  }
`;

export const ShareButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 32px;
  height: 32px;
  background-color: transparent;
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.white100};
  position: absolute;
  left: 232px;
  top: 12px;

  &:disabled {
    background-color: ${({ theme }) => theme.colors.primary_light};
  }
`;

export const PriceText = styled.h2`
  font-size: ${({ theme }) => theme.sizes.xxlarge};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.success};
  @media (max-width: 1080px) {
    font-size: ${({ theme }) => theme.sizes.xlarge};
  }
  @media (max-width: 720px) {
    font-size: ${({ theme }) => theme.sizes.large};
  }
`;

export const Text = styled.span`
  font-size: ${({ theme }) => theme.sizes.large};
  font-weight: 300;
  color: ${({ theme }) => theme.colors.text};
  @media (max-width: 720px) {
    font-size: ${({ theme }) => theme.sizes.medium};
  }
`;

export const PriceOnCreditText = styled.span`
  font-size: ${({ theme }) => theme.sizes.medium};
  font-weight: 500;
  margin: 8px auto;
  color: ${({ theme }) => theme.colors.text};
  @media (max-width: 720px) {
    font-size: ${({ theme }) => theme.sizes.normal};
  }
`;
