import React, { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { Link } from 'gatsby'
import { createGlobalStyle } from 'styled-components'

const Navbar2GlobalStyle = createGlobalStyle`
    body {
  margin: 0;
  background: #151616;
  font-family: roboto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}


:root {
  --bg:  #242526;
  --bg-accent: #484a4d;
  --text-color: #dadce1;
  --nav-size: 60px;
  --border: 1px solid #474a4d;
  --border-radius: 8px;
  --speed: 500ms; 
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

a {
  color: var(--text-color);
  text-decoration: none;;
}

/* Top Navigation Bar */

/* <nav> */
.navbar {
  height: var(--nav-size);
  background-color: var(--bg);
  padding: 0 1rem;
  border-bottom: var(--border);
}

/* <ul> */
.navbar-nav {
  max-width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
}

/* <li> */
.nav-item {
  width: calc(var(--nav-size) * 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Icon Button */
.icon-button {
  --button-size: calc(var(--nav-size) * 0.5);
  width: var(--button-size);
  height: var(--button-size);
  background-color: #484a4d;
  border-radius: 50%;
  padding: 5px;
  margin: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: filter 300ms;
}

.icon-button:hover {
  filter: brightness(1.2);
}

.icon-button svg { 
  fill: var(--text-color);
  width: 20px;
  height: 20px;
}


/* Dropdown Menu */

.dropdown {
  position: absolute;
  top: 58px;
  width: 300px;
  transform: translateX(-45%);
  background-color: var(--bg);
  border: var(--border);
  border-radius: var(--border-radius);
  padding: 1rem;
  overflow: hidden;
  transition: height var(--speed) ease;
}

.menu {
  width: 100%;
}

.menu-item {
  height: 50px;
  display: flex;
  align-items: center;
  border-radius: var(--border-radius);
  transition: background var(--speed);
  padding: 0.5rem;
}

.menu-item .icon-button {
  margin-right: 0.5rem;
}


.menu-item .icon-button:hover {
  filter: none;
}

.menu-item:hover {
  background-color: #525357;
}

.icon-right {
  margin-left: auto;
}

/* CSSTransition classes  */
.menu-primary-enter {
  position: absolute;
  transform: translateX(-110%);
}
.menu-primary-enter-active {
  transform: translateX(0%);
  transition: all var(--speed) ease;
}
.menu-primary-exit {
  position: absolute;
}
.menu-primary-exit-active {
  transform: translateX(-110%);
  transition: all var(--speed) ease;
}


.menu-secondary-enter {
  transform: translateX(110%);
}
.menu-secondary-enter-active {
  transform: translateX(0%);
  transition: all var(--speed) ease;
}
.menu-secondary-exit {

}
.menu-secondary-exit-active {
  transform: translateX(110%);
  transition: all var(--speed) ease;
}
`

const NavContainer = styled.div`
    padding-top: 1rem;
    padding-bottom: 5rem;
`

const Nav = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    /* height: 4rem; */

    /* box-shadow: 4px 4px 14px #000; */
    z-index: 1000;
    margin-bottom: 2rem;
    position: fixed;
    bottom: 4rem;
    width: 90%;
    left: 5%;
    border-radius: 10px;
    /* padding: 0.5rem calc((100vw - 1000px) / 2); */

`

export const Navbar1 = ({ children }) => {

    return (
        <NavContainer>
            <Nav>
                {children}
            </Nav>
        </NavContainer>
    )
}
