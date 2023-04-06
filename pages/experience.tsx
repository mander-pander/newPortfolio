import Image from 'next/image';
import Link from 'next/link';
import claire from '../assets/musicofclaire.png';
import ccc from '../assets/sina-bahar-7DTLIXke_0c-unsplash.jpg';
import styles from '../styles/Experience.module.css';

export default function Experience() {
    return (
        <>
            <h2>Professional Experience</h2>
            <div className={styles.container}>
                <section className={styles.card}>
                    <h4>Citizens Coal Council</h4>
                    <h5>Volunteer</h5>
                    <Link href="https://images.unsplash.com/photo-1679239463367-cf07e9491e8d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80">
                        <Image
                            alt="Homepage for Citizens Coal Council"
                            src={ccc}
                            width='500'
                            height='500'
                        />
                    </Link>
                </section>
                <section className={styles.card}>
                    <h4>The Music of Claire</h4>
                    <h5>Developer</h5>
                    <Link href="https://www.themusicofclaire.com/">
                        <Image
                            alt="Homepage for The Music of Claire"
                            src={claire}
                            className={styles.card_image}
                        />
                    </Link>
                </section>
            </div>
        </>
    );
};
