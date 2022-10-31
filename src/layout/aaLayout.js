import React, { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { Link } from 'gatsby'
import { createGlobalStyle } from 'styled-components'
import { Navbar1 } from '../components/nav/navbar'

const GlobalStyle = createGlobalStyle`
    * {    
        margin: 0;
        padding: 0;  
        font-family: 'Courier New', Courier, monospace;
        font-style: italic;
    }
`

const FooterContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    box-shadow: 4px 4px 14px #000;
    height: 4rem;
    position: fixed;
    bottom: 1rem;
    border-radius: 1rem;
    left: 10%;
    width: 80%;
`

const Container = styled.div`
  color:${props => props.theme.text};
  background: ${props => props.theme.background};
  min-height: 100vh;
  font: 100;
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
    background: "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(32,62,74,1) 67%)",
    text: "#fff",
}

const lightTheme = {
    background: "linear-gradient(90deg, rgba(32,62,74,1) 0%, rgba(207,207,207,1) 100%)",
    text: "#000",
}

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
            <ThemeProvider theme={currentTheme === "dark" ? darkTheme : lightTheme}>
                <GlobalStyle />
                <Container>
                    <Navbar1 />
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
