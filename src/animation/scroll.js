import Lenis from "@studio-freight/lenis";

export default function scroll() {
    const lenis = new Lenis({
        duration: 1.8,
        easing: (x) =>  1 - (1 - x) * (1 - x),
        infinite: false,
        smooth: true,
    });

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
}
