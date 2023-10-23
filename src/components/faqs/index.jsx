import { use, useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { AnimatePresence, motion } from "framer-motion";
import MagneticBtn from "@/animation/magneticbtn";

export default function Index() {

    const dropdown = [
        {
            question: "What is Pickt?",
            Answer: "Pickt is a social platform that allows people from all walks of life to connect, share information and get paid for their time.",
            isOpen: false
        },
        {
            question: "What does Pickt mean?",
            Answer: "Pickt is an old-fashioned spelling for 'picked' which we use to refer to the act of brain-picking. So, if you wish to pick someone's brain on a subject, we would typically refer to you as a Picker and if you wish to share your knowledge, we would call you a PRO.",
            isOpen: false
        },
        {
            question: "Which kind of experts do i have access to?",
            Answer: "You can find experts from all walks of life from TikTok stars to Lawyers and everyone in between. Find anyone that suits the field or industry that you would like to know more about.",
            isOpen: false
        },
        {
            question: "Can I be a Picker and a PRO at the same time?",
            Answer: "Technically, yes you can. When everyone signs up on Pickt, they have basic Picker accounts until they decide to upgrade to a PRO account if they wish to share their expertise and get paid for doing so.",
            isOpen: false
        },
        {
            question: "Can I withdraw unused money from Pickt wallet?",
            Answer: "Of course, you can. We understand that you might have an unexpected need for some money. So, if it's in your wallet and isn't locked down in escrow as payment for a service, then, you're free to withdraw it. It's yours anyway.",
            isOpen: false
        },
        {
            question: "Can I reach out to an Expert in another location?",
            Answer: "Oh yes! Pickt is boundless and borderless, so you can search for people in a different country as you. If they have a Pickt account, they are reachable by anyone from anywhere.",
            isOpen: false
        },
        {
            question: "Do I get a refund if the experts doesn't show up for the meeting?",
            Answer: "If the PRO doesn't show up for a meeting 100% refund. If the PRO shows up and the picker doesn't, the Picker will only be refunded 45% of their amount.",
            isOpen: false
        },
    ]
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = Math.floor(window.scrollY || window.pageYOffset);
            console.log(scrollY)
        };

        // Add a scroll event listener when the component mounts
        window.addEventListener('scroll', handleScroll);

        // Remove the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
     
    const dropDownAnime = {
        initial: {
            transition: {
                delay: .1,
                duration: .7,
                ease: [0.33, 1, 0.68, 1]
            }
        },
        exit: {
            transition: {
                duration: .8,
                ease: [0.33, 1, 0.68, 1]
            }
        }
    }

    const [isopen, setIsOpen] = useState(dropdown)
    const ToggleIsOpen = (index) => {
        const updatedItem = isopen.map((item, i) => {
            return {
                ...item,
                isOpen: i == index ? !item.isOpen : false,
            }
        })
        setIsOpen(updatedItem)
    }
    return (
        <div className={styles.faqs__container}>
            <div className={styles.faqs}>
                <div className={styles.faqs__left}>
                    <h2 className={styles.faqs__left__header}>
                        Frequently asked
                        Questions
                    </h2>
                </div>

                <div className={styles.faqs__right}>
                    {
                        dropdown.map((card, index) => {
                            return (
                                <motion.div layout className={styles.faqs__card} key={index} onClick={() => { ToggleIsOpen(index) }} >
                                    <h1 className={styles.faqs__card__header}>{card.question}</h1>
                                    <AnimatePresence mode="wait">
                                        {isopen[index].isOpen &&
                                            <p className={styles.faqs__card__answer} variant={dropDownAnime} exit="exit" initial="initial">{card.Answer}</p>}
                                    </AnimatePresence>
                                </motion.div>
                            )
                        })
                    }
                </div>
            </div>
            <div className={styles.footer}>
                <h2 data-animation-id = 'paragraph'>
                    Didn’t find an answer?
                    <br /> <span>Get in touch with us</span>
                </h2>
                <button className={styles.btn}>contact us</button>
            </div>
        </div>
    )
}