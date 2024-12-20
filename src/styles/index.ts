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
`;

export const IntroductionSection = styled.section`
  display: flex;
  width: 100%;
  min-height: 48vh;
  background: -webkit-linear-gradient(-141deg, #290ac2, #000000, #290ac2);
  background: linear-gradient(-141deg, #290ac2, #000000, #290ac2);
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
  @media (max-width: 992px) {
    flex-direction: column;
    align-items: center;
  }
`;
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

  @media (max-width: 768px) {
    flex-direction: column;
    padding-top: 5%;
  }
`;

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

  @media (max-width: 992px) {
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

  @media (max-width: 992px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ProfileColumnContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  padding-left: 2rem;
  @media (max-width: 992px) {
    align-items: center;
    padding: 0;
  }
  /* background: pink; */
`;

export const SubtitleContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-bottom: 2rem;

  @media (max-width: 992px) {
    flex-direction: column;
    align-items: center;
  }
  & h1,
  h2,
  h3,
  p,
  span {
    font-size: 1rem;
    margin: 0 2px;
  }
`;

export const IntroductionSectionImageContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 50%;
  @media (max-width: 992px) {
    padding-bottom: 2rem;
    width: 80%;
  }
`;

export const WhoAmISection = styled.section`
  width: 100%;
  min-height: 40vh;
  background: -webkit-linear-gradient(
    139deg,
    rgb(255, 255, 255),
    rgb(230, 230, 230)
  );
  background: linear-gradient(139deg, rgb(255, 255, 255), rgb(230, 230, 230));
`;

export const WhoAmISectionContainer = styled.div`
  width: 1200px;
  height: 100%;
  flex-direction: row;
  padding: 4rem 0;
  margin: 0 auto;
  @media (max-width: 1200px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    padding: 1.5rem;
  }
`;

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

  & h1,
  h2,
  h3,
  p,
  span {
    width: 100%;
    @media (max-width: 992px) {
      padding: 0 5%;
    }
    @media (max-width: 768px) {
      padding: 0 2%;
    }
  }

  @media (max-width: 992px) {
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const WhoAmISectionContentInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  & p {
    font-weight: 400;
    margin-bottom: 1rem;
  }

  @media (max-width: 992px) {
    flex-direction: column;
    align-items: flex-start;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const WhoAmIColumnContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-left: 2rem;

  & div {
    margin-top: 1rem;
  }

  @media (max-width: 992px) {
    align-items: center;
    padding: 0;
  }
`;
export const WhoAmISectionImageContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 48%;

  @media (max-width: 992px) {
    width: 100%;
    margin-top: 2rem;
    justify-content: center;
  }
`;

export const PortfolioSection = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  background: -webkit-linear-gradient(
    139deg,
    rgb(255, 255, 255),
    rgb(230, 230, 230)
  );
  background: linear-gradient(139deg, rgb(255, 255, 255), rgb(230, 230, 230));
`;

export const PortfolioSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1200px;
  margin: 0 auto;
  padding: 3rem 2rem;
  & h1 {
    color: ${({ theme }) => theme.colors.black100};
    margin: 1rem auto 0;
    font-weight: 800;
  }
  & h3 {
    color: ${({ theme }) => theme.colors.black100};
  }

  & p {
    color: ${({ theme }) => theme.colors.black100};
    margin: 24px auto 16px;
  }

  @media (max-width: 560px) {
    & p {
      max-width: 80%;
    }
  }
`;

export const CompaniesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  align-self: auto;
  flex-wrap: wrap;
  & img {
    border-radius: 12px;
    margin: 8px;
  }
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  max-width: 1200px;
  flex-wrap: wrap;
`;

export const SkillsSection = styled.section`
  width: 100%;
  min-height: 40vh;
  display: flex;
  justify-content: center;
  background: -webkit-linear-gradient(
    139deg,
    rgb(255, 255, 255),
    rgb(230, 230, 230)
  );
  background: linear-gradient(139deg, rgb(255, 255, 255), rgb(230, 230, 230));
  @media (max-width: 1024px) {
    min-height: 48vh;
  }
`;

export const SkillsSectionContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  & h1 {
    color: ${({ theme }) => theme.colors.black100};
    font-weight: 800;
  }
  & h3 {
    color: ${({ theme }) => theme.colors.black300};
    margin: 1rem 0;
    font-weight: 600;
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }
`;

export const SkillsInfoContainer = styled.div`
  width: 48%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 2rem;

  & p {
    width: 72%;
    transition: 1s ease-out;
  }

  @media (max-width: 992px) {
    width: 100%;
    & p {
      width: 100%;
    }
  }
`;

export const SkillsCardsContainer = styled.div`
  width: 48%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media (max-width: 992px) {
    width: 80%;
    flex-wrap: wrap;
  }

  @media (max-width: 768px) {
    width: 100%;
    flex-wrap: wrap;
  }

  .skillCard {
    margin-right: -40px;
    &:hover {
      cursor: pointer;
      margin-top: -2rem;
      z-index: 999;
    }
    transition: 0.4s ease;
    @media (max-width: 768px) {
      margin-right: -20px;
    }
  }

  @media (max-width: 992px) {
    padding: 0;
  }
`;

export const TestimonialsSection = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 64vh;
  background: -webkit-linear-gradient(-141deg, #290ac2, #000000, #290ac2);
  background: linear-gradient(-141deg, #290ac2, #000000, #290ac2);
`;

export const TestimonialsSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  @media (max-width: 1200px) {
    width: 100%;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    padding: 40px 1.5rem;
  }
`;

export const TestimonialsInfoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 2rem;
  padding: 0 2rem;

  @media (max-width: 992px) {
    width: 100%;
  }

  & h1 {
    color: ${({ theme }) => theme.colors.white100};
    font-weight: 800;
    margin-left: -1.5rem;
  }
  & h3 {
    color: ${({ theme }) => theme.colors.white100};
    font-size: ${({ theme }) => theme.sizes.medium};
    margin: 16px 0;
    margin-left: -1.5rem;
    @media (max-width: 992px) {
      width: 100%;
    }
  }
`;

export const TestimonialsCardsContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin-bottom: 2rem;

  @media (max-width: 992px) {
    width: 100%;
  }

  & p {
    @media (max-width: 1024px) {
      width: 80%;
    }
  }
`;

export const ProjectsSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding: 1rem 0;
  background: -webkit-linear-gradient(-141deg, #290ac2, #000000, #290ac2);
  background: linear-gradient(-141deg, #290ac2, #000000, #290ac2);
`;

export const ProjectsSectionContainer = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 2rem;
  padding-top: 2rem;

  @media (max-width: 992px) {
    width: 100%;
  }
`;

export const ProjectsInfoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;

  @media (max-width: 992px) {
    width: 100%;
  }

  & h1 {
    color: ${({ theme }) => theme.colors.white100};
    font-weight: 800;
  }
  & h3 {
    color: ${({ theme }) => theme.colors.white100};
    font-size: ${({ theme }) => theme.sizes.large};
    margin: 1rem 0;
    @media (max-width: 992px) {
      width: 100%;
    }
  }
`;

export const SlickContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 992px) {
      width: 95%;
      margin: 1rem auto;
    }


  & h3 {
    color: ${({ theme }) => theme.colors.white300};
    font-size: ${({ theme }) => theme.sizes.medium};
    margin: 16px 0;
    width: 40%;
    @media (max-width: 992px) {
      width: 100%;
      font-size: ${({ theme }) => theme.sizes.small};
    }
  }
`;

export const ProjectsCardsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin-bottom: 2rem;

  @media (max-width: 992px) {
    width: 100%;
  }

  & p {
    @media (max-width: 1024px) {
      width: 80%;
    }
  }
`;

export const ContactSection = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  background: -webkit-linear-gradient(-111deg, #333333, #000000, #333333);
  background: linear-gradient(-111deg, #333333, #000000, #333333);
  padding: 1rem 0 2rem;
`;

export const ContactSectionListContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  @media (max-width: 992px) {
    font-size: ${({ theme }) => theme.sizes.normal};
    flex-direction: column;
  }

  & span, p {
    width: 100%;
    text-align: center;
    color: ${({ theme }) => theme.colors.white200};
    font-size: ${({ theme }) => theme.sizes.medium};
    @media (max-width: 992px) {
      font-size: ${({ theme }) => theme.sizes.normal};
    }
  }

  & ul {
    margin: 1rem auto;
  }

  & li {
    text-align: center;
    font-size: ${({ theme }) => theme.sizes.normal};
    @media (max-width: 992px) {
      font-size: ${({ theme }) => theme.sizes.small};
    }
  }
`;

export const ContactSectionButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 992px) {
    border-left-width: 2px;
    border-left-color: ${({ theme }) => theme.colors.white200};
    margin-left: 4rem;
    margin-top: 2rem
  }

  @media (max-width: 992px) {
    margin-top: 1rem
  }
`;
export const ContactSectionServicesContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 2rem
`;

export const ContactSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1200px;
  margin: 0 auto;
  padding: 2rem;

  @media (max-width: 992px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
  }

  & span {
    color: ${({ theme }) => theme.colors.white200};
    margin: 0 auto 24px;
    font-weight: 400;
  }

  & h1 {
    color: ${({ theme }) => theme.colors.white200};
    margin: 0 auto 24px;
    font-weight: 800;
  }
  & h3 {
    color: ${({ theme }) => theme.colors.white200};
    font-size: ${({ theme }) => theme.sizes.large};
    width: 50%;
    margin: 8px auto 40px;
    text-align: center;

    @media (max-width: 992px) {
      width: 100%;
    }
  }

  & button {
    width: 320px;
    height: 58px;
    color: ${({ theme }) => theme.colors.white100};
    margin-bottom: 16px;
  }
`;
