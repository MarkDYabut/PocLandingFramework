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
  console.log("MyComponent1")
  console.log(props)
  const [isAnimating, setIsAnimating] = useState(false)

  return (
    <>
      <div>hello world</div>
    </>
  )
}

export default function BuildSomethingNew() {
  console.log("Hello World")

  return (
    <Layout>
      <MyComponent1 />
    </Layout>
  )
}
