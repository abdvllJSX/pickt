// import Splitting from "splitting";
import { IO } from "./observe";
import { gsap } from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect } from "react";
// gsap.registerPlugin(ScrollTrigger);

export default function split() {
    const p = document.querySelectorAll("[data-animation-id ='paragraph']");
    p.forEach((item) => {
        import('splitting').then(({ default: Splitting }) => {
            // Pass the options to the Splitting function
            const line = Splitting({
                target: item,
                by: "lines",
            });

            line.forEach((splitResult) => {

                const wrappedLines = splitResult.words
                    .map(
                        (wordsArr) => `
                           <span class="word_wrap">
                                 ${wordsArr.outerHTML}
                            </span>`
                    )
                    .join("");
                splitResult.el.innerHTML = wrappedLines;
                console.log(splitResult.words)
            });
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

        });
    });
};
