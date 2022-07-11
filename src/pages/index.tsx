import type { NextPage } from 'next'
import Head from 'next/head'
import { useTheme } from 'styled-components'
import { NextImage } from '../components/Next/NextImage'

import {
  CardsContainer,
  ContactSection,
  ContactSectionContainer,
  Container,
  IntroductionSection,
  IntroductionSectionContainer,
  IntroductionSectionContentContainer,
  IntroductionSectionContentInfoContainer,
  IntroductionSectionImageContainer,
  PortfolioSection,
  PortfolioSectionContainer,
  SkillsSection,
  SkillsSectionContainer,
  SocialContactContainer
} from '../styles'

import { MdEmail, MdPhone } from 'react-icons/md'
import { ContactCard } from '../components/Cards/ContactCard'
import { PortfolioCard } from '../components/Cards/PortfolioCard'
import { SkillCard } from '../components/Cards/SkillCard'
import { SocialIcons } from '../components/Elements/SocialIcons'
import { SubTitle } from '../components/Typography/SubTitle'
import { Text } from '../components/Typography/Text'
import { Title } from '../components/Typography/Title'
import { landingPages, skills, webSites, applications } from '../data/data'
import { RevealFade } from '../components/Animations/RevealFade'
import { RevealZoom } from '../components/Animations/RevealZoom'
const Home: NextPage = () => {


  const theme = useTheme()

  return (
    <Container style={{ marginBottom: 120 }}>
      <Head>
        <title> PabloSilvaDev | Portfólio </title>
        {/* @ts-ignore */}
        <meta charset="UTF-8" />
        <meta name="description" content="Landing pages de alta conversão e sites institucionais para o seu negócio." />
        <meta name="keywords" content="pablosilvadev pablo silva psd landing pages" />
        <meta name='author' content='Pablo Silva' />
      </Head>
      <IntroductionSection>
        <IntroductionSectionContainer id='whoami'>
          <Title
            content='Quem sou eu'
          />
          <IntroductionSectionContentContainer>
            <IntroductionSectionContentInfoContainer>
              <RevealFade>
                <SubTitle
                  content='Olá!'
                />
              </RevealFade>
              <RevealFade>
                <Text
                  content='Meu nome é Pablo Silva, sou programador com 2 anos de experiência na criação de sites e aplicativos utilzando tecnologias modernas e altamente performáticas que ajudarão você ou sua empresa a  desenvolver projetos para o mundo virtual. O meu foco é construir aplicações inteligentes que fazem o uso de componentes que reforçam um padrão de projeto.'
                />
              </RevealFade>
            </IntroductionSectionContentInfoContainer>
            <IntroductionSectionImageContainer>
              <RevealZoom>
                <NextImage
                  height={280}
                  width={280}
                  imgUrl='/profile.png'
                />
              </RevealZoom>
            </IntroductionSectionImageContainer>
          </IntroductionSectionContentContainer>
        </IntroductionSectionContainer>
      </IntroductionSection>
      <PortfolioSection>
        <PortfolioSectionContainer id='portfolio'>
          <Title
            content='Portfólio'
          />
          <SubTitle
            content='Aplicações web'
          />
          <CardsContainer id='applications'>
            {applications.map(application => (
              <RevealFade key={application.name}>
                <PortfolioCard
                  imageUrl={application.image}
                  imgWidth={560}
                  imgHeight={420}
                  title={application.name}
                  pageUrl={application.url}
                  techs={application.techs.map(tech =>
                    tech.substring(0).concat('.png'))}
                />
              </RevealFade>
            ))}
          </CardsContainer>
          <SubTitle
            content='Landing Pages'

          />
          <CardsContainer id='landingpages'>
            {landingPages.map(landing => (
              <RevealFade key={landing.name}>
                <PortfolioCard
                  imageUrl={landing.image}
                  imgWidth={560}
                  imgHeight={420}
                  title={landing.name}
                  pageUrl={landing.url}
                  techs={landing.techs.map(tech =>
                    tech.substring(0).concat('.png'))}
                />
              </RevealFade>
            ))}
          </CardsContainer>
          <SubTitle
            content='Websites'
          />
          <CardsContainer id='websites'>
            {webSites.map(webSite => (
              <RevealFade key={webSite.name}>
                <PortfolioCard
                  imageUrl={webSite.image}
                  imgWidth={560}
                  imgHeight={420}
                  title={webSite.name}
                  pageUrl={webSite.url}
                  techs={webSite.techs.map(tech =>
                    tech.substring(0).concat('.png'))}
                />
              </RevealFade>
            ))}
          </CardsContainer>
        </PortfolioSectionContainer>
      </PortfolioSection>

      <SkillsSection>
        <SkillsSectionContainer id='skills'>
          <Title
            content='Conhecimentos'
          />
          <CardsContainer>
            <RevealFade >
            {skills.map(skill => (
                <SkillCard
                key={skill.image}
                  imageUrl={skill.image}
                  imgHeight={160}
                  imgWidth={160}
                  content={skill.content}
                />
                ))}
                </RevealFade>
          </CardsContainer>
        </SkillsSectionContainer>

      </SkillsSection>
      <ContactSection>
        <ContactSectionContainer id='contact'>
          <RevealFade>
            <Title
              content='Contato'
            />
          </RevealFade>
          <RevealFade bottom>
            <ContactCard
              cardTitle='Se você ou sua empresa precisa desenvolver um website, uma plataforma, ou aplicação web, não hesite em me contatar. Será um prazer ajudá-lo.'
              email='pablolucio_@hotmail.com'
              emailIcon={
                <MdEmail
                  size={40}
                  color={theme.colors.secondary}
                />}
              phoneIcon={
                <MdPhone
                  size={40}
                  color={theme.colors.secondary}
                />}
              phone='(31) 985187963'
              cardClassName='contactCard glassEffect'
            >
              <SubTitle
                content='Redes'
              />
              <SocialContactContainer>
                <SocialIcons
                  instagramUrl='https://www.instagram.com/pablosilva.dev'
                  githubUrl='https://github.com/pablolucio97'
                  linkedinUrl='https://www.linkedin.com/in/pablo-silva-76b521156'
                  iconsSize='large'
                  containerClassName='socialContainer'
                />
              </SocialContactContainer>
            </ContactCard>
          </RevealFade>
        </ContactSectionContainer>
      </ContactSection>
    </Container>
  )
}

export default Home
