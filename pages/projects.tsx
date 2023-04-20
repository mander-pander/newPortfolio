import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Projects.module.css';
import birthdayStart from '../assets/balloonStart.png';
import welcome from '../assets/welcome.png';
import bob from '../assets/loginPage.png';
import rc from '../assets/RC-Social Login.png';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Projects () {
    return (
        <div className={styles.container}>
            <h2 className={styles.header}>Projects</h2>
            <section className={styles.card}>
                <Carousel>
                    <div>
                        <Image
                            alt=""
                            src={welcome}
                            className={styles.card_image}
                        />
                        <p>balloon start page</p>
                    </div>
                    <div>
                        <Image
                            alt=""
                            src={birthdayStart}
                            className={styles.card_image}
                        />
                        <p>home page</p>
                    </div>
                </Carousel>
                <Link href="https://birthday-extravaganza.netlify.app/" target="_blank">
                    Link to live site.
                </Link>
                <h2>Birthday Extravaganza</h2>
                <ul>
                    <li>filler</li>
                    <li>more filler</li>
                </ul>
            </section>
            <section className={styles.card}>
                <Carousel>
                    <div>
                        <Image
                            alt="RC-Social Home Page"
                            src={rc}
                            className={styles.card_image}
                        />
                        <p className={styles.picDesc}>RC-Social Login Page</p>
                    </div>
                    <div>

                    </div>
                </Carousel>
                <Link href="https://github.com/mander-pander/rc-social" target="_blank">
                    Link to Github Repo
                </Link>
                <h2>RC-Social</h2>
                <ul>
                    <li>Allows users to safely create accounts, socialize with other rc airplane enthusiasts, filter through airfields and save airplane models to a private wishlist for safekeeping</li>
                    <li>Technologies used: React, Node.js, Express.js, Axios, PostgreSQL, Bootstrap, CSS Modules, bcrypt, JSON Web Token</li>
                </ul>
            </section>
            <section className={styles.card}>
                <Carousel>
                    <div>
                    <Image
                        alt="Login Page"
                        src={bob}
                        className={styles.card_image}
                    />
                    <p>Login Page</p>
                    </div>
                    <div>

                    </div>
                </Carousel>
                <Link href="https://github.com/mander-pander/bobsBurgers" target="_blank">
                    Link to Github Repo
                </Link>
                <h2>Bob`s Burgers Generator</h2>
                <ul>
                    <li>Allows users to create accounts and search through the available characters and burgers of the day from the show Bob`s Burgers</li>
                    <li>Interactive site that allows users to save favorites from each category</li>
                    <li>Technologies used: HTML/CSS, JS, PostgreSQL and Express</li>
                </ul>
            </section>

        </div>
    )
}
