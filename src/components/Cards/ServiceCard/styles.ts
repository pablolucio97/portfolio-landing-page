import styled from "styled-components";

export const Container = styled.div`
  
  position: relative;
  display: flex;
  align-items: center;
  padding: 1rem;
  margin-top: 1rem;
  border-radius: 1.5rem;
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 0.5rem;
    padding: 2px;
    background: linear-gradient(
      to right,
      ${({ theme }) => theme.colors.primary},
      ${({ theme }) => theme.colors.primary_light}
    );
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: destination-out;
    mask-composite: exclude;
    z-index: -1;
  }

  @media (min-width: 992px) {
    min-width: 480px;
  }

  @media (max-width: 992px) {
    width: 80vw;
    margin-left: -2rem;
  }
`;

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.sizes.medium};
  font-weight: 400;
  color: ${({ theme }) => theme.colors.black300};
  margin-left: 1rem;
  @media (max-width: 720px) {
    font-size: ${({ theme }) => theme.sizes.normal};
  }
`;
