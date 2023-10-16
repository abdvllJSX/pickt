import styles from "./styles.module.scss";
import { useState } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence, color, easeIn, animate, stagger } from "framer-motion";
import { images } from "../../../next.config";

export default function index({ loadedImages, loaderVisible }) {
    const [entry, setEntry] = useState(loadedImages == "100")
    const text = ["meet", "talk", "know", "thrive"]
    setTimeout(() => {
        setEntry(true)
            , 100
    })
    console.log(entry)
    const PFade = {
        // WHEN COMPONENTS MOUNTS
        animate: {
            opacity: 1,
        },
        exit: {
            opacity: 0,
            transition: { duration: .3, }
        },
    }

    const transforms = {
        initial: {
            x: "100%",

        },
        animate: (i) => ({
            x: `${i === 0 ? "-75%" : i === 1 ? "25%" : i === 2 ? "50%" : "75%"}`,
            transition: {
                duration: i == 0 ? 2 : i == 1 ? 2 : i == 2 ? 1.3 : 1,
                delay: i == 1 || i == 0 ? i * .5 : (.5 + i) * .5,
                ease: [0.25, 1, 0.5, 1]
            }
        }),
        exit: (i) => ({
            x: "-100%",
            transition: {
                duration: i == 0 ? 2 : i == 1 ? 2 : i == 2 ? 1.3 : 1,
                delay: i == 0 ? 0 : i == 1 ? .2 : i == 2 ? .4 : .6,
                ease: [0.25, 1, 0.5, 1]
            },
        })
    }

    //LOADER TEXT ANIMATION
    const textAnime = {
        initial: (i) => ({
            y: "70px",
            visibility: "hidden",
            opacity: "0.3",
            scale: "0",
        }),

        animate: (i) => (
            {
                y: "0",
                scale: 1,
                visibility: "visible",
                opacity: "1",
                transition: {
                    delay: i == 0 ? (i + 1) * .4 : ((i + 1) * .5),
                    duration: .8,
                    ease: [0.33, 1, 0.68, 1],
                }

            }
        ),

        exit: (i) => (
            {
                y: `${-100 * i}px`,
                scale: 0,
                opacity: "0",
                transition: {
                    delay: i == 0 ? (i + 1) * 0 : ((i + 1) * .5),
                    duration: 1,
                },
            }
        ),

    }

    return (
        <div className={styles.loader__container}>
            <AnimatePresence mode="wait">
                {loaderVisible &&
                    <>
                        <motion.p variants={PFade} animate={loadedImages == "100" ? "exit" : "animate"}>{`${loadedImages}`.padStart(3, 0)}%</motion.p>
                        <motion.div className={styles.texts} >
                            {loadedImages == 100 &&
                                text.map((text, index) => {
                                    return (
                                        <motion.h1 key={index} variants={textAnime} initial="initial" animate="animate" exit="exit" custom={index}>{text}</motion.h1>
                                    )
                                })
                            }
                        </motion.div>
                        <motion.div className={styles.background}>
                            {
                                [...Array(4)].map((_, index) => {
                                    return (
                                        <motion.div className={styles.colur} custom={index} variants={transforms} initial="initial" animate={loadedImages == 100 ? "animate" : "initial"} exit="exit" key={index}></motion.div>
                                    )
                                })
                            }
                        </motion.div>
                    </>
                }
            </AnimatePresence>
        </div>
    )
}