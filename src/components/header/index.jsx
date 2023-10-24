import React, { useState, useEffect, forwardRef } from 'react';
import { animate, motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import styles from "./styles.module.scss";


const Header = forwardRef(function Index({ loaderVisible }, ref) {

    const initialDelay = 2

    const mobileLinkAnim = {
        initial: { transform: "translate(0px, 70px) rotateX(10deg)", opacity: 0 },
        animate: { transform: "translate(0px, 0px) rotateX(0deg)", opacity: 1 }
    }

    const headerAnim = {
        initial: {
            visibility: "hidden",

        },

        animate: {
            visibility: "visible",
            transition: {
                delay: initialDelay + .6,
                duration: .6,
            }
        }
    }
    useEffect(() => {
        const element = document.getElementById("element")
        const { height } = element.getBoundingClientRect();
        console.log(height)
    }, [])

    const [isActive, setIsActive] = useState(false)
    return (
        <motion.div variants={headerAnim} initial="initial" animate={loaderVisible ? "initial" : "animate"} >
            <motion.nav className={styles.nav__bar} id='element'>
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
            <motion.div className={styles.nav__mobile}>
                <motion.div className={styles.nav__left} animate={isActive ? { backgroundColor: "#5E48DB", transition: { duration: .5, ease: "easeIn" } } : { backgroundColor: "#fff", transition: { delay: .8, ease: "easeIn", duration: .5 } }}>
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
                        <motion.ul className={styles.nav__mobile__list} initial={{ transform: "translateY(-100%)", transition: { duration: .6, ease: [0.7, 0, 0.84, 0] } }} animate={{ transform: "translateY(0)", transition: { duration: .7, ease: [0.87, 0, 0.13, 1] } }} exit={{ transform: "translateY(-100%)", transition: { duration: .7, ease: [0.16, 1, 0.3, 1], delay: .7 } }}>
                            <motion.li variants={mobileLinkAnim} initial={"initial"} animate={"animate"} transition={{ duration: 0.5, delay: 0.6, ease: [0.5, 1, 0.89, 1] }} exit={{ transform: "translate(0px, 50px) rotateX(10deg)", opacity: 0, transition: { delay: .4 }, duration: .7 }} className={styles.nav__mobile__link}>About Pickt</motion.li>
                            <motion.li variants={mobileLinkAnim} initial={"initial"} animate={"animate"} transition={{ duration: 0.5, delay: 0.7, ease: [0.5, 1, 0.89, 1] }} exit={{ transform: "translate(0px, 50px) rotateX(10deg)", opacity: 0, transition: { delay: .3 }, duration: .7 }} className={styles.nav__mobile__link}>FAQs</motion.li>
                            <motion.li variants={mobileLinkAnim} initial={"initial"} animate={"animate"} transition={{ duration: 0.5, delay: 0.8, ease: [0.5, 1, 0.89, 1] }} exit={{ transform: "translate(0px, 50px) rotateX(10deg)", opacity: 0, transition: { delay: .2 }, duration: .7 }} className={styles.nav__mobile__link}>Contact us</motion.li>
                            <div className={styles.nav__mobile__btn}>
                                <motion.button initial={{ opacity: 0, transition: { delay: 1, duration: .5 } }} animate={{ opacity: 1, transition: { delay: 1.2, duration: .5 } }} exit={{ opacity: 0, transition: { duration: .5 } }}>Log in</motion.button>
                                <motion.button initial={{ opacity: 0, transition: { delay: 1, duration: .5 } }} animate={{ opacity: 1, transition: { delay: 1.2, duration: .5 } }} exit={{ opacity: 0, transition: { duration: .5 } }}>Sign up</motion.button>
                            </div>
                            <ul className={styles.nav__footer}>
                                <li>
                                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22.375 5.00368V20.9963C22.375 21.362 22.2297 21.7126 21.9712 21.9712C21.7126 22.2297 21.362 22.375 20.9963 22.375H5.00368C4.63803 22.375 4.28736 22.2297 4.0288 21.9712C3.77025 21.7126 3.625 21.362 3.625 20.9963V5.00368C3.625 4.63803 3.77025 4.28736 4.0288 4.0288C4.28736 3.77025 4.63803 3.625 5.00368 3.625H20.9963C21.362 3.625 21.7126 3.77025 21.9712 4.0288C22.2297 4.28736 22.375 4.63803 22.375 5.00368ZM9.13971 10.7941H6.38235V19.6176H9.13971V10.7941ZM9.38787 7.76103C9.38932 7.55246 9.34968 7.34564 9.2712 7.15239C9.19273 6.95914 9.07695 6.78324 8.93049 6.63474C8.78404 6.48623 8.60976 6.36803 8.41762 6.28687C8.22548 6.20572 8.01923 6.16321 7.81066 6.16176H7.76103C7.33688 6.16176 6.9301 6.33026 6.63018 6.63018C6.33026 6.9301 6.16176 7.33688 6.16176 7.76103C6.16176 8.18518 6.33026 8.59196 6.63018 8.89188C6.9301 9.1918 7.33688 9.36029 7.76103 9.36029C7.96961 9.36543 8.17717 9.32941 8.37183 9.2543C8.56649 9.17919 8.74444 9.06646 8.89552 8.92255C9.0466 8.77864 9.16784 8.60637 9.25232 8.41559C9.3368 8.22481 9.38286 8.01925 9.38787 7.81066V7.76103ZM19.6176 14.2574C19.6176 11.6048 17.9301 10.5735 16.2537 10.5735C15.7048 10.546 15.1582 10.663 14.6686 10.9126C14.179 11.1623 13.7634 11.5359 13.4632 11.9963H13.386V10.7941H10.7941V19.6176H13.5515V14.9246C13.5116 14.444 13.663 13.967 13.9728 13.5974C14.2826 13.2277 14.7257 12.9952 15.2059 12.9504H15.3107C16.1875 12.9504 16.8382 13.5018 16.8382 14.8915V19.6176H19.5956L19.6176 14.2574Z" fill="white"></path>
                                    </svg>
                                </li>
                                <li>
                                    <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19.284 4.75042C19.2967 4.93408 19.2967 5.11774 19.2967 5.3031C19.2967 10.9509 14.9971 17.4645 7.13523 17.4645V17.4612C4.81279 17.4645 2.5386 16.7993 0.583496 15.545C0.921197 15.5856 1.26059 15.6059 1.60083 15.6068C3.52547 15.6085 5.39509 14.9627 6.90925 13.7735C5.08025 13.7388 3.47638 12.5463 2.91608 10.8053C3.55679 10.9289 4.21695 10.9035 4.8458 10.7317C2.85176 10.3288 1.41717 8.57684 1.41717 6.54218C1.41717 6.52356 1.41717 6.50578 1.41717 6.48801C2.01132 6.81894 2.67656 7.0026 3.35704 7.02291C1.47895 5.76775 0.900037 3.26927 2.03417 1.31586C4.20426 3.98615 7.40606 5.60948 10.8432 5.78129C10.4987 4.29676 10.9693 2.74114 12.0797 1.69757C13.8012 0.0793166 16.5087 0.162261 18.127 1.88293C19.0842 1.69419 20.0017 1.34294 20.8413 0.845279C20.5222 1.83468 19.8544 2.67513 18.9624 3.20918C19.8096 3.10931 20.6373 2.88248 21.4168 2.53632C20.843 3.39623 20.1202 4.14527 19.284 4.75042Z" fill="white"></path>
                                    </svg>
                                </li>
                                <li>
                                    <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19.284 4.75042C19.2967 4.93408 19.2967 5.11774 19.2967 5.3031C19.2967 10.9509 14.9971 17.4645 7.13523 17.4645V17.4612C4.81279 17.4645 2.5386 16.7993 0.583496 15.545C0.921197 15.5856 1.26059 15.6059 1.60083 15.6068C3.52547 15.6085 5.39509 14.9627 6.90925 13.7735C5.08025 13.7388 3.47638 12.5463 2.91608 10.8053C3.55679 10.9289 4.21695 10.9035 4.8458 10.7317C2.85176 10.3288 1.41717 8.57684 1.41717 6.54218C1.41717 6.52356 1.41717 6.50578 1.41717 6.48801C2.01132 6.81894 2.67656 7.0026 3.35704 7.02291C1.47895 5.76775 0.900037 3.26927 2.03417 1.31586C4.20426 3.98615 7.40606 5.60948 10.8432 5.78129C10.4987 4.29676 10.9693 2.74114 12.0797 1.69757C13.8012 0.0793166 16.5087 0.162261 18.127 1.88293C19.0842 1.69419 20.0017 1.34294 20.8413 0.845279C20.5222 1.83468 19.8544 2.67513 18.9624 3.20918C19.8096 3.10931 20.6373 2.88248 21.4168 2.53632C20.843 3.39623 20.1202 4.14527 19.284 4.75042Z" fill="white"></path>
                                    </svg>
                                </li>
                                <li>
                                    <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19.284 4.75042C19.2967 4.93408 19.2967 5.11774 19.2967 5.3031C19.2967 10.9509 14.9971 17.4645 7.13523 17.4645V17.4612C4.81279 17.4645 2.5386 16.7993 0.583496 15.545C0.921197 15.5856 1.26059 15.6059 1.60083 15.6068C3.52547 15.6085 5.39509 14.9627 6.90925 13.7735C5.08025 13.7388 3.47638 12.5463 2.91608 10.8053C3.55679 10.9289 4.21695 10.9035 4.8458 10.7317C2.85176 10.3288 1.41717 8.57684 1.41717 6.54218C1.41717 6.52356 1.41717 6.50578 1.41717 6.48801C2.01132 6.81894 2.67656 7.0026 3.35704 7.02291C1.47895 5.76775 0.900037 3.26927 2.03417 1.31586C4.20426 3.98615 7.40606 5.60948 10.8432 5.78129C10.4987 4.29676 10.9693 2.74114 12.0797 1.69757C13.8012 0.0793166 16.5087 0.162261 18.127 1.88293C19.0842 1.69419 20.0017 1.34294 20.8413 0.845279C20.5222 1.83468 19.8544 2.67513 18.9624 3.20918C19.8096 3.10931 20.6373 2.88248 21.4168 2.53632C20.843 3.39623 20.1202 4.14527 19.284 4.75042Z" fill="white"></path>
                                    </svg>
                                </li>
                            </ul>
                            <div className={styles.last}>
                                <p>Terms Of Service</p>
                                <p>Privacy Policy</p>
                            </div>
                        </motion.ul>}
                </AnimatePresence>

            </motion.div>
        </motion.div>
    )
})
export default Header;