import Image from 'next/image';
import Link from 'next/link';
import claire from '../assets/musicofclaire.png';
import ccc from '../assets/ccc.png';
import styles from '../styles/Experience.module.css';

export default function Experience() {
    return (
        <div className={styles.container}>
            <h2 className={styles.header}>Professional Experience</h2>
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
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit distinctio error cupiditate itaque aliquid, repellat quisquam vitae perspiciatis consequatur natus magnam blanditiis perferendis placeat, possimus quae incidunt odit? Quia, deleniti!
                    Recusandae impedit repellendus excepturi aperiam nostrum, minus quasi! Quisquam laboriosam nostrum veniam laborum, praesentium eveniet, ad fugiat aperiam quia tempore illo iusto deleniti similique beatae corrupti a veritatis necessitatibus explicabo.
                    Facilis laboriosam ex cumque quis at provident error odit iste molestias? Minima provident explicabo aliquid reprehenderit velit vitae, doloribus distinctio ipsa consequatur obcaecati repellat. Repellendus praesentium cupiditate pariatur corporis doloribus!
                    Ducimus unde, necessitatibus, labore in eaque expedita assumenda quisquam, itaque voluptates earum voluptate minima! Aspernatur praesentium maxime quisquam aut vitae, porro dicta itaque sapiente, nostrum dolore accusamus nemo? Sit, animi.
                    Dignissimos ea quaerat harum necessitatibus! Voluptatem, sed error fuga cupiditate culpa consequuntur quis a quia et nemo modi sequi placeat explicabo corrupti esse suscipit, numquam est rerum excepturi, laboriosam veritatis?</p>
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
                    <h5>Developer</h5>
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit distinctio error cupiditate itaque aliquid, repellat quisquam vitae perspiciatis consequatur natus magnam blanditiis perferendis placeat, possimus quae incidunt odit? Quia, deleniti! Recusandae impedit repellendus excepturi aperiam nostrum, minus quasi! Quisquam laboriosam nostrum veniam laborum, praesentium eveniet, ad fugiat aperiam quia tempore illo iusto deleniti similique beatae corrupti a veritatis necessitatibus explicabo. Facilis laboriosam ex cumque quis at provident error odit iste molestias? Minima provident explicabo aliquid reprehenderit velit vitae, doloribus distinctio ipsa consequatur obcaecati repellat. Repellendus praesentium cupiditate pariatur corporis doloribus! Ducimus unde, necessitatibus, labore in eaque expedita assumenda quisquam, itaque voluptates earum voluptate minima! Aspernatur praesentium maxime quisquam aut vitae, porro dicta itaque sapiente, nostrum dolore accusamus nemo? Sit, animi. Dignissimos ea quaerat harum necessitatibus! Voluptatem, sed error fuga cupiditate culpa consequuntur quis a quia et nemo modi sequi placeat explicabo corrupti esse suscipit, numquam est rerum excepturi, laboriosam veritatis?
                    </p>
                </section>
            </div>
    );
};
