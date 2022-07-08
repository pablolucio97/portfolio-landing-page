import styled from 'styled-components'

export const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
width: 320px;
min-height: 400px;
border-radius: 4px;
background-color: ${({ theme }) => theme.colors.white100};
box-shadow: ${({ theme }) => theme.shadows.soft};
margin: 8px;
padding: 4px;
`

export const ImageContainer = styled.div`
width: 100%;
height: 50%;
`

export const ContentContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
width: 100%;
height: 50%;
padding: 40px 12px;
`

export const Title = styled.h3`
  font-size: ${({ theme }) => theme.sizes.medium};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.black100};
  @media (max-width: 720px) {
    font-size: ${({ theme }) => theme.sizes.medium};
  }
`

export const Text = styled.div`
  font-size: ${({ theme }) => theme.sizes.medium};
  font-weight: 300;
  text-align: justify;
  margin: 4px 0;
  color: ${({ theme }) => theme.colors.text};
  @media (max-width: 720px) {
    font-size: ${({ theme }) => theme.sizes.normal};
  }
`
