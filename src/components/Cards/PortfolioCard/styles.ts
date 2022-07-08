import styled from 'styled-components'

export const RevealContainer = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
position: absolute;
right: 0;
left: 0;
bottom: 0;
overflow: hidden;
opacity: .96;
height: 8px;
background-color: ${({ theme }) => theme.colors.secondary};
transition: all .3s ease;
`

export const Button = styled.button`
  display: none;
  justify-content: center;
  align-items: center;
  padding: 4px 12px;
  min-width: 120px;
  height: 40px;
  opacity: 1;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.black400};
  font-size: ${({ theme }) => theme.sizes.medium};
  font-weight: 700;

  &:disabled {
    background-color: ${({ theme }) => theme.colors.primary_light};
  }
  @media (max-width: 720px) {
    font-size: ${({ theme }) => theme.sizes.normal};
    max-width: 188px;
  }
`;

export const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 560px;
height: 420px;
margin: 12px;
position: relative;
cursor: pointer;
&:hover{
    ${RevealContainer}{
        height: 56%;
    }
    ${Button}{
        display: flex;
        opacity: 1;
        z-index: 2;
    }
}

@media (max-width: 720px) {
    width: 80%;
  }

`

export const Title = styled.h3`
  font-size: ${({ theme }) => theme.sizes.large};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.black100};
  @media (max-width: 1080px) {
    font-size: ${({ theme }) => theme.sizes.medium};
  }
  @media (max-width: 720px) {
    font-size: ${({ theme }) => theme.sizes.small};
  }
`;





