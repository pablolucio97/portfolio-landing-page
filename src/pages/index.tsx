import type { NextPage } from 'next'
import Head from 'next/head'
import { SubTitle } from '../components/Typography/SubTitle'
import { Title } from '../components/Typography/Title'
import { Text } from '../components/Typography/Text'
import {
  CardsContainer,
  Container,
  IntroductionSection,
  IntroductionSectionContainer,
  IntroductionSectionContentContainer,
  IntroductionSectionContentInfoContainer,
  IntroductionSectionImageContainer,
  PortfolioSection,
  PortfolioSectionContainer
} from '../styles'
import { NextImage } from '../components/Next/NextImage'
import { landingPages, webSites } from '../data/data'
import { PortfolioCard } from '../components/Cards/PortfolioCard'

const Home: NextPage = () => {

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
    </Container>
  )
}

export default Home
