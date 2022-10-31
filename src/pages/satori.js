// https://www.youtube.com/watch?v=qNL_8NN8iRw
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

const DynamicDiv = (props) => {
  const [seed, setSeed] = useState(1)

  console.log(props)
  console.log(props.x)

  let styles = {
    // backgroundColor: '#fefae0',
    maxWidth: '600px',
    width: `${props.x}px`,
    borderRadius: '10px',
  }

  return (
    <motion.div
      onClick={() => {
        setSeed(Math.random())
        console.log(seed)
      }}
      key={seed}
      whileInView={{
        scale: props.x/300,
        borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        rotate: [180, 0, 360, 180, 0],
        // x: [0, 750, 500, 750, 0],
        x: [0, 750, 500, 750, 0],
        // y: [0, 0, -500, 0, 0]
      }}
      transition={{
        duration: 2.5,
      }}
      style={styles}
    >
      <img src={props.src} alt="React Logo" />
    </motion.div>
  )
}

const RandomNumber = () => {
  return Math.floor(Math.random() * 31 + 1)
}

const MyComponent1 = (props) => {
  console.log("MyComponent1")
  console.log(props)
  const [isAnimating, setIsAnimating] = useState(false)

  return (
    <>
    </>
  )
}

export default function BuildSomethingNew() {
  console.log("Hello World")
  const [size, setSize] = useState(300)

  return (
    <Layout>
      <Marquee marqueeText={"build some new shit. "}>
      </Marquee>
      <button onClick={() => { setSize(size + 100) }}>+</button>
      <button onClick={() => { setSize(size - 100) }}>-</button>
      {Array(32).fill(0).map(svgID => {
        svgID = RandomNumber();
        let path='0001'
        if(svgID>9) path = path.slice(0,-2)
        else path = path.slice(0,-1)
        path = path+svgID
        return <>
          <p>ID: {svgID}</p>
          <p>Path: {path}</p>
          <DynamicDiv x={size} src={`open-doodles/svg/${path}.svg`} />
        </>
      })}
    </Layout>
  )
}
