import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media(max-width: 1080px) {
    flex-direction: column;
  }
  `;

export const StepContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  min-height: 80px;
  @media(max-width: 1080px) {
    flex-direction: column;
  }
`;

export const StepLine = styled.div`
  width: 72px;
  height: 2px;
  background-color: ${({ theme }) => theme.colors.black100};
  margin: 0 12px;
  @media(max-width: 1080px) {
    transform: rotate(90deg);
    width: 24px;
    margin: 16px auto;
  }
`;

export const StepItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  margin: 8px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white100};
`;

export const StepTitle = styled.h4`
  font-size: ${({ theme }) => theme.sizes.large};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
  @media (max-width: 1080px) {
    font-size: ${({ theme }) => theme.sizes.medium};
  }
`;
