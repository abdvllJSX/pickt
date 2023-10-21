// import Splitting from "splitting";
import SplitType from "split-type";
import { IO } from "./observe";
import { gsap } from "gsap";

export default function split() {
    const p = document.querySelectorAll("[data-animation-id = 'paragraph']");
    const H = document.querySelectorAll("[data-animation-id = 'header']")


    p.forEach((item) => {
        const text = new SplitType(item).lines
        text.forEach((text) => {
            gsap.set(text.querySelectorAll(".word"), {
                yPercent: 105,
                opacity: 0,
                rotateX: 50,
                transformStyle: "preserve-3d",
            });
            IO(text, { threshold: 0.8 }).then(() => {
                const elem = text.querySelectorAll(".word");
                gsap.to(elem, {
                    yPercent: 0,
                    opacity: 1,
                    rotateX: 0,
                    stagger: elem.length > 100 ? 0.05 : 0.06,
                    duration: elem.length > 100 ? 0.65 : 0.75,
                    ease: "easeOut",
                });
            });
        })
    })

    H.forEach((item) => {
        const text = new SplitType(item).chars
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
};
