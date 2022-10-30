import React, { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { Link } from 'gatsby'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {    
    html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video { margin: 0; padding: 0; border: 0; font-size: 100%; vertical-align: baseline; } HTML5 display-role reset for older browsers article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section { display: block; } body { line-height: 1; } ol, ul { list-style: none; } blockquote, q { quotes: none; } blockquote:before, blockquote:after, q:before, q:after { content: ''; content: none; } table { border-collapse: collapse; border-spacing: 0; }
  }
`

const HeaderLink = styled(Link)`
    margin: 1vw;
`

const HeaderContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 10vh;
    /* border: 1px dotted; */
    box-shadow: 4px 4px 14px #000;
    margin-bottom: 1rem;
`

const FooterContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 10vh;
    border: 1px dotted;
    margin-bottom: 1rem;
    border-radius: 10px;
    box-shadow: 4px 4px 14px #000;
    border-radius: 1rem;
    position: fixed;
    bottom: 0;
    left: 10%;
    width: 80%;
`

const Container = styled.div`
  color:${props => props.theme.text};
  background: ${props => props.theme.background};
  min-height: 100vh;
  @font-face {
    font-family: 'open sans';
    src: url("//fonts.googleapis.com/css?family=Open+Sans:300,400,600,700");
    font-style: normal;
  }
`

const refreshPage = () => {
    window.location.reload(false)
}

const colors = ["#0d1b2a", "#1b263b", "#415a77", "#778da9", "e0e1dd"]

const darkTheme = {
    background: "radial-gradient(ellipse 80% 50% at 50% -20%, #000, #0d1b2a)",
    text: "#fff",
}

const lightTheme = {
    background: "radial-gradient(ellipse 80% 50% at 50% -20%, #fff, #e0e1dd)",
    text: "#000",
}

const Header = ({ children }) => (
    <>
        <HeaderContainer>
            <HeaderLink to="/aaHome">aaHome</HeaderLink>
        </HeaderContainer>
    </>
)

const Footer = ({ children }) => (
    <>
        <FooterContainer>
            {children}
        </FooterContainer>
    </>
)

export const Layout = ({ children }) => {
    const [currentTheme, setCurrentTheme] = useState("light")
    return (
        <>
            <GlobalStyle />
            <ThemeProvider theme={currentTheme === "dark" ? darkTheme : lightTheme}>
                <Container>
                    <Header />
                    {children}
                    <Footer>
                        <button onClick={() => {
                            if (currentTheme === "dark") setCurrentTheme("light")
                            else setCurrentTheme("dark")
                        }}>Change Theme</button>
                        <button onClick={refreshPage}>Click to reload!</button>
                    </Footer>
                </Container>
            </ThemeProvider>
        </>
    )
}
