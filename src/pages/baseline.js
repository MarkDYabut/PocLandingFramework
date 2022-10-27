import React, { useState } from "react"
import { motion } from "framer-motion"
import styled, { withTheme } from "styled-components"
import { Layout } from "../layout/Layout"

const colors = ["#a3b18a", "#588157", "#3a5a40", "#344e41"]
const gifs = [
  "https://media4.giphy.com/media/stldzV8ekrpLCwctTY/200w.webp?cid=ecf05e47f0bxouer0pt9j4va88gut8hg7jhubavkgxg9bm5j&rid=200w.webp&ct=g",
  "https://media.giphy.com/media/BJLcRLl7zFSwFXYsCq/giphy.gif",
  "https://media4.giphy.com/media/A8WtEEVaoj1VVqE0I1/200w.webp?cid=ecf05e47474q039zbhj36zgu50301omrf5ppx0iytwvl7nvq&rid=200w.webp&ct=g",
  "https://media3.giphy.com/media/zFFE3LH54mZZWKBu0E/200w.webp?cid=ecf05e47474q039zbhj36zgu50301omrf5ppx0iytwvl7nvq&rid=200w.webp&ct=g",
  "https://media2.giphy.com/media/tjvh3WAtlcCisJ9Njy/200w.webp?cid=ecf05e47f0bxouer0pt9j4va88gut8hg7jhubavkgxg9bm5j&rid=200w.webp&ct=g"
]
let count = 0;

const StyledBody = styled.body`
  color: #ffffff;
  font-family: sans-serif;
  padding: 0;
  margin: 0;
`

const StyledSection = styled.section`
  background-color: ${colors[Math.floor(Math.random() * 3)]};
  display: grid;
  place-items: center;
  align-content: center;
  min-height: 100vh;
  padding: 4rem;
`

const StyledCard = styled.div`
  width: 25rem;
  height: 25rem;
  background-image: url("https://media.giphy.com/media/BJLcRLl7zFSwFXYsCq/giphy.gif");
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  border-radius: 10%;
`

const MotionSection = ({ children }) => {
  count++
  if (count === 4) count = 0
  return (
    <StyledSection style={{ backgroundColor: `${colors[count]}` }}>
      <motion.div
        initial={{
          opacity: 0,
          x: -200,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: { duration: 2}
        }}
      >
        {children}
        <br /><br /><br />
        <motion.div
          initial={{
            opacity: 0,
            x: 0,
            rotate: 180,
          }}
          whileInView={{
            opacity: [1, 1, 1, 1],
            y: [30, 150, 30, 0],
            rotate: [180, 0, 0, 0],
            transition: { duration: 2}
          }}
        >
          <StyledCard style={{ backgroundImage: `url(${gifs[count]})` }} />
        </motion.div>
      </motion.div>
    </StyledSection>
  )
}

const MyComponent1 = (props) => {
  console.log("MyComponent")
  console.log(props)

  return (
    <>
    </>
  )
}

export default function Home() {
  console.log("Hello World")

  return (
    <Layout>
      <StyledBody>
        <MotionSection><ContentHero /></MotionSection>
        <MotionSection><ContentOurPhilosophy /></MotionSection>
        <MotionSection><ContentLoanProducts /></MotionSection>
        <MotionSection><ContentFixAndFlip /></MotionSection>
        <MotionSection><ContentConstruction /></MotionSection>
        <MotionSection><ContentRental /></MotionSection>
      </StyledBody>
    </Layout>
  )
}

const ContentHero = () => (
  <>
    <h1>Real Estate</h1>
    <h1>Loans</h1>
    <h1>Made Simple.</h1>
    <h2>Less paper work, more actual work.</h2>
    <h3>Apply for funding in minutes</h3>
    <a href="https://share.hsforms.com/1pVpOLkLfRcqIp4kIZqZxBw4s6bu" target="_blank">
      <button>Apply Now</button>
    </a>
  </>
)

const ContentOurPhilosophy = () => (
  <>
    <h1>Our Philosophy</h1>
    <p>At Baseline, we find ways to approve your loan instead of looking for reasons to deny it. By choosing us as your lender, you gain a partner you can lean on to help successfully navigate around challenges whether you are flipping a property or building a rental portfolio.</p>
  </>
)

const ContentLoanProducts = () => (
  <>
    <h1>Loan Products</h1>
    <p>Our loan products serve real estate investors with various strategies.</p>
  </>
)

const ContentFixAndFlip = () => (
  <>
    <h2>Loan Product: Fix & Flip</h2>
    <p>Short-term loans for those who plan to flip within 12 months of purchase.</p>
    <hr />
    <ul>
      <li>Competitive rates Starting at 7.99% APR.</li>
      <li>Low, simple fees Simple and transparent fee structure starting at 1% of loan amount.</li>
      <li>No pre-payment penalty Pay anytime without penalties.</li>
      <li>Fast close Closed and funded in as little as 3 days.</li>
    </ul>
  </>
)

const ContentConstruction = () => (
  <>
    <h2>Loan Product: Construction</h2>
    <p>Construction financing for small and medium sized builders.</p>
    <hr />
    <ul>
      <li>Competitive rates Starting at 8.99% APR.</li>
      <li>Attractive terms Up to 100% of the construction budget.</li>
      <li>Quick, simple draws Draws advanced quickly and easily.</li>
      <li>Land financing option Finance land before starting construction.</li>
    </ul>
  </>
)

const ContentRental = () => (
  <>
    <h2>Loan Product: Rental</h2>
    <p>Longer-term loans to finance your rental properties.</p>
    <hr />
    <ul>
      <li>Competitive rates Starting at 4.99% APR.</li>
      <li>Flexible terms Multiple options to fit various strategies.</li>
      <li>Portfolio financing Finance multiple properties.</li>
      <li>Rental income based Get approved based on rental income from the property alone.</li>
    </ul>
  </>
)