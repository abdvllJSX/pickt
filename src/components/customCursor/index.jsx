import React, { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import styles from './styles.module.scss';


export default function index() {
    const mouseSize = 40
    const mouse = {
        x: useMotionValue(0),
        y: useMotionValue(0)
    }
    const manageMouseMove = (e) => {
        const { clientX, clientY } = e;
        mouse.x.set(clientX - mouseSize / 2),
            mouse.y.set(clientY - mouseSize / 2)
    }
    const smoothOption = { damping: 20, stiffness: 200, mass: 0.5 }
    const smoothMouse = {
        x: useSpring(mouse.x, smoothOption),
        y: useSpring(mouse.y, smoothOption)
    }
    useEffect(() => {
        window.addEventListener('mousemove', manageMouseMove)
        return () => { window.removeEventListener('mousemove', manageMouseMove) }
    })
    return (
        <motion.div className={styles.cursor} style={{ left: smoothMouse.x, top: smoothMouse.y }}></motion.div>
    )
}