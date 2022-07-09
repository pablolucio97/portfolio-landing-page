import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  & .contactCard{
    width: 720px;
    background: ${({ theme }) => theme.colors.black100};
    margin-bottom: 40px;
    @media(max-width: 720px){
      width: 80%;
    }
    & span{
      color: ${({ theme }) => theme.colors.white400}
    }
  }

  & .socialContainer{
    display: flex;
    justify-content: center;
    margin-top: -16px;
  }
`

export const IntroductionSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 64vh;
  background: -webkit-linear-gradient(-41deg, rgb(5, 5, 5), rgb(31, 31, 31));
  background: linear-gradient(-41deg, rgb(5, 5, 5), rgb(31, 31, 31));
`;

export const IntroductionSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1440px;
  margin: 0 auto;
  padding: 40px;
  & h1 {
    color: ${({ theme }) => theme.colors.white100};
    margin: 0 auto;
    font-weight: 800;
  }
`
export const IntroductionSectionContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  & h1 {
    color: ${({ theme }) => theme.colors.white100};
    margin: 0 auto;
    font-weight: 800;
  }

  @media (max-width: 720px){
    flex-direction: column;
  }
`

export const IntroductionSectionContentInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;

  & h3 {
    color: ${({ theme }) => theme.colors.white100};
    margin-top: 24px;
    margin-bottom: -12px;
  }
  & p {
    color: ${({ theme }) => theme.colors.white500};
    margin: 24px auto;
    font-weight: 200;
  }

  @media (max-width: 720px){
    align-items: center;
    width: 100%;
  }
`;

export const IntroductionSectionImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40%;
  padding: 40px;
  @media (max-width: 720px){
    width: 80%;
  }
`;

export const PortfolioSection = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 64vh;
  background: -webkit-linear-gradient(-41deg, rgb(5, 5, 5), rgb(31, 31, 31));
  background: linear-gradient(-41deg, rgb(5, 5, 5), rgb(31, 31, 31));
`;

export const PortfolioSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1440px;
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
`

export const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  max-width: 1440px;
  flex-wrap: wrap;
`

export const SkillsSection = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 64vh;
  background-color: ${({ theme }) => theme.colors.black400};
`;

export const SkillsSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1440px;
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
`

export const ContactSection = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 64vh;
  margin-bottom: -120px;
  background: -webkit-linear-gradient(-41deg, rgb(5, 5, 5), rgb(31, 31, 31));
    background: linear-gradient(-41deg, rgb(5, 5, 5), rgb(31, 31, 31));
`;

export const ContactSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1440px;
  margin: 0 auto;
  padding: 40px 0;
  & h1 {
    color: ${({ theme }) => theme.colors.white100};
    margin: 24px auto;
    font-weight: 800;
  }
  & h3 {
    color: ${({ theme }) => theme.colors.white100};
    margin: 40px auto 16px;
  }
`

export const SocialContactContainer = styled.div`
  margin: 0 auto;

`