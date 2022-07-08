import type { NextPage } from 'next'
import Head from 'next/head'
import { Container } from '../styles'

const Home: NextPage = () => {

  return (
    <Container style={{marginBottom: 120}}>
      <Head>
        <title> MyPage | Home</title>
        {/* @ts-ignore */}
        <meta charset="UTF-8" />
        <meta name="description" content="Landing pages de alta conversão e sites institucionais para o seu negócio." />
        <meta name="keywords" content="pablosilvadev pablo silva psd landing pages" />
        <meta name='author' content='Pablo Silva' />
        <meta name="theme-color" content="#000000" />
      </Head>
    </Container>
  )
}

export default Home
