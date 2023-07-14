import Image from 'next/image';
import Link from 'next/link';
import avatar from '../assets/avatar-removebg-preview.png';
import styles from '../styles/Home.module.css';
import { IoLogoLinkedin, IoLogoGithub, IoMdPin } from "react-icons/io";
import { SiReact, SiTypescript, SiJavascript, SiNodedotjs, SiHtml5, SiCss3, SiExpress, SiPostgresql, SiGithub, SiGit, SiNextdotjs } from "react-icons/si";


export default function Home() {
  return (
    <div className={styles.main}>
      <div className={styles.info}>
        <Image
          alt="Avatar"
          src={avatar}
          className={styles.avatar}
        />
        <div className={styles.basic}>
          <h1>Amanda Godsey</h1>
          <h3>Full Stack Web Developer</h3>

          <div className={styles.social}>
            <Link href="https://www.linkedin.com/in/amanda-godsey/">
              <IoLogoLinkedin />
            </Link>
            <Link href="https://github.com/mander-pander">
            <IoLogoGithub />
            </Link>
          </div>

          <h5 className={styles.location}><IoMdPin /> Sacramento, CA</h5>
        </div>

      </div>
      <div className={styles.skillContainer}>
        <h3 className={styles.title}>Skills</h3>
        <div className={styles.skills}>
          <p><SiReact /> React</p>
          <p><SiNextdotjs /> Next.js</p>
          <p><SiTypescript /> Typescript</p>
          <p><SiJavascript /> Javascript</p>
          <p><SiNodedotjs /> Node.js</p>
          <p><SiHtml5 /> HTML</p>
          <p><SiCss3 /> CSS</p>
          <p><SiExpress /> Express.js</p>
          <p><SiPostgresql /> PostgreSQL</p>
          <p><SiGit /> Git</p>
          <p><SiGithub /> Github</p>
        </div>
      </div>

    </div>
  )
}
