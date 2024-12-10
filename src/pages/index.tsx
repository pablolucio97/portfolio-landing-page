import { useState } from "react";
import { FaArrowLeft, FaArrowRight, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import FadeAnimation from "../components/Animations/Fade";
import RotateAnimation from "../components/Animations/Rotate";
import ZoomAnimation from "../components/Animations/Zoom";
import { ProjectCrd } from "../components/Cards/ProjectCard";
import { SkillCardImage } from "../components/Cards/SkillCardImage";
import { TestimonialCard } from "../components/Cards/TestimonialCard";
import { PrimaryButton } from "../components/Elements/PrimaryButton";
import { NextImage } from "../components/Next/NextImage";
import { GradientText } from "../components/Typography/GradientText";
import { SubTitle } from "../components/Typography/SubTitle";
import { Text } from "../components/Typography/Text";
import { Title } from "../components/Typography/Title";
import { enterprises, projects, skills, testimonials } from "../data/data";
import {
  CompaniesContainer,
  ContactSection,
  ContactSectionButtonsContainer,
  ContactSectionContainer,
  ContactSectionListContainer,
  Container,
  IntroductionSection,
  IntroductionSectionContainer,
  IntroductionSectionContentContainer,
  IntroductionSectionContentInfoContainer,
  IntroductionSectionImageContainer,
  PortfolioSection,
  PortfolioSectionContainer,
  ProfileColumnContainer,
  ProfileRowContainer,
  ProjectsInfoContainer,
  ProjectsSection,
  ProjectsSectionContainer,
  SkillsCardsContainer,
  SkillsInfoContainer,
  SkillsSection,
  SkillsSectionContainer,
  SlickContainer,
  SubtitleContentContainer,
  TestimonialsInfoContainer,
  TestimonialsSection,
  TestimonialsSectionContainer,
  WhoAmIColumnContainer,
  WhoAmISection,
  WhoAmISectionContainer,
  WhoAmISectionContentContainer,
  WhoAmISectionContentInfoContainer,
  WhoAmISectionImageContainer,
} from "../styles/";
import { theme } from "../themes/theme";
import { sendWhatsAppMessage } from "../ultis/sendWhatsAppMessage";

export default function Home() {
  const [skill, setSkill] = useState({
    title: "",
    content: "",
  });

  function handleSendEmail() {
    const email = "pablolucio_@hotmail.com";
    const body = "Gostaria de iniciar um novo projeto.";
    return (window.location.href = `mailto:?subject=${email}&body=${body}`);
  }

  const CustomPrevArrow = ({ onClick }) => (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "0px",
        transform: "translateY(-50%)",
        zIndex: 1,
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      <FaArrowLeft size={24} color="#ffffff" />
    </div>
  );

  const CustomNextArrow = ({ onClick }) => (
    <div
      style={{
        position: "absolute",
        top: "50%",
        right: "0",
        transform: "translateY(-50%)",
        zIndex: 1,
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      <FaArrowRight size={24} color="#ffffff" />
    </div>
  );

  const slickSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow onClick={() => {}} />,
    nextArrow: <CustomNextArrow onClick={() => {}} />,
  };

  return (
    <Container>
      <IntroductionSection>
        <IntroductionSectionContainer>
          <IntroductionSectionContentContainer>
            <IntroductionSectionContentInfoContainer>
                <ProfileRowContainer>
                  <NextImage
                    height={160}
                    width={160}
                    imgUrl="/profile.png"
                    style={{ borderRadius: 16, opacity: 0.8 }}
                  />

                  <ProfileColumnContainer>
                    <Title content="Pablo Silva" />
                    <SubtitleContentContainer>
                      <SubTitle content="Dsenvolvedor" />
                      <GradientText
                        content="full-stack"
                        direction="top-to-bottom"
                        initialColor="#0094FF"
                        finalColor="#90c3eb"
                      />
                    </SubtitleContentContainer>
                  </ProfileColumnContainer>
                </ProfileRowContainer>
            </IntroductionSectionContentInfoContainer>
          </IntroductionSectionContentContainer>
          <IntroductionSectionImageContainer>
            <ZoomAnimation>
              <NextImage height={400} width={640} imgUrl="/systems.png" />
            </ZoomAnimation>
          </IntroductionSectionImageContainer>
        </IntroductionSectionContainer>
      </IntroductionSection>

      <WhoAmISection id="whoami">
        <WhoAmISectionContainer>
          <WhoAmISectionContentInfoContainer>
            <WhoAmISectionContentContainer>
              <WhoAmIColumnContainer>
                <Title content="Quem sou eu" />
                <Text content="Meu nome é Pablo Silva e sou desenvolvedor full-stack com mais de 4 anos de de experiência. Ao longo da minha carreira, trabalhei em uma variedade de projetos em diferentes setores, incluindo healthtech, fintech e varejo." />
                <Text content="Como profissional, me dedico a criar soluções robustas e escaláveis, sempre priorizando boas práticas de desenvolvimento e entregando uma intuitiva e agradável experiência para o usuário final." />
                <FadeAnimation>
                  <NextImage
                    height={131}
                    width={697}
                    imgUrl="/gb_contribuition.svg"
                    style={{
                      filter: "grayscale(100%) sepia(100%) hue-rotate(210deg)",
                      borderRadius: 8,
                    }}
                  />
                </FadeAnimation>
              </WhoAmIColumnContainer>
            </WhoAmISectionContentContainer>
            <WhoAmISectionImageContainer>
              <FadeAnimation>
                <NextImage
                  height={260}
                  width={465}
                  imgUrl="/ajx-app.png"
                  style={{ filter: "contrast(100%) brightness(100%)" }}
                />
              </FadeAnimation>
            </WhoAmISectionImageContainer>
          </WhoAmISectionContentInfoContainer>
        </WhoAmISectionContainer>
      </WhoAmISection>

      <ProjectsSection id="portfolio">
        <ProjectsSectionContainer>
          <ProjectsInfoContainer>
            <Title content="Portfólio" />
            <SubTitle
              content={`Veja abaixo os meus projetos mais relevantes`}
            />
          </ProjectsInfoContainer>

          <SlickContainer>
            <ZoomAnimation>
              <Slider {...slickSettings} centerMode lazyLoad="ondemand">
                {projects.map((project) => (
                  <ProjectCrd
                    key={project.id}
                    title={project.title}
                    description={project.description}
                    videoId={project.videoId}
                  />
                ))}
              </Slider>
            </ZoomAnimation>
          </SlickContainer>
        </ProjectsSectionContainer>
      </ProjectsSection>

      <SkillsSection id="skills">
        <SkillsSectionContainer>
          <SkillsInfoContainer>
            <Title content={skill.title ? skill.title : "Tecnologias"} />
            <Text
              content={
                skill.content
                  ? skill.content
                  : "Passe o mouse sobre a tecnologia para entender como a utilizo em uma aplicação do mundo real."
              }
            />
          </SkillsInfoContainer>
          <SkillsCardsContainer>
            {skills.map((skill) => (
              <RotateAnimation key={skill.image}>
                <SkillCardImage
                  key={skill.image}
                  imgAlt={skill.alt}
                  imgUrl={skill.image}
                  className="skillCard"
                  onMouseEnter={() =>
                    setSkill({
                      title: skill.title,
                      content: skill.content,
                    })
                  }
                  onMouseLeave={() =>
                    setSkill({
                      title: "",
                      content: "",
                    })
                  }
                />
              </RotateAnimation>
            ))}
          </SkillsCardsContainer>
        </SkillsSectionContainer>
      </SkillsSection>

      <TestimonialsSection>
        <TestimonialsSectionContainer>
          <TestimonialsInfoContainer>
            <Title content="Depoimentos" />
            <SubTitle
              content={`Veja o que pessoas que já trabalharam comigo \n dizem`}
            />
          </TestimonialsInfoContainer>
          {/* <TestimonialsCardsContainer> */}
          <SlickContainer>
            <FadeAnimation>
              <Slider {...slickSettings} centerMode lazyLoad="ondemand">
                {testimonials.map((testimonial) => (
                  <TestimonialCard
                    key={testimonial.name}
                    personName={testimonial.name}
                    personPhotoUrl={testimonial.image}
                    personRole={testimonial.role}
                    testimonial={testimonial.testimonial}
                  />
                ))}
              </Slider>
            </FadeAnimation>
          </SlickContainer>
          {/* </TestimonialsCardsContainer> */}
        </TestimonialsSectionContainer>
      </TestimonialsSection>

      <PortfolioSection>
        <PortfolioSectionContainer id="enterprises">
          <Title content="Empresas assistidas" />
          <Text content="Empresas em que já trabalhei diretamente ou prestei serviços como freelancer" />
          <CompaniesContainer>
            {enterprises.map((enterprise) => (
              <FadeAnimation key={enterprise.id}>
                <a href={enterprise.website}>
                  <NextImage
                    width={enterprise.width}
                    height={enterprise.height}
                    imgUrl={enterprise.img}
                    style={{
                      filter: "grayscale(100%) sepia(100%) hue-rotate(200deg)",
                    }}
                  />
                </a>
              </FadeAnimation>
            ))}
          </CompaniesContainer>
        </PortfolioSectionContainer>
      </PortfolioSection>

      <ContactSection id="contact">
        <ContactSectionContainer>
          <ContactSectionListContainer>
            <Title content="Contato" />
            <span>Se você precisa de um profissional experiente para:</span>
            <ul>
              <li>• Desenvolver um aplicativo Android e iOS</li>

              <li>• Desenvolver seu site pessoal</li>

              <li>• Desenvolver uma landing page</li>

              <li>• Criar um sistema robusto para sua empresa</li>

              <li>• Desenvolver uma solução personalizada para seu negócio</li>
            </ul>
            <ContactSectionButtonsContainer>
              <PrimaryButton
                ariaLabel="button"
                onClick={handleSendEmail}
                title="Me envie um email"
                size="large"
                icon={<MdEmail size={20} />}
                style={{ marginTop: "1rem" }}
              />
              <p>ou</p>
              <PrimaryButton
                ariaLabel="button"
                onClick={sendWhatsAppMessage}
                title="Me chame no Whatsapp"
                size="large"
                style={{
                  backgroundColor: theme.colors.success,
                  marginTop: "1rem",
                }}
                icon={<FaWhatsapp size={20} />}
              />
            </ContactSectionButtonsContainer>
          </ContactSectionListContainer>
        </ContactSectionContainer>
      </ContactSection>
    </Container>
  );
}
