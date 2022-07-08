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
  justify-content: flex-start;
  align-items: center;
  width: 320px;
  min-height: 240px;
  background-color: ${({ theme }) => theme.colors.white100};
  box-shadow: ${({ theme }) => theme.shadows.soft};
  border-radius: 4px;
  margin: 4px auto;
  @media (max-width: 720px) {
    width: 98%;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
  width: 100%;
  height: 40px;
  border-radius: 4px 4px 0 0;
  box-shadow: ${({ theme }) => theme.shadows.soft};
`;
export const ContentContainer = styled.div`
  display: flex;
  flex: 1;
  background-color: transparent;
  width: 100%;
  border-radius: 8px;
  padding: 8px;
`;

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.sizes.large};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.white100};
  @media (max-width: 720px) {
    font-size: ${({ theme }) => theme.sizes.medium};
  }
`;

export const Text = styled.p`
  font-size: ${({ theme }) => theme.sizes.medium};
  font-weight: 400;
  color: ${({ theme }) => theme.colors.text};
  padding: 8px;
  margin: 12px 0;
  word-wrap: break-word;
  width: 100%;
  @media (max-width: 720px) {
    font-size: ${({ theme }) => theme.sizes.normal};
  }
`;

export const ActionsContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  padding: 16px;
`;

export const PrimaryActionButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px;
  width: 120px;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.white100};
  font-size: ${({ theme }) => theme.sizes.medium};

  &:disabled {
    background-color: ${({ theme }) => theme.colors.primary_light};
  }

  @media(max-width: 720px){
    font-size: ${({ theme }) => theme.sizes.normal}
  }

`;

export const SecondaryActionButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px;
  width: 120px;
  height: 40px;
  background-color: transparent;
  border-radius: 4px;
  margin-left: 12px;
  color: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.sizes.medium};

  &:disabled {
    background-color: ${({ theme }) => theme.colors.white100};
    border-color: ${({ theme }) => theme.colors.primary_light};
  }

  @media(max-width: 720px){
    font-size: ${({ theme }) => theme.sizes.normal}
  }

`;
