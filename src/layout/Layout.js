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
    <HeaderContainer>
        <HeaderLink to="/">index</HeaderLink>
        <HeaderLink to="/motion">motion</HeaderLink>
        <HeaderLink to="/baseline">baseline</HeaderLink>
        <HeaderLink to="/ar2agility">ar2agility</HeaderLink>
        {children}
        <button style={{ position: "absolute", right: "7rem" }} onClick={refreshPage}>Click to reload!</button>
    </HeaderContainer>
)

export const Layout = ({ children }) => {
    const [currentTheme, setCurrentTheme] = useState("dark")
    console.log(currentTheme)

    return (
        <ThemeProvider theme={currentTheme === "dark" ? darkTheme : lightTheme}>
            <Container>
                <Header>
                    <button onClick={() => {
                        if (currentTheme === "dark") setCurrentTheme("light")
                        else setCurrentTheme("dark")
                    }}>Change Theme</button></Header>
                <ChildContainer>
                    {children}
                </ChildContainer>
            </Container>
        </ThemeProvider>
    )
}
