//https://www.awwwards.com/
import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import styled, { keyframes } from "styled-components"
import { Layout } from "../layout/Layout"
import { ButtonStyled1 } from "../components/buttons"

const Container = styled.div`
  color:${props => props.theme.text};
  background: ${props => props.theme.background};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  align-items: center;
  opacity: 0.8;
`
const Marquee = (props, { children }) => {
  let marqueeVariants = {
    animate: {
      x: [0, -2000],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "reverse",
          duration: 10,
          ease: "linear",
        },
      },
    },
  };

  return (
    <div>
      <div className="marquee">
        <motion.div
          className="track"
          variants={marqueeVariants}
          animate="animate"
        >
          <h1>{props.marqueeText.repeat(5)}</h1>
          {children}
        </motion.div>
      </div>
    </div>
  )
}

const MyComponent1 = ({children}, props) => {
  console.log("MyComponent1")
  console.log(props)

  return (
    <>

    </>
  )
}

export default function BuildSomethingNew() {

  return (
    <Layout>
      <Container>
        <Marquee marqueeText={"build some new shit. "}>
        </Marquee>      
      </Container>
    </Layout>
  )
}