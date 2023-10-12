import { transform } from 'framer-motion';
import styles from './styles.module.scss';
import { useState, useRef, useEffect } from 'react';
export default function index() {
    const consultants = [
        {
            image: "/malaika.png",
            name: "Malaika Ademola-Majek...",
            flag: "/NG.svg",
            price: "$2+",
            time: "/min",
            role: "Product Manager"
        },


        {
            image: "/augusta.jpeg",
            name: "Dr. Augusta Okoro",
            flag: "/PH.svg",
            price: "$2+",
            time: "/min",
            role: "Medical Doctors"
        },

        {
            image: "/chandra.jpeg",
            name: "Dr. Chandra Seepana, p...",
            flag: "/US.svg",
            price: "$4+",
            time: "/min",
            role: "Supply Chain Expert"
        },

        {
            image: "/nerlissa.jpeg",
            name: "Nerlissa Bailon",
            flag: "/GB.svg",
            price: "$3+",
            time: "/min",
            role: "Product Manager"
        },

        {
            image: "/rotimi.jpeg",
            name: "Dr. Rotimi Ogunsakin, p...",
            flag: "/GB.svg",
            price: "$5+",
            time: "/min",
            role: "Edun & Tech Consultant"
        },

        {
            image: "/megan.jpeg",
            name: "Megan caster",
            flag: "/GB.svg",
            price: "$5+",
            time: "/min",
            role: "Biologist"
        },

        {
            image: "/omogbai.jpeg",
            name: "Helen Omogbai",
            flag: "/NG.svg",
            price: "$4+",
            time: "/min",
            role: "Sex/Relationship Expert"
        },

        {
            image: "/emuchay.jpeg",
            name: "Daniel Emuchay",
            flag: "/NG.svg",
            price: "$3+",
            time: "/min",
            role: "Senior Petroleum Engineer"
        },

    ]

    const myDivRef = useRef(null);

    useEffect(() => {
        if (myDivRef.current) {
            setDivWidth(myDivRef.current.offsetWidth);
            // console.log('Width of the div:', divWidth);
        }
    }, []);

    const [divWidth, setDivWidth] = useState(0)
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentArray, setCurrentArray] = useState(consultants);
    const [move, setMove] = useState(0)

    const nextItem = () => {
        setCurrentArray((prevArray) => {
            const newArray = [...prevArray]; // Create a copy of the current array
            const firstItem = newArray.shift(); // Remove the first item
            newArray.push(firstItem); // Push it to the end
            return newArray;
        });
        setMove(preMove => preMove + divWidth)
    };

    const prevItem = () => {
        setCurrentArray((prevArray) => {
            const newArray = [...prevArray]; // Create a copy of the current array
            const lastItem = newArray.pop(); // Remove the last item
            newArray.unshift(lastItem); // Add it to the beginning
            return newArray;
        });
        setMove(preMove => preMove - divWidth)

    };




    // console.log(currentArray)
    return (
        <section className={styles.consults__container}>
            <div className={styles.consults__container__top}>
                <h2>Choose from <span> thousands of experts</span> to consults with</h2>
                <div className={styles.consults__container__top__right}>
                    <button onClick={prevItem}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none">
                            <path stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M9.57 5.93L3.5 12l6.07 6.07M20.5 12H3.67" />
                        </svg>
                    </button>
                    <button onClick={nextItem}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"><path stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M14.43 5.93L20.5 12l-6.07 6.07M3.5 12h16.83" /></svg>
                    </button>
                </div>
            </div>
            <div className={styles.consults__container__bottom}>
                {currentArray.map((consultant, index) => {
                    return (
                        <div className={styles.consults__container__bottom__card} style={{ transform: `translateX(${move}px)` }} key={index} ref={myDivRef}>
                            <div className={styles.consults__container__bottom__card__top}>
                                <div className={styles.img}>
                                    <img src={consultant.image} alt="" width={311} height={272} style={{ objectFit: "cover" }} />
                                    <div className={styles.consults__container__bottom__card__top__occupation}>
                                        <img src="/bag.svg" alt="bag" />
                                        <p>{consultant.role}</p>
                                    </div>
                                </div>

                            </div>
                            <div className={styles.consults__container__bottom__card__bottom}>
                                <div className={styles.header}>
                                    <p>{consultant.name}</p>
                                    <img src={consultant.flag} alt="" width={30} height={30} />
                                </div>
                                <div className={styles.contact}>
                                    <img src="/call.svg" alt="" width={30} height={30} />
                                    <p className="price">
                                        {consultant.price}
                                        <span>{consultant.time}</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <footer>
                <button className={styles.btn}>Discover Experts</button>
            </footer>
        </section>

    )
}