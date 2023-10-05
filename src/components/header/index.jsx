import React, { useState, useEffect, forwardRef } from 'react';
import styles from "./styles.module.scss";

const Header = forwardRef(function index(props, ref) {
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

                <button className={styles.hamburger}>
                    <span></span>
                    <span></span>
                </button>
            </nav>
        </>
    )
})
export default Header;