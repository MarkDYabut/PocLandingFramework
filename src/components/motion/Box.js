import React, { useState } from 'react' //1000 hours
import styled from 'styled-components' //10 hours
import { motion, useAnimation } from 'framer-motion' //10 hours

const BoxContainer = styled.div`
    padding-bottom: 10rem;
`

const BoxDiv = styled.div`
    width: 25rem;
    height: 25rem;
    background-color: aquamarine;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const Box1 = () => {

    const [isAnimating, setIsAnimating] = useState(false)

    return (
        <BoxContainer>
            <motion.div
                className='box'
                initial={{ opacity: 0.1 }}
                style={{ opacity: 0.75 }}
                animate={{
                    x: isAnimating ? "50vw" : 0,
                    opacity: isAnimating ? 1 : 0.33,
                    // rotate: isAnimating ? 180 : 0,
                }}
                transition={{
                    type: "spring",
                    stiffness: 60,
                    // duration: 1,
                    // damping: 100,
                }}
                onClick={() => setIsAnimating(!isAnimating)}
            >
                hello, i have been {isAnimating ? "true" : "false"}
            </motion.div>
        </BoxContainer>
    )
}

export const Box2 = () => {
    return (
        <BoxContainer>
            <motion.div
                className='box'
                // drag="x"
                drag
                dragConstraints={{
                    //left,right,bottom,top
                    left: -20,
                    right: 1000,
                    top: 0,
                    bottom: 0,
                }}
                whileHover={{
                    scale: 1.1,
                }}
                whileTap={{
                    scale: 0.9,
                }}
            >
                hello
            </motion.div>
        </BoxContainer>
    )
}

export const Box3 = () => {

    const [seed, setSeed] = useState(1)
    const reset = () => {
        setSeed(Math.random())
        console.log(seed)
    }

    const listVariant = {
        hidden: {
            x: -10,
            opacity: 0
        },
        visible: {
            x: 0,
            rotate: 360,
            opacity: 1,
            transition: {
                duration: 2
            },
        }
    }

    const boxVariant = {
        lionAnimate: {
            transition: {
                delay: 1
            },
            x: 0,
            scale: 1.0,
        },
        elephantAnimate: {
            x: 1000,
            scale: 0.3,
            backgroundColor: "grey"
        },
        hidden: {
            x: "-100vw"
        },
        visible: {
            x: 0,
            transition: {
                // delay: 1,
                when: "beforeChildren",
                staggerChildren: 0.5,
            },
        }
    }

    return (
        <BoxContainer>
            <motion.div
                className='box'
                variants={boxVariant}
                animate="visible"
                initial="hidden"
                onClick={reset}
                key={seed}
            >
                {[1, 2, 3].map(box => {
                    return <motion.li
                        className='boxItem'
                        variants={listVariant}
                    >
                        hi
                    </motion.li>
                })}
            </motion.div>
        </BoxContainer>
    )
}

export const Box4 = () => {
    const [seed, setSeed] = useState(1)

    return (
        <BoxContainer>
            <motion.div
                className='box'
                onClick={() => {
                    setSeed(Math.random())
                    console.log(seed)
                }}
                key={seed}
                animate={{
                    scale: [1, 1.4, 0.4, 1.4, 1],
                    borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                    rotate: [0, 0, 270, 0, 0],
                    x: [0, 750, 750, 750, 0],
                    y: [0, 0, -500, 0, 0]
                }}
                transition={{
                    duration: 2.5,
                }}
            >
                hi
            </motion.div>
        </BoxContainer>
    )
}

export const Box5 = () => {
    const control = useAnimation()

    return (
        <BoxContainer>
            <button onClick={() => {
                control.start({
                    x: 0,
                    transition: {
                        duration: 1
                    }
                })
            }}>Move Left</button>
            <button onClick={() => {
                control.start({
                    x: 1500,
                    transition: {
                        duration: 3
                    }
                })
            }}>Move Right</button>
            <button style={{ backgroundColor: "red" }} onClick={() => {
                control.stop()
            }}>Stop</button>
            <button onClick={() => {
                control.start({
                    borderRadius: "50%",
                    transition: {
                        duration: 1
                    }
                })
            }}>Circle</button>
            <button onClick={() => {
                control.start({
                    borderRadius: "0%",
                    transition: {
                        duration: 1
                    }
                })
            }}>Square</button>
            <motion.div
                className='box'
                animate={control}
            >
                hi
            </motion.div>
        </BoxContainer>
    )
}

export const Box6 = (props) => {
    console.log("MyComponent")
    console.log(props)

    return (
        <BoxContainer>
            <motion.div
                className="box"
                animate={{
                    scale: [1, 2, 2, 1, 1],
                    rotate: [0, 0, 180, 180, 0],
                    borderRadius: ["0%", "0%", "50%", "50%", "0%"],
                    x: `calc(50vw - ${props.valueX})`,
                    y: `calc(50vh - ${props.valueY})`,
                }}
                transition={{
                    duration: 4,
                    ease: "easeInOut",
                    times: [0, 0.2, 0.5, 0.8, 1],
                    repeat: Infinity,
                    repeatDelay: 1
                }}
            >
                <p>
                    hi my name is mark
                </p>
            </motion.div>
        </BoxContainer>
    )
}

export const Box7 = () => {

    const [isAnimating, setIsAnimating] = useState(false)

    return (
        <BoxContainer>
            <motion.div
                className='box'
                initial={{ 
                    opacity: 0 
                }}
                whileInView={{ 
                    opacity: 1,
                    x: "75vw"
                }} 
                animate={{
                    x: isAnimating ? "50vw" : 0,
                    opacity: isAnimating ? 1 : 0.33,
                    // rotate: isAnimating ? 180 : 0,
                }}
                transition={{
                    type: "spring",
                    stiffness: 60,
                    // duration: 1,
                    // damping: 100,
                }}
                onClick={() => setIsAnimating(!isAnimating)}
            >
                hello, i have been {isAnimating ? "true" : "false"}
            </motion.div>
        </BoxContainer>
    )
}