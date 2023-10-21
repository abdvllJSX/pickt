import React, { useState, useEffect, forwardRef } from 'react';
import { animate, motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import styles from "./styles.module.scss";


const Header = forwardRef(function Index(props, ref) {
    const initialDelay = 2

    const mobileLinkAnim = {
        initial: { transform: "translate(0px, 70px) rotateX(10deg)", opacity: 0 },
        animate: { transform: "translate(0px, 0px) rotateX(0deg)", opacity: 1 }
    }

    const headerAnim = {
        initial: {
          y: "-300px"
        },

        animate: {
            y: "0",
            transition: {
                delay: initialDelay + 3.5,
                duration: .7,
                ease: [0.25, 1, 0.5, 1]
            }
        }
    }
    const [isActive, setIsActive] = useState(false)
    return (
        <motion.div >
            <motion.nav className={styles.nav__bar} >
                <div className={styles.nav__left}>
                    <div className={styles.logo}>
                        <img ref={ref} src="/pickt-logo.svg" alt="" />
                    </div>

                    <div className={styles.input__container} >
                        <input ref={ref} aria-label="search" type="text" className={styles.nav__input} />
                    </div>
                </div>

                <div className={styles.nav__right}>
                    <ul className={styles.nav__list}>
                        <li className={styles.nav__link}>About Pickt</li>
                        <li className={styles.nav__link}>FAQs</li>
                        <li className={styles.nav__link}>Contact us</li>
                        <li className={styles.line}></li>
                        <li className={styles.nav__link}>Log in</li>
                    </ul>
                    <button className={styles.nav__btn}>Sign Up</button>
                </div>


            </motion.nav>
            <motion.div className={styles.nav__mobile} >
                <motion.div className={styles.nav__left} animate = {isActive ? {backgroundColor: "#5E48DB", transition: {duration: .5, ease: "easeIn"}} : {backgroundColor: "#fff", transition: {delay: .8, ease: "easeIn", duration: .5}}}>
                    <div className={styles.logo}>
                        <img ref={ref} src={isActive ? "/logowhite.svg" : "/pickt-logo.svg"} alt="" />
                    </div>

                    <div className={styles.input__container} >
                        <input ref={ref} aria-label="search" type="text" className={styles.nav__input} />
                    </div>

                    <button className={styles.hamburger} style={isActive ? { gap: "0", backgroundColor: "white", } : {}} onClick={() => { setIsActive(prevIsActive => !prevIsActive) }}>
                        <span style={isActive ? { rotate: "45deg", backgroundColor: "#5E48DB" } : { rotate: "0deg" }}></span>
                        <span style={isActive ? { rotate: "-45deg", backgroundColor: "#5E48DB" } : { rotate: "0deg" }}></span>
                    </button>
                </motion.div>

                <AnimatePresence mode="wait">
                        {isActive &&
                        <motion.ul className={styles.nav__mobile__list} initial={{ transform: "translateY(-100%)", transition: { duration: .6, ease: [0.7, 0, 0.84, 0]} } } animate={{ transform: "translateY(0)", transition: { duration: .7, ease: [0.87, 0, 0.13, 1] } }} exit={{transform: "translateY(-100%)", transition: { duration: .7, ease: [0.16, 1, 0.3, 1], delay: .7 } }}>
                            <motion.li variants={mobileLinkAnim} initial={"initial"} animate={"animate"} transition={{ duration: 0.5, delay: 0.6, ease: [0.5, 1, 0.89, 1] }} exit={ {transform: "translate(0px, 50px) rotateX(10deg)", opacity: 0 , transition: { delay: .4 }, duration: .7 }} className={styles.nav__mobile__link}>About Pickt</motion.li>
                            <motion.li variants={mobileLinkAnim} initial={"initial"} animate={"animate"} transition={{ duration: 0.5, delay: 0.7, ease: [0.5, 1, 0.89, 1] }} exit={ {transform: "translate(0px, 50px) rotateX(10deg)", opacity: 0 , transition: { delay: .3 }, duration: .7 }} className={styles.nav__mobile__link}>FAQs</motion.li>
                            <motion.li variants={mobileLinkAnim} initial={"initial"} animate={"animate"} transition={{ duration: 0.5, delay: 0.8, ease: [0.5, 1, 0.89, 1] }} exit={ {transform: "translate(0px, 50px) rotateX(10deg)", opacity: 0 , transition: { delay: .2 }, duration: .7 }} className={styles.nav__mobile__link}>Contact us</motion.li>
                            <div className={styles.nav__mobile__btn}>
                                <motion.button initial={{opacity: 0, transition: {delay: 1, duration: .5}}} animate={{opacity: 1, transition: {delay: 1.2, duration: .5}} } exit={{opacity: 0, transition: { duration: .5}}}>Log in</motion.button>
                                <motion.button initial={{opacity: 0, transition: {delay: 1, duration: .5}}} animate={{opacity: 1, transition: {delay: 1.2, duration: .5}} } exit={{opacity: 0, transition: { duration: .5}}}>Sign up</motion.button>
                            </div>
                        </motion.ul>}
                 </AnimatePresence>
                
            </motion.div>
        </motion.div>
    )
})
export default Header;