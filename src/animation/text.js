// import Splitting from "splitting";
import SplitType from "split-type";
import { IO } from "./observe"
import { gsap } from "gsap";

export default function split() {
    const p = document.querySelectorAll("[data-animation-id = 'paragraph']");
    const H = document.querySelectorAll("[data-animation-id = 'header']");
    const I = document.querySelectorAll('[data-animation = "scale-svg"]')
    const B = document.querySelectorAll('[data-animation = "ball-in"]')
    const C = document.querySelectorAll('[data-animation = "card-in"]')
    console.log(C)

    p.forEach((item) => {
        new SplitType(item, { types: "lines, words", })

        gsap.set(item.querySelectorAll(".word"), {
            yPercent: 105,
            opacity: 0,
            rotateX: 50,
            transformStyle: "preserve-3d",
        });

        IO(item, { threshold: 0.8 }).then(() => {
            const elem = item.querySelectorAll(".word");
            gsap.to(elem, {
                yPercent: 0,
                opacity: 1,
                rotateX: 0,
                stagger: elem.length > 100 ? 0.02 : 0.03,
                duration: elem.length > 100 ? 0.65 : 0.75,
                ease: "easeOut",
            });

        });
    })

    H.forEach((item) => {
        new SplitType(item, { types: "chars" })
        gsap.set(item.querySelectorAll(".char"), {
            opacity: 0,
            yPercent: 100,
            transformStyle: "preserve-3d",
        });
        IO(item, {
            threshold: 1,
        }).then(() => {
            const elem = item.querySelectorAll(".char");
            gsap.to(elem, {
                opacity: 1,
                yPercent: 0,
                stagger: elem.length > 100 ? 0.01 : 0.02,
                duration: elem.length > 100 ? 0.5 : 0.6,
                ease: "easeOut",
            });
        });
    })

    I.forEach((item) => {
        gsap.set("#svgImageAnime", {
            scale: "0"
        });
        IO(item, {
            threshold: .8,
        }).then(() => {
            const elem = item.querySelectorAll("#svgImageAnime");
            gsap.to(elem, {
                delay: .2,
                scale: "1",
                duration: .2,
                ease: [0.34, 1.56, 0.64, 1]
            });
        });
    })

    B.forEach((item) => {
        gsap.set(item.querySelectorAll("#circle"), {
            x: "700px"
        });

        gsap.set(item.querySelectorAll("#circle2"), {
            x: "-700px"
        });

        IO(item, {
            threshold: .8,
        }).then(() => {
            const elem = item.querySelectorAll("#circle");
            gsap.to(elem, {
                x: "0",
                stagger: ".2",
                transition: [0.25, 1, 0.5, 1]
            });
            gsap.to(item.querySelectorAll("#circle2"), {
                x: "0",
                stagger: "-.2",
                transition: [0.25, 1, 0.5, 1]
            });
        });
    })

    C.forEach((card) => {
        gsap.set(card.querySelectorAll("#card"), {
            x: "40vw",
            rotation: -4,
            scale: 0.75,
            opacity: ".4"
        });

        IO(card, {
            threshold: .08,
        }).then(() => {
            const elem = card.querySelectorAll("#card");
            gsap.to(elem, {
                x: 0,
                y: 0,
                rotation: 0,
                scale: 1,
                duration: .8,
                stagger: .07,
                opacity: 1,
                ease: [0.22, 1, 0.36, 1],
            });
        });
    })

};


