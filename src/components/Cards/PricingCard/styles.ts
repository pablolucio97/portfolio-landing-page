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
  justify-content: space-between;
  align-items: center;
  width: 320px;
  margin: 4px auto;
  background-color: ${({ theme }) => theme.colors.white100};
  border-radius: 4px;
  padding: 16px;
  position: relative;
  @media (max-width: 1080px) {
    width: 98%;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1.2rem auto;
`;

export const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: auto;
`;

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.sizes.xlarge};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.title};
  width: 92%;
  margin: 0.4rem auto;
  text-align: center;
  @media (max-width: 1080px) {
    width: 50%;
  }
  @media (max-width: 720px) {
    font-size: ${({ theme }) => theme.sizes.large};
  }
`;

export const TextItem = styled.li`
  font-size: ${({ theme }) => theme.sizes.medium};
  font-weight: 300;
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
  @media (max-width: 1080px) {
  }
  @media (max-width: 720px) {
    font-size: ${({ theme }) => theme.sizes.medium};
  }
`;

export const Text = styled.span`
  font-size: ${({ theme }) => theme.sizes.large};
  font-weight: 300;
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
  @media (max-width: 1080px) {
  }
  @media (max-width: 720px) {
    font-size: ${({ theme }) => theme.sizes.medium};
  }
`;

export const PurchaseButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.success};
  color: ${({ theme }) => theme.colors.white100};
  font-weight: 500;
  border-radius: 4px;
  width: 88%;
  height: 32px;
  margin: 1.2rem auto;
  @media (max-width: 720px) {
    font-size: ${({ theme }) => theme.sizes.medium};
  }
`;

export const OldPrice = styled.h3`
  font-size: ${({ theme }) => theme.sizes.large};
  text-decoration: line-through;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.error};
  text-align: center;
  @media (max-width: 1080px) {
  }
  @media (max-width: 720px) {
    font-size: ${({ theme }) => theme.sizes.medium};
  }
`;

export const DealsMonthPrice = styled.h2`
  font-size: ${({ theme }) => theme.sizes.xlarge};
  font-weight: 800;
  color: ${({ theme }) => theme.colors.success};
  text-align: center;
  @media (max-width: 720px) {
    font-size: ${({ theme }) => theme.sizes.large};
  }
`;

export const RecommendationBadge = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56%;
  height: 32px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white100};
  font-size: ${({ theme }) => theme.sizes.medium};
  font-weight: 600;
  z-index: 999;
  position: absolute;
  top: -16px;
  right: 22%;
`;

export const ResourceContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Divider = styled.div`
  display: flex;
  width: 98%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.silver100};
  margin: 16px auto;
`;
