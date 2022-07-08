import styled from "styled-components";

export const SelectInput = styled.select`
  width: 98%;
  height: 40px;
  border-radius: 4px;
  padding: 0 8px;
  margin: 4px;
  box-shadow: ${({ theme }) => theme.shadows.soft};
  outline: none;
  font-size: ${({ theme }) => theme.sizes.large};
  -moz-appearance: none;
  -webkit-appearance: none;
  background-image: url("/select_arrow_light.png");
  background-repeat: no-repeat, repeat;
  background-position: right 0.7em top 50%, 0 0;
  background-size: 1.32em auto, 100%;

  &:focus {
    border: 2px solid ${({ theme }) => theme.colors.primary};
  }

  &:disabled {
    background: ${({ theme }) => theme.colors.element_base};
  }

  @media (max-width: 720px) {
    margin: 0 auto;
    font-size: ${({ theme }) => theme.sizes.normal};
  }
`;

export const Option = styled.option`
  font-size: ${({ theme }) => theme.sizes.medium};

  @media (max-width: 720px) {
    font-size: ${({ theme }) => theme.sizes.normal};
  }
`;
