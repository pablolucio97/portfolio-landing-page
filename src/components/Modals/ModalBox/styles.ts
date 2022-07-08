import Modal from "react-modal";
import styled, { keyframes } from "styled-components";

interface ModalBoxProps {
  showAnimation?: boolean;
}

const modalAnimation = keyframes`
    0%{
      opacity: .8;
      transform: translateY(200px);
    };
    100%{
      opacity: 1;
    };
  `;

export const Container = styled(Modal)<ModalBoxProps>`
  width: 400px;
  height: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white100};
  border-radius: 4px;
  padding: 16px;
  border: 0;
  animation: ${({ showAnimation }) => showAnimation && modalAnimation} 1s ease;
  @media (max-width: 720px) {
    width: 320px;
    height: 240px;
    margin: 0 auto;
  }
`;
