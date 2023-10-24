'use client';
import styles from './styles.module.scss';
import { motion, AnimatePresence, } from "framer-motion";
import gsap from 'gsap';
import SplitType from 'split-type';
import React, { useState, useEffect, forwardRef } from 'react';

export default function Index({ loadedImages, loaderVisible }) {
    const initialDelay = 2

    const images = [
        {
            image: "/home_image_1.png",
            subImage: "/chat-card-1.svg"
        },
        {
            image: "/home_image_2.png",
            subImage: "/chat_card_2.svg"
        },
        {
            image: "/home_image_3.png",
            subImage: "/chat_card_3.svg"
        },
        {
            image: "/home_image_4.png",
            subImage: "/chat_card_4.svg"
        },
    ]

    if (!loaderVisible) {
        useEffect(() => {
            const splitParagraph = new SplitType('#paragraphAnime', { types: 'lines' })
            splitParagraph.lines.forEach((line, index) => {
                gsap.set(".line", {
                    y: "50px",
                    opacity: "0",
                    visibility: "hidden"
                })
                gsap.to(".line", {
                    delay: initialDelay + 1.8,
                    stagger: .05,
                    y: "0",
                    visibility: "visible",
                    duration: .5,
                    opacity: "1",
                    ease: "easeOut",
                })
            })
        }, [])
    }



    const heroImageAnime = {
        initial: {
            scale: 0,
            y: "30vh",
        },
        animate: {
            scale: 1,
            y: "0",
            transition: {
                delay: initialDelay,
                duration: .7,
                ease: [0.34, 1.56, 0.64, 1]
            }
        }
    }

    const heroHeaderAnime = {
        initial: {
            transform: "translate(0%, 200%) rotate(-10deg) scale(0.6, 0.6)",
            visibility: "hidden"
        },
        animate: (i) => ({
            transform: "scale(1, 1)",
            transition: {
                delay: (initialDelay + i * .089),
                duration: .7,
                ease: [0.34, 1.56, 0.64, 1]
            },
            visibility: "visible"
        })
    }

    const btnAnime = {
        initial: {
            y: "60px",
            visibility: "hidden",
        },
        animate: {
            visibility: "visible",
            y: "0",
            transition: {
                delay: initialDelay + 2.2,
                duration: .8,
                ease: [0.25, 1, 0.5, 1]
            }
        }
    }
    return (
        <section className={styles.hero}>
            <div className={styles.hero__center}>
                <div className={styles.hero__center_text}>
                    <motion.h1 variants={heroHeaderAnime} initial="initial" custom={0} animate={loaderVisible ? "initial" : "animate"} >Connect</motion.h1>
                    <motion.h1 variants={heroHeaderAnime} initial="initial" custom={1} animate={loaderVisible ? "initial" : "animate"} >express your creativity</motion.h1>
                    <motion.h1 variants={heroHeaderAnime} initial="initial" custom={2} animate={loaderVisible ? "initial" : "animate"} >share your knowledge</motion.h1>
                </div>
                <p className={styles.hero__center__p} id='paragraphAnime'>
                    pickt is a social platform that allows people
                    from all walks of life to connect, share information
                    and get paid for their time.
                </p>
                <motion.div className={styles.hero__btn} variants={btnAnime} initial="initial" animate={loaderVisible ? "initial" : "animate"}>Get Sarted</motion.div>
            </div>

            <AnimatePresence mode="wait" key="hey">
                <div className={styles.hero_image_decors}>
                    {
                        images.map((image, index) => (
                            <motion.div className={styles.hero_image_decors_decor} key={index}>
                                <motion.img src={`${image.image}`} alt="" className={styles.hero_image_decors_decor_avater} variants={heroImageAnime} initial="initial" animate={loaderVisible ? "initial" : "animate"} />
                                <motion.img src={`${image.subImage}`} alt="" className={styles.hero_image_decors_decor_card} variants={heroImageAnime} initial="initial" animate={loaderVisible ? "initial" : "animate"} />
                            </motion.div>
                        ))
                    }
                </div>
            </AnimatePresence>
        </section>
    )
}