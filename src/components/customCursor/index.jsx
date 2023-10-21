import React, { useEffect } from "react";
import { useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import styles from './styles.module.scss';


export default function Index({ reduceCursor }) {
    const [isHovered, setIsHovered] = useState(false);

    const cursorSize = isHovered ? 20 : 40;

    const mouse = {
        x: useMotionValue(0),
        y: useMotionValue(0)
    }

    const manageMouseOver = () => {
        setIsHovered(true)
    }

    const manageMouseLeave = () => {
        setIsHovered(false)
    }

    const manageMouseMove = (e) => {
        const { clientX, clientY } = e;
        mouse.x.set(clientX - cursorSize / 2),
            mouse.y.set(clientY - cursorSize / 2)
    }
    const smoothOption = { damping: 20, stiffness: 200, mass: 0.5 }
    const smoothMouse = {
        x: useSpring(mouse.x, smoothOption),
        y: useSpring(mouse.y, smoothOption)
    }
    useEffect(() => {
        window.addEventListener('mousemove', manageMouseMove)
        reduceCursor.current.addEventListener('mouseover', manageMouseOver)
        reduceCursor.current.addEventListener('mouseleave', manageMouseLeave)
        return () => {
            window.removeEventListener('mousemove', manageMouseMove)
            reduceCursor.current.removeEventListener('mouseover', manageMouseOver)
            reduceCursor.current.removeEventListener('mouseleave', manageMouseLeave)
        }
    })

    return (
        <motion.div className={styles.cursor} animate={{ width: cursorSize, height: cursorSize }} style={{ left: smoothMouse.x, top: smoothMouse.y }}></motion.div>
    )
}