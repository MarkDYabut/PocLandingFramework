import React, { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { Link } from 'gatsby'
import { createGlobalStyle } from 'styled-components'

const NavContainer = styled.div`
    padding-top: 1rem;
    padding-bottom: 5rem;
`

const Nav = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 4rem;

    /* box-shadow: 4px 4px 14px #000; */
    z-index: 1000;
    margin-bottom: 2rem;
    position: fixed;
    top: 1rem;
    width: 90%;
    left: 5%;
    border-radius: 10px;
    /* padding: 0.5rem calc((100vw - 1000px) / 2); */

`



export const Navbar1 = ({children}) => {

    return (
        <NavContainer>
            <Nav>
                {children}
            </Nav>
        </NavContainer>
    )
}