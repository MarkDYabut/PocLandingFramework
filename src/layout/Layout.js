import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import "./Layout.css"

const Container = styled.div`
    padding: 5rem;
    height: 100vh;
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

const Header = () => (
    <HeaderContainer>
        <HeaderLink to="/">index</HeaderLink>
        <HeaderLink to="/motion">motion</HeaderLink>
        <HeaderLink to="/baseline">baseline</HeaderLink>
        <button style={{position: "absolute", right: "7rem"}} onClick={refreshPage}>Click to reload!</button>
    </HeaderContainer>
)

export const Layout = ({ children }) => {
    return (
        <Container>
            <Header />
            {children}
        </Container>
    )
}
