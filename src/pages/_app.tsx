
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../styles/globalstyle'
import { theme } from '../themes/theme'
import Layout from '../layout'

function App({
  Component,
  pageProps: { ...pageProps }
}: AppProps): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <ChakraProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <GlobalStyle />
      </ChakraProvider>
    </ThemeProvider>
  )
}

export default App