import { Input as ChakraInput } from '@chakra-ui/react';
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  min-width: 240px;
  width: 100%;
  @media (max-width: 720px) {
    width: 98%;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 37px;
  width: 37px;
  margin: 2px 4px 2px;
  margin-top: 1px;
  background: ${({ theme }) => theme.colors.white100};
  border-radius: 4px;
  margin-right: 2px;
  cursor: pointer;
`;

export const Input = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
  border-radius: 4px;
  min-width: 240px;
  width: 100%;
  height: 40px;
  margin: 0 4px 0 2px;
  padding: 16px;
  background: ${({ theme }) => theme.colors.white100};
  border: 2px solid ${({ theme }) => theme.colors.element_base};
  font-size: ${({ theme }) => theme.sizes.medium};

  @media (max-width: 720px) {
    font-size: ${({ theme }) => theme.sizes.normal};
  }

  &:focus {
    border: 2px solid ${({ theme }) => theme.colors.primary};
  }

  &:disabled {
    background: ${({ theme }) => theme.colors.element_base};
  }
`;

export const ChakraPasswordInput = styled(ChakraInput)`
    display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
  border-radius: 4px;
  min-width: 240px;
  width: 98%;
  height: 40px;
  margin: 2px auto;
  padding: 16px;
  background: ${({ theme }) => theme.colors.white100};
  border: 2px solid ${({ theme }) => theme.colors.element_base};
  font-size: ${({ theme }) => theme.sizes.medium};

  @media (max-width: 720px) {
    font-size: ${({ theme }) => theme.sizes.normal};
  }

  &:focus {
    border: 2px solid ${({ theme }) => theme.colors.primary};
    outline: none;
  }

  &:disabled {
    background: ${({ theme }) => theme.colors.element_base};
  }
`
export const ChakraConfirmPasswordInput = styled(ChakraInput)`
    display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
  border-radius: 4px;
  min-width: 240px;
  width: 98%;
  height: 40px;
  margin: 2px auto;
  padding: 16px;
  background: ${({ theme }) => theme.colors.white100};
  border: 2px solid ${({ theme }) => theme.colors.element_base};
  font-size: ${({ theme }) => theme.sizes.medium};

  @media (max-width: 720px) {
    font-size: ${({ theme }) => theme.sizes.normal};
  }

  &:focus {
    border: 2px solid ${({ theme }) => theme.colors.primary};
    outline: none;
  }

  &:disabled {
    background: ${({ theme }) => theme.colors.element_base};
  }
`
