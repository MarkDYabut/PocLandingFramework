import React, { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { Link } from 'gatsby'

import "./Layout.css"

const Container = styled.div`
    padding: 5rem;
    height: 100vh;
`
const ChildContainer = styled.div`
    box-shadow: 4px 4px 14px #000;
    border-radius: 1rem;
    min-height: 100vh;
`

const HeaderLink = styled(Link)`
    margin: 1vw;
`

const HeaderContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 10vh;
    border: 1px dotted;
    background-color: #eee;
    margin-bottom: 1rem;
    border-radius: 10px;
    box-shadow: 4px 4px 14px #000;
    border-radius: 1rem;
`

const FooterContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 10vh;
    border: 1px dotted;
    background-color: #eee;
    margin-bottom: 1rem;
    border-radius: 10px;
    box-shadow: 4px 4px 14px #000;
    border-radius: 1rem;
    position: fixed;
    bottom: 0;
    left: 10%;
    width: 80%;
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
            <HeaderLink to="/">index</HeaderLink>
            <HeaderLink to="/motion">motion</HeaderLink>
            <HeaderLink to="/baseline">baseline</HeaderLink>
            <HeaderLink to="/ar2agility">ar2agility</HeaderLink>
            <HeaderLink to="/satori">satori</HeaderLink>
            <HeaderLink to="/award">award</HeaderLink>
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
    const [innerWidth, setInnerWidth] = useState(window.innerWidth)
    const [innerHeight, setInnerHeight] = useState(window.innerHeight)
    window.addEventListener('resize', () => {
        setInnerWidth(window.innerWidth)
        setInnerHeight(window.innerHeight)
    })
    return (
        <ThemeProvider theme={currentTheme === "dark" ? darkTheme : lightTheme}>
            <Container>
                <Header>

                </Header>
                <ChildContainer>
                    {children}
                </ChildContainer>
                <Footer>
                    <span style={{ position: "absolute", left: "2rem" }}>
                        Width:{innerWidth} 💻 Height:{innerHeight}
                    </span>
                    <button onClick={() => {
                        if (currentTheme === "dark") setCurrentTheme("light")
                        else setCurrentTheme("dark")
                    }}>Change Theme</button>
                    <button onClick={refreshPage}>Reload page</button>
                    <button onClick={() => { window.scrollTo({top: 0, left: 0, behavior: 'smooth'}); }}>Scroll to top</button>
                    <button onClick={() => { window.scrollTo({bottom: window.scroll, left: 0, behavior: 'smooth'}); }}>Scroll to bottom</button>
                </Footer>
            </Container>
        </ThemeProvider>
    )
}
