import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;

  & canvas {
    display: block;
    width: 100%;
    height: 100%;
  }
`;
