import React, { useState, useEffect, useRef } from 'react';
import styled, { ThemeProvider } from 'styled-components'
import { Link } from 'gatsby'
import { createGlobalStyle } from 'styled-components'
import { CSSTransition } from 'react-transition-group';


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

export const Navbar2 = (props) => {

  return (
    <>
      <Navbar2GlobalStyle />
      <Navbar>
        <NavItem icon={"🏎️"} />
        <NavItem icon={"🔔"} />
        <NavItem icon={"Ⓜ️"} />
        <NavItem icon={"⬇️"}>
        {/* <NavItem icon={<img src="icons/plus.svg" alt="plus" />} />
        <NavItem icon={<img src="icons/bell.svg" alt="bell" />} />
        <NavItem icon={<img src="icons/messenger.svg" alt="messenger" />} />
        <NavItem icon={<img src="icons/caret.svg" alt="caret" />}> */}
          <DropdownMenu></DropdownMenu>
        </NavItem>
      </Navbar>
    </>
  )
}

const Navbar = (props) => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">{props.children}</ul>
    </nav>
  );
}

const NavItem = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item">
      <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
        {props.icon}
      </a>

      {open && props.children}
    </li>
  );
}

const DropdownMenu = () => {
  const [activeMenu, setActiveMenu] = useState('main');
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    console.log("DropdownMenu")
    console.log(activeMenu)
    console.log(menuHeight)
    console.log(dropdownRef)
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
  }, [])

  const calcHeight = (el) => {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  const DropdownItem = (props) => {
    return (
      <a href="#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </a>
    );
  }

  return (
    <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>

      <CSSTransition
        in={activeMenu === 'main'}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem
            leftIcon="🏠"
          >
            Home
          </DropdownItem>
          <DropdownItem
            leftIcon="⚙️"
            rightIcon="➡️"
            goToMenu="solutions">
            Solutions
          </DropdownItem>
          <DropdownItem
            leftIcon="🤍"
            rightIcon="➡️"
            goToMenu="about">
            About Us
          </DropdownItem>

        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'solutions'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main" rightIcon="⬅️" leftIcon={"⚙️"}>
            <h2>Solutions</h2>
          </DropdownItem>
          <DropdownItem rightIcon="➡️" leftIcon={"🛠️"}>Protection</DropdownItem>
          <DropdownItem rightIcon="➡️" leftIcon={"🛠️"}>Exterior</DropdownItem>
          <DropdownItem rightIcon="➡️" leftIcon={"🛠️"}>Interior</DropdownItem>
          <DropdownItem rightIcon="➡️" leftIcon={"🛠️"}>Buy&Sell</DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'about'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main" rightIcon="⬅️" leftIcon={"🤍"}>
            <h2>About Us</h2>
          </DropdownItem>
          <DropdownItem rightIcon="➡️" leftIcon="👀">Our Vision</DropdownItem>
          <DropdownItem rightIcon="➡️" leftIcon="🧾">Our History</DropdownItem>
          <DropdownItem rightIcon="➡️" leftIcon="📞">Contact Us</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
}