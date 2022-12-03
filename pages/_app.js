import '../styles/globals.css'
import styled, { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '../styles/global'
import { globalTheme } from '../styles/theme'
import Header from '../components/header/Header'
import TopBar from '../components/topbar/TopBar'
import Content from '../components/content/Content'


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  height: 100vh;
  padding: .8rem 1.4rem;
`

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={globalTheme}>
        <GlobalStyles />
        <Wrapper>
          <Header />
          <TopBar />
          <Content>
            <Component {...pageProps} />
          </Content>
        </Wrapper>
      </ThemeProvider>
    </>
  )
}

export default MyApp
