import Head from "next/head";
import Script from "next/script";
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
import { ServiceCard } from "../components/Cards/ServiceCard";
import { SkillCardImage } from "../components/Cards/SkillCardImage";
import { TestimonialCard } from "../components/Cards/TestimonialCard";
import { PrimaryButton } from "../components/Elements/PrimaryButton";
import { NextImage } from "../components/Next/NextImage";
import { GradientText } from "../components/Typography/GradientText";
import { SubTitle } from "../components/Typography/SubTitle";
import { Text } from "../components/Typography/Text";
import { Title } from "../components/Typography/Title";
import {
  enterprises,
  projects,
  services,
  skills,
  testimonials,
} from "../data/data";
import {
  CompaniesContainer,
  ContactSection,
  ContactSectionButtonsContainer,
  ContactSectionContainer,
  ContactSectionListContainer,
  ContactSectionServicesContainer,
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
      <Script
        id="load-google-tag-manager"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-NLZXNR77');
          `,
        }}
      />
      {/* Asynchronously load the Google Analytics gtag.js script */}
      <Script
        id="load-google-analytics"
        src="https://www.googletagmanager.com/gtag/js?id=G-R1X93YMK83"
        strategy="afterInteractive"
        async
      />
      {/* Initialize Google Analytics */}
      <Script
        id="execute-google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-R1X93YMK83');
          `,
        }}
      />
      <Head>
        <title>Pablo Silva Dev | Desenvolvedor full-stack</title>
      </Head>
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
                    <SubTitle content="Desenvolvedor" />
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
            <NextImage height={400} width={640} imgUrl="/systems.png" />
          </IntroductionSectionImageContainer>
        </IntroductionSectionContainer>
      </IntroductionSection>

      <WhoAmISection id="whoami">
        <WhoAmISectionContainer>
          <WhoAmISectionContentInfoContainer>
            <WhoAmISectionContentContainer>
              <WhoAmIColumnContainer>
                <Title content="Quem sou eu" />
                <Text content="Meu nome é Pablo Silva e sou desenvolvedor full-stack com mais de 5 anos de de experiência. Ao longo da minha carreira, trabalhei em uma variedade de projetos em diferentes setores, incluindo healthtech, fintech e varejo." />
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
            <SlickContainer>
              {projects.map((project) => (
                <ZoomAnimation key={project.id}>
                  <ProjectCrd
                    title={project.title}
                    description={project.description}
                    videoId={project.videoId}
                  />
                </ZoomAnimation>
              ))}
            </SlickContainer>
          </ProjectsInfoContainer>
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
                <a href={enterprise.website} target="_blank">
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
          <Title content="Contato" />
          <span>Se você precisa de um profissional experiente para:</span>
          <ContactSectionListContainer>
            <ContactSectionServicesContainer>
              {services.map((service) => (
                <FadeAnimation key={service.id}>
                  <ServiceCard
                    title={service.title}
                    icon={service.icon as never}
                  />
                </FadeAnimation>
              ))}
            </ContactSectionServicesContainer>

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
