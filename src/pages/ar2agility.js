//https://www.youtube.com/watch?v=UuNEzq4Fs-0&list=TLPQMjgxMDIwMjKaMvrykerePQ&index=2
//https://getcssscan.com/css-buttons-examples
import React, { useState } from "react"
import { motion } from "framer-motion"
import styled, { keyframes } from "styled-components"
import { Layout } from "../layout/Layout"
import { ButtonStyled1 } from "../components/buttons"

const Container = styled.div`
  color:${props => props.theme.text};
  background: ${props => props.theme.background};
  min-height: 100vh;
  border-radius: 1rem;
`

const CenteredDiv = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const hue = keyframes`
 from {
   -webkit-filter: hue-rotate(0deg);
 }
 to {
   -webkit-filter: hue-rotate(-360deg);
 }
`;

const StyledHeaderTitle = styled.h1`
  color: #f35626;
  background-image: -webkit-linear-gradient(92deg, #f35626, #feab3a);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-animation: ${hue} 10s infinite linear;
  font-feature-settings: "kern";
  font-size: 4rem;
  font-weight: 400;
  line-height: 5rem;
  overflow-wrap: break-word;
  text-align: center;
  text-rendering: optimizelegibility;
  -moz-osx-font-smoothing: grayscale;
`
const StyledImage = styled.img`
  max-width:100%;
  max-height:100%;
  width: 100%;
  background-size: 100%;
  box-shadow: 4px 4px 14px #000;
  border-radius: 1rem;
  margin-bottom: 200px;
  margin-top: 50px;
`

const SpacedDiv = styled.div`
  text-align: center;
  margin-bottom: 30px;
`

const MotionStyledImage = (props) => {
  let initialX = -200
  if (Math.floor(Math.random() * 2) == 1) initialX = 200
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: initialX,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        transition: { duration: 2 }
      }}
    >
      <StyledImage src={props.src} />
    </motion.div>
  )
}

const TripleImageWrapper = styled.div`
  display: flex;
  grid-gap:10px;
  flex-wrap: wrap;
`

const TripleImage = styled.img`
  float: i;
  max-width:30%;
  max-height:30%;
  box-shadow: 4px 4px 14px #000;
  margin-bottom: 200px;
`

const MotionStyledDiv = ({ children }, props) => {
  let initialX = -200
  let random = Math.floor(Math.random() * 2)
  if (random == 1) initialX = 200
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: initialX,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        transition: { duration: 3, delay: random / 2 }
      }}
    ><SpacedDiv>
        {children}
      </SpacedDiv>
    </motion.div>
  )
}

const MotionStyledHeader = ({ children }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 100,
        x: 0,
        scale: 0.9,
      }}
      whileInView={{
        scale: 1,
        opacity: 1,
        y: 0,
        transition: { duration: 2 }
      }}
    >
      <StyledHeaderTitle>
        <hr />
        {children}
      </StyledHeaderTitle>
    </motion.div>
  )
}

const MyComponent1 = (props) => {
  console.log("MyComponent1")
  console.log(props)

  return (
    <>
      <MotionStyledHeader> Linear is a better way to build products</MotionStyledHeader>
      <MotionStyledDiv><p>Meet the new standard for modern software development.<br />Streamline issues, sprints, and product roadmaps.</p></MotionStyledDiv>
      <MotionStyledDiv><ButtonStyled1>Get started</ButtonStyled1></MotionStyledDiv>
      <MotionStyledImage src="https://linear.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero%404x.15e3a396.jpg&w=3840&q=75" direction="right" />
      <MotionStyledDiv><p>Powering the world’s best product teams.<br />From next-gen startups to established enterprises.</p></MotionStyledDiv>
      <MotionStyledHeader>Issue tracking <br /> you’ll enjoy using</MotionStyledHeader>
      <MotionStyledDiv><p>Designed to the last pixel and engineered with unforgiving precision, <br />Linear combines UI elegance with world-class performance.</p></MotionStyledDiv>
      <MotionStyledDiv><p>Plan visually, collaborate in cross-team <br /> projects, and make better decisions with <br />progress insights and project updates.</p></MotionStyledDiv>
      <MotionStyledImage src="assets/images/Sensi.png" />
      <MotionStyledHeader>Unlike any tool<br /> you’ve used before</MotionStyledHeader>
      <MotionStyledDiv><p>Designed to the last pixel and engineered with unforgiving precision, <br />Linear combines UI elegance with world-class performance.</p></MotionStyledDiv>
      <MotionStyledImage src="assets/images/Sensi2.png" />
      <MotionStyledHeader>Set direction <br /> with Roadmaps</MotionStyledHeader>
      <MotionStyledDiv><p>Plan visually, collaborate in cross-team <br /> projects, and make better decisions with <br />progress insights and project updates.</p></MotionStyledDiv>
      <MotionStyledImage src="assets/images/Sensi2.png" />
      <MotionStyledHeader>Issue tracking <br /> you’ll enjoy using</MotionStyledHeader>
      <MotionStyledDiv><p>Designed to the last pixel and engineered with unforgiving precision, <br />Linear combines UI elegance with world-class performance.</p></MotionStyledDiv>
      <MotionStyledDiv><p>Plan visually, collaborate in cross-team <br /> projects, and make better decisions with <br />progress insights and project updates.</p></MotionStyledDiv>
      <MotionStyledDiv><p>Designed to the last pixel and engineered with unforgiving precision, <br />Linear combines UI elegance with world-class performance.</p></MotionStyledDiv>
      <MotionStyledImage src="https://linear.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero%404x.15e3a396.jpg&w=3840&q=75" direction="right" />
      <MotionStyledDiv><p>Powering the world’s best product teams.<br />From next-gen startups to established enterprises.</p></MotionStyledDiv>

      {/* <TripleImageWrapper>
        <TripleImage src="assets/images/Sensi.png" />
        <TripleImage src="assets/images/Sensi2.png" />
        <TripleImage src="assets/images/Sensi3.png" />
      </TripleImageWrapper> */}
    </>
  )
}

export default function BuildSomethingNew() {
  console.log("Hello World")

  return (
    <Layout>
      <Container>
        <CenteredDiv>
          <MyComponent1 />
        </CenteredDiv>
      </Container>
    </Layout>
  )
}