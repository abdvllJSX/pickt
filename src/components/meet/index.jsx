import styles from './styles.module.scss';
import Marquee from "react-fast-marquee";

export default function index() {
    const cards = [
        {
            img: '/lawyer.svg',
            text: 'Lawyer'
        },
        {
            img: '/camera.svg',
            text: 'Content Creators'
        },
        {
            img: '/musician.svg',
            text: 'Musician'
        },
        {
            img: '/startup.svg',
            text: 'Startup Founder'
        },
        {
            img: '/fintech.svg',
            text: 'Fintech Experts'
        },
        {
            img: '/arts.svg',
            text: 'Actors'
        },
        {
            img: '/healthcare.svg',
            text: 'Healthcare Professionals'
        }
    ]
    return (
        <section className={styles.meet__container}>
            <div className={styles.meet__container__top}>
                <div className={styles.meet__container__top__header}>
                    <img src="/exclaim.svg" alt="" className={styles.meet__container__top__header__image} />
                    <h2 data-animation="header" className={styles.meet__container__top__header__text} data-animation-id = 'header' >meet</h2>
                    <h2 data-animation="header" className={styles.meet__container__top__header__text} data-animation-id = 'header' >talk</h2>
                    <h2 data-animation="header" className={styles.meet__container__top__header__text} data-animation-id = 'header' >know</h2>
                    <h2 data-animation="header" className={styles.meet__container__top__header__text} data-animation-id = 'header' >thrive</h2>
                </div>

                <div className={styles.meet__container__top__left}>
                    <div className={styles.circles__container}>
                        {[...Array(3)].map((_, index) => {
                            return (
                                <div className={styles.circle} key={index}></div>
                            )
                        })}
                    </div>
                    <div className={styles.meet__container__card}>
                        <p className={styles.meet__container__card__paragraph} data-animation-id ='paragraph'>
                            Curate a community of your favorite people.
                            meet with beautiful minds. Get value for your
                            time.
                        </p>
                    </div>
                </div>

            </div>



            <div className={styles.meet__container__bottom}>
                <div className={styles.circles__container}>
                    {[...Array(3)].map((circle, index) => {
                        return (
                            <div className={styles.circle}></div>
                        )
                    })}
                </div>
                <Marquee speed={80} direction="left" autoFill={true}>
                    <div className={styles.wrapper}>
                        {
                            cards.map(card => {
                                return (
                                    <div className={styles.marquee__item}>
                                        <img src={`${card.img}`} alt={card.text} />
                                        <p>{card.text}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </Marquee>
                <Marquee speed={70} direction="right" autoFill={true}>
                    <div className={styles.wrapper}>
                        {
                            cards.map(card => {
                                return (
                                    <div className={styles.marquee__item} key={card.text}>
                                        <img src={`${card.img}`} alt={card.text} />
                                        <p>{card.text}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </Marquee>
            </div>
        </section>
    )
}