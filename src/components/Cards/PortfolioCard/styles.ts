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
opacity: .8;
height: 8px;
background-color: ${({ theme }) => theme.colors.black300};
transition: all .3s ease;
`

export const Button = styled.button`
  display: none;
  position: absolute;
  right: 0;
  left: 0;
  bottom: 0;
  justify-content: center;
  align-items: center;
  padding: 4px 12px;
  min-width: 120px;
  margin: 0 auto 40px;
  height: 40px;
  opacity: 1;
  background-color: ${({ theme }) => theme.colors.secondary};
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
    bottom: 24px;
  }
`;

export const ContentText = styled.span`
  font-size: ${({ theme }) => theme.sizes.normal};
  font-weight: 300;
  text-align: center;
  margin: 24px auto;
  color: ${({ theme }) => theme.colors.white400};
  @media (max-width: 720px) {
    font-size: ${({ theme }) => theme.sizes.small};
  }
  display: none;
  position: absolute;
  right: 0;
  left: 0;
  bottom: 0;
`


export const ImageContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
height: 420px;
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
        width: 170px;
        height: 40px;
        margin: 0 auto 16%;
    }
    ${ContentText}{
        display: flex;
        opacity: 1;
        z-index: 2;
        padding: 0 8px;
    }

    @media (max-width: 768px){
      ${Button}{
        display: flex;
        opacity: 1;
        z-index: 2;
        width: 170px;
        height: 40px;
        margin: 0 auto 24%;
    }
    }

}


`

export const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 560px;

margin: 12px;
@media (max-width: 720px) {
    width: 80%;
    margin: 0 auto;
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

export const Text = styled.p`
  font-size: ${({ theme }) => theme.sizes.medium};
  font-weight: 300;
  text-align: justify;
  margin: 4px 0;
  color: ${({ theme }) => theme.colors.white400};
  @media (max-width: 720px) {
    font-size: ${({ theme }) => theme.sizes.normal};
  }
`;

export const TechsContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
`

export const TechsImageContainer = styled.div`
width: 100%;
display: flex;
justify-content: center;
`





