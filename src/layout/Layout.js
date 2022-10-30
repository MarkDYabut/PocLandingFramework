import React, { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { Link } from 'gatsby'
import { createGlobalStyle } from 'styled-components'

// import "./Layout.css"

const GlobalStyle = createGlobalStyle`
* {
    @import url("//fonts.googleapis.com/css?family=Open+Sans:300,400,600,700");

body{
    font-family: 'Open Sans', sans-serif;
    /* background-image: url("https://media3.giphy.com/media/Byour3OgR0nWnRR6Tc/giphy.gif?cid=ecf05e4722ks8wa4i6sg1mgbq786bsyhbuhcc0lifqbfua8g&rid=giphy.gif&ct=g"); */
    /* background-image: url("https://media4.giphy.com/media/Cv7wrQjYcd6hO/giphy.gif?cid=790b76111e1eb9ac58c668894944df3fc1437ec2552592ae&rid=giphy.gif&ct=g"); */
    background-image: url("https://media0.giphy.com/media/Ohv997ZtdeX0rpfVMm/giphy.gif?cid=790b76115a7b05f426d5e21dd3ad7023685b6271f9f1fa12&rid=giphy.gif&ct=g");
    background-repeat:  repeat;
    background-size: cover;
}

.box {
    width: 25rem;
    height: 25rem;
    background-color: aquamarine;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.boxItem {
    width: 0.5rem;
    height: 0.5rem;
    background-color: aliceblue;
    padding: 2rem;
    list-style: none;
    margin: 0.5rem;
}

.marquee {
  position: relative;
  width: 100vw;
  max-width: 100%;
  height: 206px;
  overflow-x: hidden;
}

.track {
  position: absolute;
  white-space: nowrap;
}

.track > h1 {
  margin: 20px 0;
  font-size: 8rem;
  font-family: Antonio;
  -webkit-text-fill-color: rgba(255, 255, 255, 0);
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: #f4955c;
  text-transform: uppercase;
}

/* CSS */
.button-17 {
  align-items: center;
  appearance: none;
  background-color: #fff;
  border-radius: 24px;
  border-style: none;
  box-shadow: rgba(0, 0, 0, .2) 0 3px 5px -1px,rgba(0, 0, 0, .14) 0 6px 10px 0,rgba(0, 0, 0, .12) 0 1px 18px 0;
  box-sizing: border-box;
  color: #3c4043;
  cursor: pointer;
  display: inline-flex;
  fill: currentcolor;
  font-family: "Google Sans",Roboto,Arial,sans-serif;
  font-size: 14px;
  font-weight: 500;
  height: 48px;
  justify-content: center;
  letter-spacing: .25px;
  line-height: normal;
  max-width: 100%;
  overflow: visible;
  padding: 2px 24px;
  position: relative;
  text-align: center;
  text-transform: none;
  transition: box-shadow 280ms cubic-bezier(.4, 0, .2, 1),opacity 15ms linear 30ms,transform 270ms cubic-bezier(0, 0, .2, 1) 0ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: auto;
  will-change: transform,opacity;
  z-index: 0;
}

.button-17:hover {
  background: #F6F9FE;
  color: #174ea6;
}

.button-17:active {
  box-shadow: 0 4px 4px 0 rgb(60 64 67 / 30%), 0 8px 12px 6px rgb(60 64 67 / 15%);
  outline: none;
}

.button-17:focus {
  outline: none;
  border: 2px solid #4285f4;
}

.button-17:not(:disabled) {
  box-shadow: rgba(60, 64, 67, .3) 0 1px 3px 0, rgba(60, 64, 67, .15) 0 4px 8px 3px;
}

.button-17:not(:disabled):hover {
  box-shadow: rgba(60, 64, 67, .3) 0 2px 3px 0, rgba(60, 64, 67, .15) 0 6px 10px 4px;
}

.button-17:not(:disabled):focus {
  box-shadow: rgba(60, 64, 67, .3) 0 1px 3px 0, rgba(60, 64, 67, .15) 0 4px 8px 3px;
}

.button-17:not(:disabled):active {
  box-shadow: rgba(60, 64, 67, .3) 0 4px 4px 0, rgba(60, 64, 67, .15) 0 8px 12px 6px;
}

.button-17:disabled {
  box-shadow: rgba(60, 64, 67, .3) 0 1px 3px 0, rgba(60, 64, 67, .15) 0 4px 8px 3px;
}
  }
`

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
            <HeaderLink to="/aaHome">aaHome</HeaderLink>
        </HeaderContainer>

    </>
)

const Footer = ({ children }) => (
    <>
        <FooterContainer>
            {children}
            <button onClick={refreshPage}>Click to reload!</button>
        </FooterContainer>
    </>
)

export const Layout = ({ children }) => {
    const [currentTheme, setCurrentTheme] = useState("dark")
    const [innerWidth, setInnerWidth] = useState(window.innerWidth)
    const [innerHeight, setInnerHeight] = useState(window.innerHeight)
    window.addEventListener('resize', () => {
        setInnerWidth(window.innerWidth)
        setInnerHeight(window.innerHeight)
    })
    return (
        <>
            <GlobalStyle />
            <ThemeProvider theme={currentTheme === "dark" ? darkTheme : lightTheme}>
                <Container>
                    <Header>
                    </Header>
                    <ChildContainer>
                        {children}
                    </ChildContainer>
                    <Footer>
                        <span style={{ position: "absolute", left: "2rem" }}>
                            Width:{innerWidth} : Height:{innerHeight}
                        </span>
                        <button onClick={() => {
                            if (currentTheme === "dark") setCurrentTheme("light")
                            else setCurrentTheme("dark")
                        }}>Change Theme</button>
                    </Footer>
                </Container>
            </ThemeProvider>
        </>
    )
}
