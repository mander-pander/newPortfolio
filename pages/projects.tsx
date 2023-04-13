import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Projects.module.css';
import birthdayStart from '../assets/balloonStart.png';
import bob from '../assets/loginPage.png';

export default function Projects () {
    return (
        <div className={styles.container}>
            <h2 className={styles.header}>Projects</h2>
            <section className={styles.card}>
                <Link href="https://birthday-extravaganza.netlify.app/" target="_blank">
                    <Image
                        alt="Homepage for Birthday Extravaganza"
                        src={birthdayStart}
                        className={styles.card_image}
                    />
                </Link>
                <h4>Birthday Extravaganza</h4>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit distinctio error cupiditate itaque aliquid, repellat quisquam vitae perspiciatis consequatur natus magnam blanditiis perferendis placeat, possimus quae incidunt odit? Quia, deleniti!
                    Recusandae impedit repellendus excepturi aperiam nostrum, minus quasi! Quisquam laboriosam nostrum veniam laborum, praesentium eveniet, ad fugiat aperiam quia tempore illo iusto deleniti similique beatae corrupti a veritatis necessitatibus explicabo.
                    Facilis laboriosam ex cumque quis at provident error odit iste molestias? Minima provident explicabo aliquid reprehenderit velit vitae, doloribus distinctio ipsa consequatur obcaecati repellat. Repellendus praesentium cupiditate pariatur corporis doloribus!
                    Ducimus unde, necessitatibus, labore in eaque expedita assumenda quisquam, itaque voluptates earum voluptate minima! Aspernatur praesentium maxime quisquam aut vitae, porro dicta itaque sapiente, nostrum dolore accusamus nemo? Sit, animi.
                    Dignissimos ea quaerat harum necessitatibus! Voluptatem, sed error fuga cupiditate culpa consequuntur quis a quia et nemo modi sequi placeat explicabo corrupti esse suscipit, numquam est rerum excepturi, laboriosam veritatis?
                </p>
            </section>
            <section className={styles.card}>
                <Link href="https://github.com/mander-pander/bobsBurgers" target="_blank">
                    <Image
                        alt="Github Repo for Bob's Burger Project"
                        src={bob}
                        className={styles.card_image}
                    />
                </Link>
                <h4>Bob`s Burgers Generator</h4>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit distinctio error cupiditate itaque aliquid, repellat quisquam vitae perspiciatis consequatur natus magnam blanditiis perferendis placeat, possimus quae incidunt odit? Quia, deleniti!
                    Recusandae impedit repellendus excepturi aperiam nostrum, minus quasi! Quisquam laboriosam nostrum veniam laborum, praesentium eveniet, ad fugiat aperiam quia tempore illo iusto deleniti similique beatae corrupti a veritatis necessitatibus explicabo.
                    Facilis laboriosam ex cumque quis at provident error odit iste molestias? Minima provident explicabo aliquid reprehenderit velit vitae, doloribus distinctio ipsa consequatur obcaecati repellat. Repellendus praesentium cupiditate pariatur corporis doloribus!
                    Ducimus unde, necessitatibus, labore in eaque expedita assumenda quisquam, itaque voluptates earum voluptate minima! Aspernatur praesentium maxime quisquam aut vitae, porro dicta itaque sapiente, nostrum dolore accusamus nemo? Sit, animi.
                    Dignissimos ea quaerat harum necessitatibus! Voluptatem, sed error fuga cupiditate culpa consequuntur quis a quia et nemo modi sequi placeat explicabo corrupti esse suscipit, numquam est rerum excepturi, laboriosam veritatis?
                </p>
            </section>

        </div>
    )
}
