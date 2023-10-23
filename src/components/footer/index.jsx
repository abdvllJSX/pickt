import styles from "./styles.module.scss";


export default function Index() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__top}>
                <h2>
                    Would you like to get updates on Pickt delivered straight to your email? Subscribe now.
                </h2>
                <form action="" className={styles.footer__top__input}>
                    <input type="text" placeholder="Email" />
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"><path stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M14.43 5.93L20.5 12l-6.07 6.07M3.5 12h16.83"></path></svg>
                    </button>
                </form>
            </div>
            <div className={styles.footer__bottom}>
                <ul className={styles.footer__bottom__links}>
                    <li>About Pict</li>
                    <li>FAQs</li>
                    <li>Contact us</li>
                </ul>
                <ul className={styles.footer__bottom__links}>
                    <li>
                        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.375 5.00368V20.9963C22.375 21.362 22.2297 21.7126 21.9712 21.9712C21.7126 22.2297 21.362 22.375 20.9963 22.375H5.00368C4.63803 22.375 4.28736 22.2297 4.0288 21.9712C3.77025 21.7126 3.625 21.362 3.625 20.9963V5.00368C3.625 4.63803 3.77025 4.28736 4.0288 4.0288C4.28736 3.77025 4.63803 3.625 5.00368 3.625H20.9963C21.362 3.625 21.7126 3.77025 21.9712 4.0288C22.2297 4.28736 22.375 4.63803 22.375 5.00368ZM9.13971 10.7941H6.38235V19.6176H9.13971V10.7941ZM9.38787 7.76103C9.38932 7.55246 9.34968 7.34564 9.2712 7.15239C9.19273 6.95914 9.07695 6.78324 8.93049 6.63474C8.78404 6.48623 8.60976 6.36803 8.41762 6.28687C8.22548 6.20572 8.01923 6.16321 7.81066 6.16176H7.76103C7.33688 6.16176 6.9301 6.33026 6.63018 6.63018C6.33026 6.9301 6.16176 7.33688 6.16176 7.76103C6.16176 8.18518 6.33026 8.59196 6.63018 8.89188C6.9301 9.1918 7.33688 9.36029 7.76103 9.36029C7.96961 9.36543 8.17717 9.32941 8.37183 9.2543C8.56649 9.17919 8.74444 9.06646 8.89552 8.92255C9.0466 8.77864 9.16784 8.60637 9.25232 8.41559C9.3368 8.22481 9.38286 8.01925 9.38787 7.81066V7.76103ZM19.6176 14.2574C19.6176 11.6048 17.9301 10.5735 16.2537 10.5735C15.7048 10.546 15.1582 10.663 14.6686 10.9126C14.179 11.1623 13.7634 11.5359 13.4632 11.9963H13.386V10.7941H10.7941V19.6176H13.5515V14.9246C13.5116 14.444 13.663 13.967 13.9728 13.5974C14.2826 13.2277 14.7257 12.9952 15.2059 12.9504H15.3107C16.1875 12.9504 16.8382 13.5018 16.8382 14.8915V19.6176H19.5956L19.6176 14.2574Z" fill="white"></path>
                        </svg>
                    </li>
                    <li>
                        <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.284 4.75042C19.2967 4.93408 19.2967 5.11774 19.2967 5.3031C19.2967 10.9509 14.9971 17.4645 7.13523 17.4645V17.4612C4.81279 17.4645 2.5386 16.7993 0.583496 15.545C0.921197 15.5856 1.26059 15.6059 1.60083 15.6068C3.52547 15.6085 5.39509 14.9627 6.90925 13.7735C5.08025 13.7388 3.47638 12.5463 2.91608 10.8053C3.55679 10.9289 4.21695 10.9035 4.84580 10.7317C2.85176 10.3288 1.41717 8.57684 1.41717 6.54218C1.41717 6.52356 1.41717 6.50578 1.41717 6.48801C2.01132 6.81894 2.67656 7.0026 3.35704 7.02291C1.47895 5.76775 0.900037 3.26927 2.03417 1.31586C4.20426 3.98615 7.40606 5.60948 10.8432 5.78129C10.4987 4.29676 10.9693 2.74114 12.0797 1.69757C13.8012 0.0793166 16.5087 0.162261 18.127 1.88293C19.0842 1.69419 20.0017 1.34294 20.8413 0.845279C20.5222 1.83468 19.8544 2.67513 18.9624 3.20918C19.8096 3.10931 20.6373 2.88248 21.4168 2.53632C20.8430 3.39623 20.1202 4.14527 19.284 4.75042Z" fill="white" />
                        </svg>
                    </li>
                    <li>
                        <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.284 4.75042C19.2967 4.93408 19.2967 5.11774 19.2967 5.3031C19.2967 10.9509 14.9971 17.4645 7.13523 17.4645V17.4612C4.81279 17.4645 2.5386 16.7993 0.583496 15.545C0.921197 15.5856 1.26059 15.6059 1.60083 15.6068C3.52547 15.6085 5.39509 14.9627 6.90925 13.7735C5.08025 13.7388 3.47638 12.5463 2.91608 10.8053C3.55679 10.9289 4.21695 10.9035 4.84580 10.7317C2.85176 10.3288 1.41717 8.57684 1.41717 6.54218C1.41717 6.52356 1.41717 6.50578 1.41717 6.48801C2.01132 6.81894 2.67656 7.0026 3.35704 7.02291C1.47895 5.76775 0.900037 3.26927 2.03417 1.31586C4.20426 3.98615 7.40606 5.60948 10.8432 5.78129C10.4987 4.29676 10.9693 2.74114 12.0797 1.69757C13.8012 0.0793166 16.5087 0.162261 18.127 1.88293C19.0842 1.69419 20.0017 1.34294 20.8413 0.845279C20.5222 1.83468 19.8544 2.67513 18.9624 3.20918C19.8096 3.10931 20.6373 2.88248 21.4168 2.53632C20.8430 3.39623 20.1202 4.14527 19.284 4.75042Z" fill="white" />
                        </svg>
                    </li>
                    <li>
                        <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.284 4.75042C19.2967 4.93408 19.2967 5.11774 19.2967 5.3031C19.2967 10.9509 14.9971 17.4645 7.13523 17.4645V17.4612C4.81279 17.4645 2.5386 16.7993 0.583496 15.545C0.921197 15.5856 1.26059 15.6059 1.60083 15.6068C3.52547 15.6085 5.39509 14.9627 6.90925 13.7735C5.08025 13.7388 3.47638 12.5463 2.91608 10.8053C3.55679 10.9289 4.21695 10.9035 4.84580 10.7317C2.85176 10.3288 1.41717 8.57684 1.41717 6.54218C1.41717 6.52356 1.41717 6.50578 1.41717 6.48801C2.01132 6.81894 2.67656 7.0026 3.35704 7.02291C1.47895 5.76775 0.900037 3.26927 2.03417 1.31586C4.20426 3.98615 7.40606 5.60948 10.8432 5.78129C10.4987 4.29676 10.9693 2.74114 12.0797 1.69757C13.8012 0.0793166 16.5087 0.162261 18.127 1.88293C19.0842 1.69419 20.0017 1.34294 20.8413 0.845279C20.5222 1.83468 19.8544 2.67513 18.9624 3.20918C19.8096 3.10931 20.6373 2.88248 21.4168 2.53632C20.8430 3.39623 20.1202 4.14527 19.284 4.75042Z" fill="white" />
                        </svg>
                    </li>
                </ul>
               <h1>Pickt.</h1>
               <p>2023 Pickt, Inc.</p>
            </div>
            <aside>
                <p>Terms Of Service</p>
                <p>Privacy Policy</p>
               </aside>
        </footer>
    )
}