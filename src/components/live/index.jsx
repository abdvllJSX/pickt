import styles from "./styles.module.scss";

export default function index() {
    const events = [
        {
            image: "/bc1.webp",
            caption: "Mattew Davis and 2 Others",
            name: "Live Orchestra",
            price: "$30",
            flag: "/NG.svg"
        },
        {
            image: "/bc2.webp",
            caption: "Jack Wilson +2 more",
            name: "Building a Formidable Sales Team",
            price: "$10",
            flag: "/NG.svg"
        },
        {
            image: "/bc3.webp",
            caption: "Lauryn and Tina",
            name: "Make Over with Lauryn and Tina",
            price: "$10",
            flag: "/NG.svg"
        },
        {
            image: "/bc4.webp",
            caption: "Rita Benjamen",
            name: "Come on Live With Me",
            price: "$10",
            flag: "/NG.svg"
        },

    ]
    return (
        <section className={styles.live__container}>
            <div className={styles.live__container__top}>
                <h2 data-animation = "scale-svg" data-animation-id='paragraph' >Join <span>live </span><span>broadcasts</span> with your favourite people<img src="/love.svg" id="svgImageAnime"  alt="" className={styles.image2} /> <img src="/live.svg" alt="" className={styles.image1} id = "svgImageAnime"/></h2>
                <div className={styles.live__container__top__right}>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none">
                            <path stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M9.57 5.93L3.5 12l6.07 6.07M20.5 12H3.67" />
                        </svg>
                    </button>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"><path stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M14.43 5.93L20.5 12l-6.07 6.07M3.5 12h16.83" /></svg>
                    </button>
                </div>
            </div>

            <div className={styles.live__container__bottom}>
                <div className={styles.live__container__bottom__carousel} data-animation = "card-in">
                    {events.map((event, index) => {
                        return (
                            <div className={styles.live__container__bottom__carousel__card} key={index} id="card">
                                <div className={styles.live__container__bottom__carousel__card__top}>
                                    <div className={styles.card__img}>
                                        <img src={event.image} width={527} height={272} style={{ objectFit: "cover" }} alt={event.image} />
                                        <figcaption>
                                            <img src="/profile.svg" alt="" />
                                            <p>{event.caption} <img src="/NG.svg" alt="" /></p>
                                        </figcaption>
                                    </div>
                                </div>
                                <div className={styles.live__container__bottom__carousel__bottom}>
                                    <h2>{event.name}</h2>
                                    <div className={styles.price}>
                                        <img src="/money.svg" alt="" />
                                        <p>{event.price}<span>/person</span></p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <footer>
                <button className={styles.btn}>Discover Broadcasts</button>
            </footer>
        </section>
    )
}