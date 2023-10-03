import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import "./Header";
import styles from "./styles.module.scss";
export default function Header() {
    const wordsArray = ['Hello', 'World', 'Framer', 'Motion'];
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [currentLetterIndex, setCurrentLetterIndex] = useState(0);

    useEffect(() => {
        const animationInterval = setInterval(() => {
            if (currentLetterIndex < wordsArray[currentWordIndex].length) {
                setCurrentLetterIndex((prevIndex) => prevIndex + 1);
            } else {
                setCurrentLetterIndex(0);
                setCurrentWordIndex((prevIndex) => (prevIndex + 1) % wordsArray.length);
            }
        }, 400); // Adjust the animation speed as needed

        return () => clearInterval(animationInterval);
    }, [currentLetterIndex, currentWordIndex]);

    
    return (
        <>
            <nav className={styles.nav__bar}>
                <div className={styles.nav__left}>
                    <div className={styles.logo}>
                        <img src="/pickt-logo.svg" alt="" />
                    </div>

                    <div className={styles.input__container}>
                        <input aria-label="search" type="text" className={styles.nav__input} />
                      
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

                <button className={styles.hamburger}>
                    <span></span>
                    <span></span>
                </button>
            </nav>
        </>
    )
}