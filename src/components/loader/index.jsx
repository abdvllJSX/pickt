import styles from "./styles.module.scss";
import { motion, AnimatePresence,} from "framer-motion";

export default function Index({ loadedImages, loaderVisible }) {
    const text = ["meet", "talk", "know", "thrive"]
    // COUNTER ANIMATION
    const counterAnime = {
        animate: {
            opacity: 1,
        },

        exit: {
            opacity: 0,
            transition: { duration: .3, }
        },
    }

    // PANEL ANIMATION
    const transforms = {
        initial: {
            x: "100%",
            height: "100vh"
        },

        animate: (i) => ({
            x: `${i * 25}%`,
            transition: {
                duration: .6,
                delay: i * .7,
                ease: [0.61, 1, 0.88, 1]
            }
        }),

        exit: (i) => ({
            x: "-100%",
            transition: {
                duration: .7,
                delay: i * .2,
                ease: [0.61, 1, 0.88, 1]
            }
        })
    }

    //LOADER TEXT ANIMATION
    const textAnime = {
        initial: (i) => ({
            transform: "translate(0%, 300%) rotateX(-60deg) skew(0deg, -4deg) scale(0.6, 0.6)",
            opacity: "0",
            visibility: "hidden",
            transition: {
                delay: .5
            }
        }),

        animate: (i) => (
            {
                transform: "translate(0%, 0%) rotateX(0) skew(0deg, 0deg) scale(1, 1)",
                visibility: "visible",
                transition: {
                    duration: .7,
                    delay: i * .7,
                },
                opacity: "1"
            }
        ),

        exit: (i) => (
            {
                transform: "translate(0, -60vh)",
                opacity: 0.2,
                transition: {
                    duration: .9,
                    delay: i * .2,
                    ease: [0.61, 1, 0.88, 1]
                },
            }
        ),
    }

    return (
        <AnimatePresence mode="wait">
            {loaderVisible &&
                <motion.div className={styles.loader__container}>
                    <motion.p variants={counterAnime} animate={loadedImages == "100" ? "exit" : "animate"}>{`${loadedImages}`.padStart(3, 0)}%</motion.p>
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
                </motion.div>}
        </AnimatePresence>

    )
}