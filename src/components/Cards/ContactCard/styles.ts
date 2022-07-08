import styled from "styled-components";

export const Container = styled.div`
  & .glassEffect {
    backdrop-filter: blur(8px) saturate(120%);
    -webkit-backdrop-filter: blur(8px) saturate(120%);
    background-color: rgba(17, 25, 40, 0.24);
    border: 1px solid rgba(255, 255, 255, 0.125);
  }
  @media (max-width: 720px) {
    width: 98%;
  }
`;
export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white100};
  width: 320px;
  border-radius: 4px;
  box-shadow: ${({ theme }) => theme.shadows.soft};
  padding: 16px;
  margin: 4px auto;
  position: relative;
  & .card {
    backdrop-filter: blur(8px) saturate(120%);
    -webkit-backdrop-filter: blur(8px) saturate(120%);
    background-color: rgba(17, 25, 40, 0.24);
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.125);
  }
  @media (max-width: 720px) {
    width: 98%;
    font-size: ${({ theme }) => theme.sizes.large};
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 12px auto;
  padding: 8px;
  @media (max-width: 720px) {
    width: 80%;
    font-size: ${({ theme }) => theme.sizes.large};
  }
`;

export const Title = styled.h3`
  font-size: ${({ theme }) => theme.sizes.xlarge};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.black100};
  width: 80%;
  text-align: center;
  @media (max-width: 1080px) {
    width: 80%;
    font-size: ${({ theme }) => theme.sizes.xlarge}
  }
  @media (max-width: 720px) {
    width: 80%;
    font-size: ${({ theme }) => theme.sizes.large}
  }
  
  `;

export const Text = styled.span`
  margin-left: 12px;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
  font-size: ${({ theme }) => theme.sizes.large};
  @media (max-width: 1080px) {
    margin-top: 12px;
  }
  @media (max-width: 720px) {
    text-align: center;
    font-size: ${({ theme }) => theme.sizes.medium};
  }
`;

export const WhatsappButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 56px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.success};
  color: ${({ theme }) => theme.colors.white100};
  font-size: ${({ theme }) => theme.sizes.large};
  font-weight: 500;
  @media (max-width: 720px) {
    width: 80%;
    text-align: center;
    font-size: ${({ theme }) => theme.sizes.normal};
  }
`;
