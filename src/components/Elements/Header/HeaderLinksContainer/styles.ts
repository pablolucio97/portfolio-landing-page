import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 4rem;
  align-items: center;
  flex-direction: row;
  margin: 0 auto;
  justify-content: center;
  @media (max-width: 1080px) {
    display: none;
  }
`;