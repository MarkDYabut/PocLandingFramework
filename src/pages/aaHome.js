import React, { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import styled from "styled-components"
import { Layout } from "../layout/aaLayout"
import { Link } from 'gatsby'
import { Navbar1 } from "../components/nav/navbar"
import { RandomElevateMotionOnScroll, RandomMotionOnScroll } from "../components/motion/Random"


const colors1 = ["#0d1b2a", "#1b263b", "#415a77", "#778da9"]
const colors2 = ["#a3b18a", "#588157", "#3a5a40", "#344e41"]

const StyledSection = styled.section`
  background: ${props => props.theme.background};
  /* display: grid; */
  text-align: center;
  /* place-items: center; */
  /* align-content: center; */
  min-height: 100vh;
  padding: 4rem;
`

const NavLink = styled(Link)`
    margin: 0.1rem;
    text-decoration: none;
    background-color: white;
    color: #333333;
    padding: 1rem 3rem 1rem 3rem;
    border-top: 1px solid #CCCCCC;
    border-right: 1px solid #CCCCCC;
    border-bottom: 1px solid #CCCCCC;
    border-left: 1px solid #CCCCCC;
    border-radius: 1rem;

    &:hover, &:focus {
        color: grey;
        background-color: #333333;
    }
`

const StyledNavButton = styled.span`
    margin: 0.1rem;
    text-decoration: none;
    background-color: white;
    color: #333333;
    padding: 0.5rem 1.5rem 0.5rem 1.5rem;
    @media (max-width:500px) {
      padding: 0.1rem 0.3rem 0.1rem 0.3rem;
    }
    border-top: 1px solid #CCCCCC;
    border-right: 1px solid #CCCCCC;
    border-bottom: 1px solid #CCCCCC;
    border-left: 1px solid #CCCCCC;
    border-radius: 1rem;
    z-index: 1;
    &:hover, &:focus {
        color: grey;
        background-color: #333333;
        cursor: pointer;
    }
`

const MyComponent1 = (props) => {
  console.log("MyComponent1")
  console.log(props)
  const [isAnimating, setIsAnimating] = useState(false)

  return (
    <>

    </>
  )
}

const NavScrollToButton = ({ children, onClick }) => {

  return (
    <StyledNavButton
      onClick={onClick}
    >
      {children}
    </StyledNavButton>
  )
}

// const 

export default function BuildSomethingNew() {
  console.log("Hello World")

  const home = useRef(null)
  const solutions = useRef(null)
  const vision = useRef(null)
  const contact = useRef(null)

  const scrollToSection = (elementRef) => {
    console.log(elementRef)
    window.scrollTo({
      top: elementRef.current.offsetTop - 100,
      left: 0,
      behavior: 'smooth'
    })
  }


  return (
    <Layout>
      <Navbar1>
        <NavScrollToButton type="submit" onClick={() => { scrollToSection(home) }}>Home</NavScrollToButton>
        <NavScrollToButton type="submit" onClick={() => { scrollToSection(vision) }}>Vision</NavScrollToButton>
        <NavScrollToButton type="submit" onClick={() => { scrollToSection(solutions) }}>Solutions</NavScrollToButton>
        <NavScrollToButton type="submit" onClick={() => { scrollToSection(contact) }}>Contact</NavScrollToButton>
      </Navbar1>
      <Home refer={home} />
      <Vision refer={vision} />
      <Solutions refer={solutions} />
      <Contact refer={contact} />
    </Layout >
  )
}

const StyledImg = styled.img`
  max-width: 60vw;
  padding: 1rem;
  margin: auto;
  display: block;
  z-index: 0;
  border-radius: 10%;
`

const Home = (props) => (
  <div ref={props.refer}>
    <StyledSection>
      <h1>A New Era Of Automotive Styling</h1>
      <p>...</p>
      <RandomMotionOnScroll>
        <StyledImg src="aa/0001.webp" />
      </RandomMotionOnScroll>
      <RandomElevateMotionOnScroll>
        <StyledImg src="aa/0002.webp" />
      </RandomElevateMotionOnScroll>
      <RandomMotionOnScroll>
        <StyledImg src="aa/0003.webp" />
      </RandomMotionOnScroll>
    </StyledSection>
  </div>
)

const Vision = (props) => (
  <div ref={props.refer}>
    <StyledSection>
      <h1>Vision</h1>
      <p>Taking all the guess work out of designing your dream vehicle.</p>
      <p>Modifications made simple.</p>
      <RandomMotionOnScroll>
        <StyledImg src="aa/0004.webp" />
      </RandomMotionOnScroll>
      <RandomMotionOnScroll>
        <StyledImg src="aa/0005.webp" />
      </RandomMotionOnScroll>
      <RandomElevateMotionOnScroll>
        <StyledImg src="aa/0006.webp" />
      </RandomElevateMotionOnScroll>
      <RandomMotionOnScroll>
        <StyledImg src="aa/0007.webp" />
      </RandomMotionOnScroll>
      <RandomElevateMotionOnScroll>
        <StyledImg src="aa/0008.webp" />
      </RandomElevateMotionOnScroll>
    </StyledSection>
  </div>
)

const Solutions = (props) => (
  <div ref={props.refer}>
    <StyledSection>
      <h1>Solutions</h1>
      <p>Protection</p>
      <p>Exterior</p>
      <p>Interior</p>
      <p>Buy&Sell</p>
    <RandomMotionOnScroll>
      <StyledImg src="aa/0014.webp" />
    </RandomMotionOnScroll>
    <RandomMotionOnScroll>
      <StyledImg src="aa/0015.webp" />
    </RandomMotionOnScroll>
    <RandomElevateMotionOnScroll>
      <StyledImg src="aa/0016.webp" />
    </RandomElevateMotionOnScroll>
  </StyledSection>
  </div>
)

const Contact = (props) => (
  <div ref={props.refer}>
    <StyledSection>
      <h1>Contact</h1>
      <p>Reach out and collaborate</p>
    <RandomMotionOnScroll>
      <StyledImg src="aa/0017.webp" />
    </RandomMotionOnScroll>
    <RandomElevateMotionOnScroll>
      <StyledImg src="aa/0018.webp" />
    </RandomElevateMotionOnScroll>
    <RandomMotionOnScroll>
      <StyledImg src="aa/0019.webp" />
    </RandomMotionOnScroll>
    <RandomElevateMotionOnScroll>
      <StyledImg src="aa/0020.webp" />
    </RandomElevateMotionOnScroll>
    </StyledSection>
  </div>
)