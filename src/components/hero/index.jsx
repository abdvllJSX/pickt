import styles from './styles.module.scss'
export default function index() {
   
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
    return (
        <section className={styles.hero}>
            <div className={styles.hero__center}>
                <div className={styles.hero__center_text}>
                    <h1>Connect</h1>
                    <h1>express your creativity</h1>
                    <h1>share your knowledge</h1>
                </div>
                <p className={styles.hero__center__p}>
                    pickt is a social platform that allows people
                    from all walks of life to connect, share information
                    and get paid for their time.
                </p>
            </div>

            <div className={styles.hero_image_decors}>
                {
                    images.map((image, index) => (
                        <div className={styles.hero_image_decors_decor} key={index}>
                           <img src={`${image.image}`} alt="" className={styles.hero_image_decors_decor_avater} />
                           <img src={`${image.subImage}`} alt=""  className={styles.hero_image_decors_decor_card}/>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}