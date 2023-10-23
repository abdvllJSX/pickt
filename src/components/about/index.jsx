import styles from "./styles.module.scss";
import gsap from "gsap";
import MagneticBtn from "@/animation/magneticbtn";

export default function index() {
    // GRID ARRAY
    const gridItems = [
        {
            img: "/link.svg",
            header: "Get Personal URL",
            paragraph: "Get and share your personal profile URL to give people direct access to your page."
        },
        {
            img: "/rates.svg",
            header: "Specify Rates",
            paragraph: "Specify your rates for video calls, audio calls and chat sessions."
        },
        {
            img: "/Availability.svg",
            header: "Manage Availability",
            paragraph: "Set your personal Pickt calendar to reflect your availability to take Video, audio, or chat session meetings."
        },

        {
            img: "/withdrawals.svg",
            header: "Fast Withdrawals",
            paragraph: "Withdraw earnings from your Pickt wallet to your personal bank account."
        },
        {
            img: "/broadcast.svg",
            header: "Create Broadcasts",
            paragraph: "Create live broadcast sessions and sell access to everyone."
        },
        {
            img: "/products.svg",
            header: "Sell Your Products",
            paragraph: "Market and sell your ebooks, courses and digital products."
        },
    ]

    return (
        <section className={styles.about}>

            <h3 className={styles.about__header} data-animation-id='paragraph'>
                Share the voice and grit behind your greatest works, knowledge and ideas.
            </h3>

            <div className={styles.about__content}>
                <div className={styles.about__content__left}>
                    <img className={styles.about} width={980} height={1233} src="/about.png" alt="" />
                    <img className={styles.balance} src="/balance.svg" alt="" />
                </div>

                <div className={styles.about__content__right}>
                    <div className={styles.about__content__right__top}>
                        <p data-animation-id='paragraph'>
                            Pickt empowers creatives and professionals with a variety of tools to produce and market products like ebooks, courses, coaching programs in their digital portfolio
                        </p>
                        <button className={styles.btn}>Get Started</button>
                    </div>

                    <h4 className={styles.about__content__right__bottom} data-animation-id='paragraph'>
                        The perfect tools to monetize your time
                    </h4>
                </div>
            </div>

            <div className={styles.about__grid}>
                {
                    gridItems.map((card, index) => {
                        return (
                            // EACH CARD
                            <div className={styles.card} key={index} data-animation="scale-svg">
                                <img src={card.img} alt={card.img} id="svgImageAnime" />
                                <h4 data-animation-id='header'>{card.header}</h4>
                                <p data-animation-id='paragraph' >{card.paragraph}</p>
                            </div>
                        )
                    })
                }
            </div>
            <footer>
                <MagneticBtn>
                    <button>Get Started</button>
                </MagneticBtn>
            </footer>
        </section>
    )
}