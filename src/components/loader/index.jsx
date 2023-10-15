import styles from "./styles.module.scss";
import { useState } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence, color, easeIn, animate } from "framer-motion";

export default function index({ loadedImages, loaderVisible }) {
    const [entry, setEntry] = useState(loadedImages == "100")
    const text = ["meet", "talk", "Know", "thrive"]
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
            transition: { duration: .3 }
        }, // Exit state
    }

    const transforms = {
        initial: {
            x: "100%",

        },
        animate: (i) => ({
            x: `${i === 0 ? "-75%" : i === 1 ? "25%" : i === 2 ? "50%" : "75%"}`,
            transition: {
                duration: i === 0 ? 1.5 : i === 2 ? 1.4 : i === 2 ? 1.4 : 1.4,
                delay:
                    i === 0 ? .5
                        : i === 1 ? 1
                            : i === 2 ? 1.5
                                : 2,
                ease: i == 0 ?
                    [0.5, 1, 0.89, 1]
                    : i == 1 || i == 2 ?
                        [0.25, 1, 0.5, 1]
                        : [0.25, 1, 0.5, 1]
            }
        }),

        //EXIT ANIMATION
        exit: {
            x: "-100%",
            transition: {
                // delay: 4
            },
        }

    }
    // console.log(loadedImages)

    return (
        <div className={styles.loader__container}>
            <AnimatePresence mode="wait">
                {loaderVisible &&
                    <>
                        <motion.p variants={PFade} animate="animate" exit="exit">{`${loadedImages}`.padStart(3, 0)}%</motion.p>
                        <motion.div className={styles.background}>
                            {
                                text.map((_, index) => {
                                    return (
                                        <>
                                            <motion.div className={styles.colur} custom={index} variants={transforms} initial="initial" animate="animate" exit="exit" key={index}></motion.div>
                                            <motion.h1>{text[index]}</motion.h1>
                                        </>
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