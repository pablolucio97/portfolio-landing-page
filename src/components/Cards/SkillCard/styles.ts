import styled from 'styled-components';

export const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
width: 264px;
min-height: 400px;
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

@media (max-width: 768px) {
    width: 80%;
    margin: 12px auto;
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
  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.sizes.small};
  }
`;





