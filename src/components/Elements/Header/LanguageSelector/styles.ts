import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  right: 1.5rem;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  gap: 0.25rem;
  margin-right: 1rem;
  z-index: 1;
`;

export const LangButton = styled.button<{ $active: boolean }>`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.3rem;
  padding: 0.15rem 0.25rem;
  opacity: ${({ $active }) => ($active ? 1 : 0.45)};
  transition: ${({ theme }) => theme.transitions.faster};

  &:hover {
    opacity: 1;
  }
`;

export const FlagImage = styled.img`
  width: 22px;
  height: auto;
  border-radius: 2px;
  display: block;
`;

export const LangLabel = styled.span<{ $active: boolean }>`
  font-family: ${({ theme }) => theme.fonts.default};
  font-size: ${({ theme }) => theme.sizes.small};
  font-weight: ${({ $active }) => ($active ? 700 : 400)};
  color: ${({ theme }) => theme.colors.white100};
  letter-spacing: 0.04em;
`;

export const Divider = styled.span`
  color: ${({ theme }) => theme.colors.white500};
  opacity: 0.4;
  font-size: ${({ theme }) => theme.sizes.small};
  user-select: none;
`;
