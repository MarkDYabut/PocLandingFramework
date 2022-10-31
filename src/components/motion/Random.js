import React, { useState } from 'react' //1000 hours
import styled from 'styled-components' //30 hours
import { motion, useAnimation } from 'framer-motion' //30 hours

const firstVariant = {
    hidden: {
        opacity: 0,
        x: -100,
        scale: 1.3,
    },
    visible: {
        opacity: 1,
        x: 0,
        scale: 1,
        transition: { duration: 2 }
    }
}

const secondVariant = {
    hidden: {
        opacity: 0,
        x: 100,
        scale: 1.3,
    },
    visible: {
        opacity: 1,
        x: 0,
        scale: 1,
        transition: { duration: 2 }
    }
}

const firstElevateVariant = {
    hidden: {
        opacity: 0,
        x: 100,
        scale: 1.3,
        rotate: 30,
        y: 0,
    },
    visible: {
        opacity: 1,
        x: 100,
        y: "-10vh",
        scale: 1,
        rotate: 0,
        transition: { duration: 2 }
    }
}

const secondElevateVariant = {
    hidden: {
        opacity: 0,
        x: 100,
        scale: 1.3,
        rotate: -30,
        y: 0,
    },
    visible: {
        opacity: 1,
        x: -100,
        y: "-10vh",
        scale: 1,
        rotate: 0,
        transition: { duration: 2 }
    }
}

export const RandomMotionOnScroll = ({children}) => {
    const rando = Math.floor(Math.random() * 2)
    let variant = {}
    console.log("RandomMotionOnScroll")
    console.log(rando)
    
    if(rando==1) variant = firstVariant
    else variant = secondVariant

    return (
        <motion.div
            variants={variant}
            initial="hidden"
            whileInView="visible"
        >
            {children}
        </motion.div>
    )
}

export const RandomElevateMotionOnScroll = ({children}) => {
    const rando = Math.floor(Math.random() * 2)
    let variant = {}
    console.log("RandomMotionOnScroll")
    console.log(rando)
    
    if(rando==1) variant = firstElevateVariant
    else variant = secondElevateVariant

    return (
        <motion.div
            variants={variant}
            initial="hidden"
            whileInView="visible"
        >
            {children}
        </motion.div>
    )
}