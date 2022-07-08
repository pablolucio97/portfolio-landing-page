import { darken } from "polished";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.white100};
  align-items: center;
  box-shadow: ${({ theme }) => theme.shadows.soft};
  border-radius: 4px;
  padding: 4px;
  margin: 8px;
  & .stripped {
    background-color: ${({ theme }) => theme.colors.element_base};
  }
`;

export const ListItem = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 8px;                        
  align-items: center;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.element_base};
  &:hover{
      background-color: ${({ theme }) =>
        darken(0.2, theme.colors.element_base)};
      cursor: pointer;
  }
  &:last-child{
    border-bottom: none};
  }
`;

export const TextLink = styled.a`
  font-size: ${({ theme }) => theme.sizes.large};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
  padding-left: 4px;
  @media (max-width: 1080px) {
    font-size: ${({ theme }) => theme.sizes.medium};
  }
  @media (max-width: 720px) {
    font-size: ${({ theme }) => theme.sizes.small};
  }
`;
