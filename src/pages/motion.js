import React, { useState } from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import { Box1, Box2, Box3, Box4, Box5, Box6, Box7 } from '../components/Box'
import { Layout } from '../layout/Layout'

const Container = styled.div`
  margin: 3rem auto;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const MyComponent1 = (props) => {
  console.log("MyComponent")
  console.log(props)

  return (
    <>
      <Box1 />
    </>
  )
}

export default function Home() {
  console.log("Hello World")

  return (
    <Layout>
      <Box1></Box1>
      <Box2></Box2>
      <Box3></Box3>
      <Box4></Box4>
      <Box5></Box5>
      <Box6 sup="hi" how="areyou" valueX="50%" valueY="50%"></Box6>
      <Box7></Box7>
    </Layout>
  )
}
