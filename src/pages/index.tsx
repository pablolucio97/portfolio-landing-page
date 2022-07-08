import type { NextPage } from 'next'
import Head from 'next/head'
import { SubTitle } from '../components/Typography/SubTitle'
import { Title } from '../components/Typography/Title'
import { Text } from '../components/Typography/Text'
import {
  Container,
  IntroductionSection,
  IntroductionSectionContainer,
  IntroductionSectionContentContainer,
  IntroductionSectionContentInfoContainer,
  IntroductionSectionImageContainer
} from '../styles'
import { NextImage } from '../components/Next/NextImage'

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
        <IntroductionSectionContainer>
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
    </Container>
  )
}

export default Home
