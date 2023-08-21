import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Projects.module.css';
import birthdayStart from '../assets/balloonStart.png';
import bob from '../assets/loginPage.png';
import newProj from '../assets/knitting-app/new-project.jpg';
import rc from '../assets/RC-Social Login.png';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Projects () {
    return (
        <div className={styles.container}>
            <h2 className={styles.header}>Projects</h2>
            <section className={styles.card}>
                            <Image
                                alt="add project page"
                                src={newProj}
                                className={styles.card_image}
                            />
                <h2>Stitch N Track</h2>
                <ul>

                </ul>

            </section>

            <hr className={styles.divider}></hr>

            <section className={styles.card}>
                            <Image
                                alt="balloon game start"
                                src={birthdayStart}
                                className={styles.card_image}
                            />
                <Link href="https://birthday-extravaganza.netlify.app/" target="_blank">
                    Link to live site.
                </Link>
                <h2>Birthday Extravaganza</h2>
                <ul>
                    <li>
                        Developed a series of games utilizing React to have a special birthday celebration
                    </li>
                    <li>
                        React hooks allow for a seamless user experience by allowing state to be passed through the application in the form of props
                    </li>
                    <li>
                        Created animations with the use of animation package GSAP
                    </li>
                </ul>
            </section>

            <hr className={styles.divider}></hr>

            <section className={styles.card}>
                        <Image
                            alt="RC-Social Home Page"
                            src={rc}
                            className={styles.card_image}
                        />
                <Link href="https://github.com/mander-pander/rc-social" target="_blank">
                    Link to Github Repo
                </Link>
                <h2>RC-Social</h2>
                <ul>
                    <li>Allows users to safely create accounts, socialize with other rc airplane enthusiasts, filter through airfields and save airplane models to a private wishlist for safekeeping</li>
                    <li>Technologies used: React, Node.js, Express.js, Axios, PostgreSQL, Bootstrap, CSS Modules, bcrypt, JSON Web Token</li>
                </ul>
            </section>

            <hr className={styles.divider}></hr>
            
            <section className={styles.card}>
                    <Image
                        alt="Login Page"
                        src={bob}
                        className={styles.card_image}
                    />
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
