import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  /* & .contactCard{
    width: 768px;
    background: ${({ theme }) => theme.colors.black100};
    margin-bottom: 40px;
    @media(max-width: 768px){
      width: 80%;
    }
    & span{
      color: ${({ theme }) => theme.colors.white400}
    }
  } */
/* 
  & .socialContainer{
    display: flex;
    justify-content: center;
    margin-top: -16px;
  } */
`

export const IntroductionSection = styled.section`
  display: flex;
  width: 100%;
  min-height: 56vh;
  background: -webkit-linear-gradient(-41deg, rgb(5, 5, 5), rgb(31, 31, 31));
  background: linear-gradient(-41deg, rgb(5, 5, 5), rgb(31, 31, 31));
  /* background: green; */
`;

export const IntroductionSectionContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 1200px;
  margin: 0 auto;
  & h1 {
    color: ${({ theme }) => theme.colors.white100};
    font-weight: 800;
  }
  @media(max-width: 992px) {
    flex-direction: column;
    align-items: center;
  }
  `
export const IntroductionSectionContentContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 10%;
  width: 50%;
  height: 100%;
  & h1 {
    color: ${({ theme }) => theme.colors.white100};
    font-weight: 800;
  }
  
  @media (max-width: 768px){
    flex-direction: column;
    padding-top: 5%;
  }
  `

export const IntroductionSectionContentInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 1rem 4rem;
  width: 100%;
 
  & h3 {
    color: ${({ theme }) => theme.colors.white100};
  }

  & p {
    color: ${({ theme }) => theme.colors.white500};
    font-weight: 200;
  }

  @media (max-width: 992px){
    align-items: center;
    padding: 0;
    width: 100%;
  }
`;

export const ProfileRowContainer = styled.div`
width: 100%;
display: flex;
flex-direction: row;
justify-content: center;

@media (max-width: 992px){
    flex-direction: column;
    align-items: center;
  }
`

export const ProfileColumnContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
/* align-items: center; */
padding-left: 2rem;
@media (max-width: 992px){
    align-items: center;
    padding: 0;
  }
/* background: pink; */
`

export const SubtitleContentContainer = styled.div`
width: 100%;
display: flex;
flex-direction: row;
margin-bottom: 2rem;

@media(max-width: 992px){
  flex-direction: column;
  align-items: center;
}
& h1, h2, h3, p, span{
  font-size: 1rem;
  margin: 0 2px;
}
`

export const IntroductionSectionImageContainer = styled.div`
display: flex;
justify-content: flex-end;
align-items: flex-end;
margin-bottom: 16px;
width: 50%;
  @media (max-width: 992px){
    width: 80%;
  }
`;


export const WhoAmISection = styled.section`
width: 100%;
min-height: 40vh;
background: -webkit-linear-gradient(139deg, rgb(255, 255, 255), rgb(230, 230, 230));
background: linear-gradient(139deg, rgb(255, 255, 255), rgb(230, 230, 230));
`

export const WhoAmISectionContainer = styled.div`
width: 1200px;
height: 100%;
flex-direction: row;
padding: 4rem 0;
margin: 0 auto;
  @media(max-width: 992px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
  }
`

export const WhoAmISectionContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 48%;
  height: 100%;

  & h1 {
    color: ${({ theme }) => theme.colors.black100};
    font-weight: 800;
    margin-bottom: 1rem;
  }

  & h1, h2, h3, p, span{
    width: 100%;
    @media (max-width: 992px){
    padding: 0 5%;
  }
  @media (max-width: 768px){
    padding: 0 2%;
  }
}
  
  @media (max-width: 992px){
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
    padding: 0 1rem;
  }
  `

export const WhoAmISectionContentInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  & p {
    font-weight: 400;
    margin-bottom: 1rem;
  }

  @media (max-width: 992px){
    flex-direction: column;
    align-items: flex-start;
  }

  @media (max-width: 768px){
    flex-direction: column;
    align-items: center;
  }
`;


export const WhoAmIColumnContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
padding-left: 2rem;

& div{
  margin-top: 1rem;
}

@media (max-width: 992px){
    align-items: center;
    padding: 0;
  }
  
`
export const WhoAmISectionImageContainer = styled.div`
display: flex;
justify-content: flex-end;
align-items: flex-end;
margin-bottom: -8px;
width: 48%;

  @media (max-width: 992px){
    width: 72%;
  }

`;

export const PortfolioSection = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 40vh;
  background: -webkit-linear-gradient(-41deg, rgb(5, 5, 5), rgb(31, 31, 31));
  background: linear-gradient(-41deg, rgb(5, 5, 5), rgb(31, 31, 31));
`;

export const PortfolioSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1200px;
  margin: 0 auto;
  padding: 40px 0;
  & h1 {
    color: ${({ theme }) => theme.colors.white100};
    margin: 0 auto;
    font-weight: 800;
  }
  & h3 {
    color: ${({ theme }) => theme.colors.white100};
    margin: 40px auto 16px;
  }
  
  & p {
      color: ${({ theme }) => theme.colors.white100};
      margin: 24px auto 16px;
  }

  @media(max-width: 560px){
   & p {
      max-width: 80%;
  }
  }
`

export const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  max-width: 1200px;
  flex-wrap: wrap;
`

export const SkillsSection = styled.section`
  width: 100%;
  min-height: 40vh;
  display: flex;
  justify-content: center;
  background: -webkit-linear-gradient(139deg, rgb(255, 255, 255), rgb(230, 230, 230));
  background: linear-gradient(139deg, rgb(255, 255, 255), rgb(230, 230, 230));
  @media(max-width: 1024px){
    min-height: 48vh;
  }
`;

export const SkillsSectionContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 1200px;
  margin: 0 auto;
  padding: 2.5rem;
  & h1 {
    color: ${({ theme }) => theme.colors.black100};
    font-weight: 800;
  }
  & h3 {
    color: ${({ theme }) => theme.colors.black300};
    margin: 1rem 0;
    font-weight: 600;
  }


  @media(max-width: 1024px){
   flex-direction: column;
   justify-content: space-evenly;
   align-items: center;
  }


`

export const SkillsInfoContainer = styled.div`
width: 48%;
display: flex;
flex-direction: column;
justify-content: center;
margin-bottom: 2rem;

@media(max-width: 992px){
    width: 100%;
  }

& p{
  width: 100%;
  transition: 1s ease-out;
}
`

export const SkillsCardsContainer = styled.div`
width: 48%;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;

@media(max-width: 992px){
    width: 80%;
    flex-wrap: wrap;
  }

@media(max-width: 768px){
    width: 100%;
    flex-wrap: wrap;
  }
  
.skillCard{
  margin-right: -40px;
  &:hover{
    cursor: pointer;
    margin-top: -2rem;
    z-index: 999;
  }
  transition: .4s ease;
  @media(max-width: 768px){
    margin-right: -20px;
  }
}

@media (max-width: 992px){
    padding: 0;
  }

`

export const TestimonialsSection = styled.section`
 display: flex;
 justify-content: center;
 width: 100%;
 min-height: 64vh;
 background: -webkit-linear-gradient(-41deg, rgb(5, 5, 5), rgb(31, 31, 31));
 background: linear-gradient(-41deg, rgb(5, 5, 5), rgb(31, 31, 31));
`

export const TestimonialsSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1200px;
  margin: 0 auto;
  padding: 40px 0;
`

export const TestimonialsInfoContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
margin-bottom: 2rem;
padding: 0 3rem;

@media(max-width: 992px){
    width: 100%;
  }

  & h1 {
    color: ${({ theme }) => theme.colors.white100};
    font-weight: 800;
  }
  & h3 {
    color: ${({ theme }) => theme.colors.white100};
    font-size: ${({ theme }) => theme.sizes.large};
    margin: 16px 0;
    width: 40%;
    @media(max-width: 992px){
    width: 100%;
  }
  }

`

export const TestimonialsCardsContainer = styled.div`
width: 100%;
display: flex;
flex-direction: row;
justify-content: space-evenly;
flex-wrap: wrap;
margin-bottom: 2rem;

@media(max-width: 992px){
    width: 100%;
  }

& p{
  @media(max-width: 1024px){
    width: 80%;
  }
}
`

export const ContactSection = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  background: -webkit-linear-gradient(139deg, rgb(255, 255, 255), rgb(230, 230, 230));
  background: linear-gradient(139deg, rgb(255, 255, 255), rgb(230, 230, 230));
`;

export const ContactSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
  & h1 {
    color: ${({ theme }) => theme.colors.black100};
    margin: 0 auto 24px;
    font-weight: 800;
  }
  & h3 {
    color: ${({ theme }) => theme.colors.black300};
    font-size: ${({ theme }) => theme.sizes.large};
    width: 50%;
    margin: 8px auto 40px;
    text-align: center;

    @media(max-width: 992px){
      width: 100%;
    }

  }

  & button{
    width: 320px;
    height: 58px;
    color: ${({ theme }) => theme.colors.white100};
    margin-bottom: 16px;
  }
`

