import styled, { keyframes } from "styled-components";

interface DrawerProps {
  direction: "top" | "right" | "left";
}

const menuAnimationVertical = keyframes`
    0%{height: 0px};
    100%{min-height: 28vh};
`;

const menuAnimationHorizontal = keyframes`
  0%{width: 0px};
  100%{width: 280px};
`;

export const Container = styled.div<DrawerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: ${({ direction }) => (direction === "top" ? "15vh" : "100%")};
  width: ${({ direction }) => (direction === "top" ? "100%" : "300px")};
  position: fixed;
  top: 0;
  left: ${({ direction }) => (direction === "left" ? 0 : 300)};
  right: ${({ direction }) => (direction === "left" ? 300 : 0)};
  border-left: ${({ direction, theme }) =>
    direction === "right" ? `1px solid ${theme.colors.silver100}` : null};
  border-right: ${({ direction, theme }) =>
    direction === "left" ? `1px solid ${theme.colors.silver100}` : null};
  border-bottom: ${({ direction, theme }) =>
    direction === "top" ? `1px solid ${theme.colors.silver100}` : null};
  right: ${({ direction }) => (direction === "left" ? 300 : 0)};
  z-index: 999;
  animation: ${({ direction }) =>
      direction === "top" ? menuAnimationVertical : menuAnimationHorizontal}
    0.4s ease;
  -webkit-animation-fill-mode: forwards;
  background-color: ${({ theme }) => theme.colors.black100};
  overflow: auto;
  backdrop-filter: blur(8px) saturate(120%);
  -webkit-backdrop-filter: blur(8px) saturate(120%);
  background-color: rgba(17, 25, 40, 0.24);
  border: 1px solid rgba(255, 255, 255, 0.125);
`;

export const MenuContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  padding: 1.5rem 0;

  margin: 0 auto;
  & a {
    margin-bottom: 1rem;
  }
`;

export const MenuItem = styled.a`
  color: ${({ theme }) => theme.colors.black100};
  text-transform: capitalize;
  font-weight: 700;
  font-size: ${({ theme }) => theme.sizes.large};
  line-height: 482px;
  cursor: pointer;
  margin-bottom: 2rem;
  transition: all 0.3s ease;
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const CloseMenuButton = styled.button`
  display: flex;
  position: absolute;
  right: 40px;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  background-color: ${({ theme }) => theme.colors.error};
`;
