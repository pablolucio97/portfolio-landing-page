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
import { useI18n } from "../i18n";
import { SkillTranslation } from "../i18n";
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

const contactTerminalGridMul: [number, number] = [2.2, 1];

export default function Home() {
  const { t } = useI18n();
  const [hoveredSkillAlt, setHoveredSkillAlt] = useState<string | null>(null);

  const hoveredSkill = hoveredSkillAlt
    ? (t.skills as Record<string, SkillTranslation>)[hoveredSkillAlt]
    : null;

  const companyLogos = enterprises.map((enterprise, index) => ({
    src: enterprise.img,
    href: enterprise.website,
    alt: `${t.enterprises.logoAlt} ${index + 1}`,
    title: enterprise.website,
    width: enterprise.width,
    height: enterprise.height,
  }));

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
      <Script
        id="load-google-analytics"
        src="https://www.googletagmanager.com/gtag/js?id=G-R1X93YMK83"
        strategy="afterInteractive"
        async
      />
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
        <title>{t.meta.title}</title>
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
                    <SubTitle content={t.intro.developer} />
                    <GradientText
                      content="full-stack"
                      direction="top-to-bottom"
                      initialColor="#0094FF"
                      finalColor="#90c3eb"
                    />
                    <SubTitle content={t.intro.role} />
                  </SubtitleContentContainer>
                </ProfileColumnContainer>
              </ProfileRowContainer>
            </IntroductionSectionContentInfoContainer>
          </IntroductionSectionContentContainer>
        </IntroductionSectionContainer>
      </IntroductionSection>

      <WhoAmISection id="whoami">
        <WhoAmISectionContainer>
          <Title content={t.whoami.title} />
          <WhoAmISectionContentInfoContainer>
            <WhoAmIRowContainer>
              <Text content={t.whoami.text1} />
              <FadeAnimation>
                <NextImage
                  height={131}
                  width={480}
                  imgUrl="/gb_contributions.png"
                  style={{ borderRadius: 8 }}
                />
              </FadeAnimation>
            </WhoAmIRowContainer>

            <WhoAmIRowContainer $reverseOnMobile>
              <FadeAnimation>
                <NextImage height={400} width={640} imgUrl="/systems.png" />
              </FadeAnimation>
              <Text content={t.whoami.text2} />
            </WhoAmIRowContainer>

            <WhoAmIRowContainer>
              <Text content={t.whoami.text3} />
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
              <Text content={t.whoami.text4} />
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
            <Title content={t.portfolio.title} />
            <SubTitle content={t.portfolio.subtitle} />
            <SlickContainer>
              {projects.map((project) => (
                <ZoomAnimation key={project.id}>
                  <ProjectCrd
                    title={t.projects[project.id]?.title ?? project.title}
                    description={t.projects[project.id]?.description ?? project.description}
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
            <Title
              content={hoveredSkill ? hoveredSkill.title : t.skills.title as string}
            />
            <Text
              content={
                hoveredSkill
                  ? hoveredSkill.content
                  : t.skills.defaultContent as string
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
                  onMouseEnter={() => setHoveredSkillAlt(skill.alt)}
                  onMouseLeave={() => setHoveredSkillAlt(null)}
                />
              </RotateAnimation>
            ))}
          </SkillsCardsContainer>
        </SkillsSectionContainer>
      </SkillsSection>

      <TestimonialsSection>
        <TestimonialsSectionContainer>
          <TestimonialsInfoContainer>
            <Title content={t.testimonials.title} />
            <SubTitle content={t.testimonials.subtitle} />
          </TestimonialsInfoContainer>
          <TestimonialsCarouselContainer>
            <FadeAnimation>
              <Slider {...slickSettings} centerMode lazyLoad="ondemand">
                {testimonials.map((testimonial, index) => (
                  <TestimonialCard
                    key={testimonial.name}
                    personName={testimonial.name}
                    personPhotoUrl={testimonial.image}
                    personRole={t.testimonials.items[index]?.role ?? testimonial.role}
                    testimonial={t.testimonials.items[index]?.testimonial ?? testimonial.testimonial}
                  />
                ))}
              </Slider>
            </FadeAnimation>
          </TestimonialsCarouselContainer>
        </TestimonialsSectionContainer>
      </TestimonialsSection>

      <PortfolioSection>
        <PortfolioSectionContainer id="enterprises">
          <Title content={t.enterprises.title} />
          <Text content={t.enterprises.text} />
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
              ariaLabel={t.enterprises.ariaLabel}
            />
          </CompaniesContainer>
        </PortfolioSectionContainer>
      </PortfolioSection>

      <ContactSection id="contact">
        <ContactSectionContainer>
          <Title content={t.contact.title} />
          <span>
            {t.contact.text}{" "}
            <span style={{ fontWeight: "bold" }}>{t.contact.ai}</span>
          </span>
          <ContactSectionButtonsContainer>
            <PrimaryButton
              ariaLabel={t.contact.button}
              onClick={sendWhatsAppMessage}
              title={t.contact.button}
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
