import React, { useState, useEffect, forwardRef } from 'react';
import { motion, useMotionValue, useSpring } from "framer-motion";
import styles from "./styles.module.scss";

const Header = forwardRef(function index(props, ref) {
    const [isActive, setIsActive] = useState(false)

    return (
        <>
            <nav className={styles.nav__bar}>
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


            </nav>
            <div className={styles.nav__mobile}>
                {isActive &&
                    <motion.div className={styles.nav__left} animate={{background: ""}}>
                        <div className={styles.logo}>
                            <img ref={ref} src="/pickt-logo.svg" alt="" />
                        </div>

                        <div className={styles.input__container} >
                            <input ref={ref} aria-label="search" type="text" className={styles.nav__input} />
                        </div>

                        <button className={styles.hamburger} style={isActive ? { gap: "0" } : {}} onClick={() => { setIsActive(prevIsActive => !prevIsActive) }}>
                            <span style={isActive ? { rotate: "45deg" } : { rotate: "0deg" }}></span>
                            <span style={isActive ? { rotate: "-45deg" } : { rotate: "0deg" }}></span>
                        </button>
                    </motion.div>
                }

                {isActive &&
                    <motion.ul className={styles.nav__mobile__list} initial={{ transform: "translateY(-356px)" }} animate={{ transform: "translateY(0)" }}>
                        <li className={styles.nav__mobile__link}>About Pickt</li>
                        <li className={styles.nav__mobile__link}>FAQs</li>
                        <li className={styles.nav__mobile__link}>Contact us</li>

                        <button className={styles.nav__mobile__btn}>Log in</button>
                        <button className={styles.nav__mobile__btn}>Sign up</button>
                    </motion.ul>

                }
            </div>
        </>
    )
})
export default Header;