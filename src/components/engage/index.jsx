import styles from "./styles.module.scss";

export default function index() {
    const celebrities = [
        {
            image: "/akpovire.jpeg",
            name: "Okugbere Akpovira",
            price: "$25+",
            time: "/min"
        },
        {
            image: "/orbay.jpeg",
            name: "Orbay Ünsoy",
            price: "$35+",
            time: "/min"
        },
        {
            image: "/alicia.jpeg",
            name: "Alicia Gberikon",
            price: "$30+",
            time: "/min"
        },
        {
            image: "/shane.jpeg",
            name: "Shane Roach",
            price: "$30+",
            time: "/min"
        },
    ]
    return (
        <section className={styles.engage__container}>
            <div className={styles.engage__container__top}>
                <h2>Engage <span> industry big names </span> and <img src="/star.svg" alt="" /> all that stuff</h2>
                <div className={styles.engage__container__top__right}>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none">
                            <path stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M9.57 5.93L3.5 12l6.07 6.07M20.5 12H3.67" />
                        </svg>
                    </button>
                    <button >
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"><path stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M14.43 5.93L20.5 12l-6.07 6.07M3.5 12h16.83" /></svg>
                    </button>
                </div>
            </div>

             <div className={styles.engage__container__bottom}>
                <div className={styles.engage__container__bottom__carousel}>
                    {celebrities.map((celebrity, index) => {
                        return(
                            <div className={styles.engage__container__bottom__carousel__item} key={index}>
                                <img src={celebrity.image} alt="" width={448} height={414} style={{objectFit: "cover"}}/>
                                <figcaption>
                                    <h2>{celebrity.name}</h2>
                                    <p>
                                        <img src="/call.svg" alt="call" />
                                        {celebrity.price}{celebrity.time}
                                    </p>
                                </figcaption>
                            </div>
                        )
                    })}
                </div>
            </div> 
            <footer>
                <button className={styles.btn}>Discover Experts</button>
            </footer>
        </section>
    )
}