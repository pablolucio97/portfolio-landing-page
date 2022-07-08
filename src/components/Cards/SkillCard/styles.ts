import styled from 'styled-components'

export const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
width: 264px;
margin: 16px;
position: relative;
background: -webkit-linear-gradient(-41deg, rgb(5, 5, 5), rgb(31, 31, 31));
  background: linear-gradient(-41deg, rgb(5, 5, 5), rgb(31, 31, 31));
padding: 24px 8px;
border-radius: 4px;
transition: all .3s ease-in-out;

&:hover{
  transform: translateY(-12px)
}

@media (max-width: 720px) {
    width: 80%;
  }

`

export const Text = styled.p`
  font-size: ${({ theme }) => theme.sizes.medium};
  font-weight: 300;
  text-align: center;
  margin-top: 24px;
  width: 80%;
  color: ${({ theme }) => theme.colors.white300};
  @media (max-width: 1080px) {
    font-size: ${({ theme }) => theme.sizes.normal};
  }
  @media (max-width: 720px) {
    font-size: ${({ theme }) => theme.sizes.small};
  }
`;





