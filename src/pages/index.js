import React, { useState } from "react"
import { motion } from "framer-motion"
import styled from "styled-components"
import { Layout } from "../layout/Layout"

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
    </>
  )
}

export default function Home() {
  console.log("Hello World")

  return (
    <Layout>
      <div>hello world</div>

    </Layout>
  )
}
