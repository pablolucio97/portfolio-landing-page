import styled from 'styled-components'

export const Container = styled.div`
  display: none;
  width: 40px;
  height: 40px;
  cursor: pointer;
  @media (max-width: 1080px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
