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

import { landingPages, skills, webSites } from '../data/data'
import { PortfolioCard } from '../components/Cards/PortfolioCard'
import { SkillCard } from '../components/Cards/SkillCard'
import { ContactCard } from '../components/Cards/ContactCard'
import { MdEmail, MdPhone, } from 'react-icons/md'
import { SocialIcons } from '../components/Elements/SocialIcons'
import { SubTitle } from '../components/Typography/SubTitle'
import { Title } from '../components/Typography/Title'
import { Text } from '../components/Typography/Text'
const Home: NextPage = () => {


  const theme = useTheme()

  return (
    <Container style={{ marginBottom: 120 }}>
      <Head>
        <title> PabloSilvaDev | Portfólio</title>
        {/* @ts-ignore */}
        <meta charset="UTF-8" />
        <meta name="description" content="Landing pages de alta conversão e sites institucionais para o seu negócio." />
        <meta name="keywords" content="pablosilvadev pablo silva psd landing pages" />
        <meta name='author' content='Pablo Silva' />
      </Head>
      <PortfolioSection>
        <PortfolioSectionContainer id='portfolio'>
          <Title
            content='Portfólio'
          />
          <SubTitle
            content='Landing Pages'
          />
          <CardsContainer>
            {landingPages.map(landing => (
              <PortfolioCard
                key={landing.name}
                imageUrl={landing.image}
                imgWidth={560}
                imgHeight={420}
                title={landing.name}
                pageUrl={landing.url}
              />
            ))}
          </CardsContainer>
          <SubTitle
            content='Websites'
          />
          <CardsContainer>
            {webSites.map(webSite => (
              <PortfolioCard
                key={webSite.name}
                imageUrl={webSite.image}
                imgWidth={560}
                imgHeight={420}
                title={webSite.name}
                pageUrl={webSite.url}
              />
            ))}
          </CardsContainer>
        </PortfolioSectionContainer>
      </PortfolioSection>
      <IntroductionSection>
        <IntroductionSectionContainer id='whoami'>
          <Title
            content='Quem sou eu'
          />
          <IntroductionSectionContentContainer>
            <IntroductionSectionContentInfoContainer>
              <SubTitle
                content='Olá!'
              />
              <Text
                content='Meu nome é Pablo Silva, sou programador com 2 anos de experiência na criação de sites e aplicativos utilzando tecnologias modernas e altamente performáticas que ajudarão você ou sua empresa a  desenvolver projetos para o mundo virtual. O meu foco é construir aplicações inteligentes que fazem o uso de componentes que reforçam um padrão de projeto.'
              />
            </IntroductionSectionContentInfoContainer>
            <IntroductionSectionImageContainer>
              <NextImage
                height={280}
                width={280}
                imgUrl='/profile.png'
              />
            </IntroductionSectionImageContainer>
          </IntroductionSectionContentContainer>
        </IntroductionSectionContainer>
      </IntroductionSection>
      <SkillsSection>
        <SkillsSectionContainer>
          <Title
            content='Conhecimentos'
          />
          <CardsContainer>
            {skills.map(skill => (
              <SkillCard
                key={skill.image}
                imageUrl={skill.image}
                imgHeight={160}
                imgWidth={160}
                content={skill.content}
              />
            ))}
          </CardsContainer>
        </SkillsSectionContainer>

      </SkillsSection>
      <ContactSection>
        <ContactSectionContainer>
          <Title
            content='Contato'
          />
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
        </ContactSectionContainer>
      </ContactSection>
    </Container>
  )
}

export default Home
