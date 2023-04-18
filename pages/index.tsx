import Image from 'next/image';
import avatar from '../assets/avatar-removebg-preview.png';
import styles from '../styles/Home.module.css';
import { IoLogoLinkedin, IoLogoGithub, IoMdPin } from "react-icons/io";
import { SiReact, SiTypescript, SiJavascript, SiNodedotjs, SiHtml5, SiCss3, SiExpress, SiPostgresql, SiGithub, SiGit, SiNextdotjs } from "react-icons/si";


export default function Home() {
  return (
    <div className={styles.main}>
      <Image
        alt="Homepage for Birthday Extravaganza"
        src={avatar}
        className={styles.avatar}
      />

      <h1>Amanda Godsey</h1>
      <h3>Full Stack Web Developer</h3>
      <div>
        <IoLogoLinkedin />
        <IoLogoGithub />
      </div>
      <h5><IoMdPin /> Sacramento, CA</h5>

      <section className={styles.skills}>
        <SiReact />
        <SiNextdotjs />
        <SiTypescript />
        <SiJavascript />
        <SiNodedotjs />
        <SiHtml5 />
        <SiCss3 />
        <SiExpress />
        <SiPostgresql />
        <SiGit />
        <SiGithub />
      </section>

    </div>
  )
}
