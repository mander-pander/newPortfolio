import Image from 'next/image';
import Link from 'next/link';
import claire from '../assets/musicofclaire.png';
import ccc from '../assets/ccc.png';
import ghi from '../assets/GHIhome.png';
import styles from '../styles/Experience.module.css';

export default function Experience() {
    return (
        <div className={styles.container}>
            <h2 className={styles.header}>Professional Experience</h2>
                <section className={styles.card}>
                    <Link href="https://gardensforhealth.org/" target="_blank">
                        <Image
                            alt="Homepage for Gardens For Health"
                            src={ghi}
                            className={styles.card_image}
                            />
                    </Link>
                    <h4>Gardens for Health International</h4>
                    <h5>Volunteer</h5>
                    <ul>
                        <li>lalalalala</li>
                        <li>lalalala</li>
                        <li>lalalalala</li>
                    </ul>
                </section>
                <section className={styles.card}>
                    <Link href="https://www.citizenscoalcouncil.org/" target="_blank">
                        <Image
                            alt="Homepage for Citizens Coal Council"
                            src={ccc}
                            className={styles.card_image}
                            />
                    </Link>
                    <h4>Citizens Coal Council</h4>
                    <h5>Volunteer</h5>
                    <ul>
                        <li>Created a new eye-catching and aesthetic design to help drive donations and membership</li>
                        <li>Increased traffic and engagement through improved user experience and SEO</li>
                        <li>Provided training to organization leaders on how to update crucial content for members</li>
                    </ul>
                </section>
                <section className={styles.card}>
                    <Link href="https://www.themusicofclaire.com/" target="_blank">
                        <Image
                            alt="Homepage for The Music of Claire"
                            src={claire}
                            className={styles.card_image}
                            />
                    </Link>
                    <h4>The Music of Claire</h4>
                    <h5>Web Developer</h5>
                    <ul>
                        <li>Communicated with client to design an application to fit their needs</li>
                        <li>Utilized HTML, CSS, Javascript, and Bootstrap to build a responsive application depicting client’s unique brand</li>
                        <li>Maintained frequent communication to ensure timeframe of project completion remain on target</li>
                        <li>Performed search engine optimization research to enhance page ranking of client</li>
                    </ul>
                </section>
            </div>
    );
};
