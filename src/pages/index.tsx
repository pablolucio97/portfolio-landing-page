import Head from "next/head";
import Script from "next/script";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight, FaWhatsapp } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import FadeAnimation from "../components/Animations/Fade";
import { LogoLoop } from "../components/Animations/LogoLoop";
import RotateAnimation from "../components/Animations/Rotate";
import ZoomAnimation from "../components/Animations/Zoom";
import { DotGrid } from "../components/Backgrounds/DotGrid";
import { LetterGlitch } from "../components/Backgrounds/LetterGlitch";
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
  Container,
  IntroductionSection,
  IntroductionSectionContainer,
  IntroductionSectionContentContainer,
  IntroductionSectionContentInfoContainer,
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
  TestimonialsCarouselContainer,
  TestimonialsInfoContainer,
  TestimonialsSection,
  TestimonialsSectionContainer,
  WhoAmIRowContainer,
  WhoAmISection,
  WhoAmISectionContainer,
  WhoAmISectionContentInfoContainer,
} from "../styles/";
import { theme } from "../themes/theme";
import { sendWhatsAppMessage } from "../ultis/sendWhatsAppMessage";

const companyLogos = enterprises.map((enterprise, index) => ({
  src: enterprise.img,
  href: enterprise.website,
  alt: `Empresa assistida ${index + 1}`,
  title: enterprise.website,
  width: enterprise.width,
  height: enterprise.height,
}));

const contactTerminalGridMul: [number, number] = [2.2, 1];

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
        <LetterGlitch glitchColors={["#290ac2", "#4d2db5", "#61b3dc"]} outerVignette />
        <IntroductionSectionContainer>
          <IntroductionSectionContentContainer>
            <IntroductionSectionContentInfoContainer>
              <ProfileRowContainer>
                <NextImage
                  height={160}
                  width={160}
                  imgUrl="/profile_1_square.png"
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
                    <SubTitle content="- IA Engineer" />
                  </SubtitleContentContainer>
                </ProfileColumnContainer>
              </ProfileRowContainer>
            </IntroductionSectionContentInfoContainer>
          </IntroductionSectionContentContainer>
        </IntroductionSectionContainer>
      </IntroductionSection>

      <WhoAmISection id="whoami">
        <WhoAmISectionContainer>
          <Title content="Quem sou eu" />
          <WhoAmISectionContentInfoContainer>
            <WhoAmIRowContainer>
              <Text content="Meu nome é Pablo Silva e sou desenvolvedor full-stack com mais de 6 anos de de experiência." />
              <FadeAnimation>
                <NextImage
                  height={131}
                  width={480}
                  imgUrl="/gb_contributions.png"
                  style={{
                    // filter: "grayscale(100%) sepia(100%) hue-rotate(210deg)",
                    borderRadius: 8,
                  }}
                />
              </FadeAnimation>
            </WhoAmIRowContainer>

            <WhoAmIRowContainer $reverseOnMobile>
              <FadeAnimation>
                <NextImage height={400} width={640} imgUrl="/systems.png" />
              </FadeAnimation>
              <Text content=" Ao longo da minha carreira, trabalhei em uma variedade de projetos em diferentes setores, incluindo healthtech, fintech e varejo." />
            </WhoAmIRowContainer>

            <WhoAmIRowContainer>
              <Text content="Como profissional, me dedico a criar soluções robustas e escaláveis entregando uma intuitiva e agradável experiência para o usuário final." />
              <FadeAnimation>
                <NextImage
                  height={260}
                  width={465}
                  imgUrl="/ajx-app.png"
                  style={{ filter: "contrast(100%) brightness(100%)" }}
                />
              </FadeAnimation>
            </WhoAmIRowContainer>

            <WhoAmIRowContainer $reverseOnMobile>
              <FadeAnimation>
                <NextImage
                  height={400}
                  width={640}
                  imgUrl="/monitors.png"
                  style={{ borderRadius: "1rem" }}
                />
              </FadeAnimation>
              <Text content=" Alinhado com o mercado, integro soluções de inteligência artificial e automação em meus projetos." />
            </WhoAmIRowContainer>
          </WhoAmISectionContentInfoContainer>
        </WhoAmISectionContainer>
      </WhoAmISection>

      <ProjectsSection id="portfolio">
        <DotGrid
          dotSize={3}
          gap={26}
          baseColor={theme.colors.primary_light}
          activeColor={theme.colors.white100}
          proximity={150}
          shockRadius={220}
          shockStrength={0.08}
          style={{ opacity: 0.32 }}
        />
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
          <TestimonialsCarouselContainer>
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
          </TestimonialsCarouselContainer>
        </TestimonialsSectionContainer>
      </TestimonialsSection>

      <PortfolioSection>
        <PortfolioSectionContainer id="enterprises">
          <Title content="Empresas assistidas" />
          <Text content="Empresas em que já trabalhei diretamente ou prestei serviços como freelancer" />
          <CompaniesContainer>
            <LogoLoop
              logos={companyLogos}
              speed={52}
              gap={40}
              logoHeight={44}
              pauseOnHover
              scaleOnHover
              fadeOut
              fadeOutColor={theme.colors.background_secondary}
              ariaLabel="Empresas assistidas"
            />
          </CompaniesContainer>
        </PortfolioSectionContainer>
      </PortfolioSection>

      <ContactSection id="contact">
        <ContactSectionContainer>
          <Title content="Contato" />
          <span>
            Se você precisa de um profissional experiente para desenvolver seu
            projeto ou integrar soluções com{" "}
            <span style={{ fontWeight: "bold" }}>Inteligência Artificial</span>
          </span>

          <ContactSectionButtonsContainer>
            <PrimaryButton
              ariaLabel="Me chame no Whatsapp"
              onClick={sendWhatsAppMessage}
              title="Me chame no Whatsapp"
              size="large"
              style={{
                backgroundColor: theme.colors.success,
              }}
              icon={<FaWhatsapp size={20} />}
            />
          </ContactSectionButtonsContainer>
        </ContactSectionContainer>
      </ContactSection>
    </Container>
  );
}
