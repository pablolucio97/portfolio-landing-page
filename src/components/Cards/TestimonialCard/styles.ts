import styled from "styled-components";

export const Container = styled.div`
  & .glassEffect {
    backdrop-filter: blur(8px) saturate(120%);
    -webkit-backdrop-filter: blur(8px) saturate(120%);
    background-color: rgba(17, 25, 40, 0.24);
    border: 1px solid rgba(255, 255, 255, 0.125);
  }
  margin: 0 16px;
`;

export const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 240px;
  padding: 16px 24px;
  margin: 8px auto;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.primary_dark};
  box-shadow: ${({ theme }) => theme.shadows.soft};
  @media (max-width: 480px) {
    width: 100%;
    margin: 8px;
  }
`;

export const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  & p{
    width: 100%;
    text-align: left;
  }
`
export const AvatarContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`


export const StarsContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Text = styled.p`
  font-size: ${({ theme }) => theme.sizes.medium};
  text-align: center;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.white300};
  padding: 8px 4px;
  margin: 12px 0;
  word-wrap: break-word;
  width: 96%;
  @media (max-width: 720px) {
    font-size: ${({ theme }) => theme.sizes.small};
  }
`;

export const Title = styled.h3`
  font-size: ${({ theme }) => theme.sizes.small};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.white200};
  text-align: right;
  word-wrap: break-word;
  width: 100%;
  @media (max-width: 720px) {
    font-size: ${({ theme }) => theme.sizes.xsmall};
  }
`;

export const SubTitle = styled.h4`
  font-size: ${({ theme }) => theme.sizes.small};
  font-weight: 400;
  color: ${({ theme }) => theme.colors.white300};
  text-align: right;
  word-wrap: break-word;
  width: 100%;
  @media (max-width: 720px) {
    font-size: ${({ theme }) => theme.sizes.xsmall};
  }
`;