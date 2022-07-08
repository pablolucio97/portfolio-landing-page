import styled from "styled-components";
import Image from "next/image";

export const Container = styled.div`
  & > div {
    position: unset !important;
  }
`;

export const NextImage = styled(Image)``;
