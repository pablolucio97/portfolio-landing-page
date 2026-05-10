import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
  z-index: 0;

  & canvas {
    display: block;
    position: absolute;
    inset: 0;
  }
`;
