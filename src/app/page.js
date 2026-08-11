"use client";

import Image from "next/image";
import styles from "./page.module.css";
import NavBar from "../../pages/navigationbar";
import Aboutme from "../../pages/aboutme";
import Projects from "../../pages/projects";
import Skills from "../../pages/skills";
import Contact from "../../pages/contact";
import React from "react";


export default function Home() {
  return (
    <div className={styles.page}>
      <NavBar/>
      <div className={styles.scrollContainer}>
        <section id="home" className={`${styles.section} ${styles.homeSection}`}>
          <main className={styles.main}>
            <div className={styles.ContainerImagen}>&nbsp;
            <Image
              src="/pics/4.jpg"
              alt="imagen"
              layout="fill"
              className={styles.animatedImage}
              ></Image>
            </div>
            <div className={styles.ContainerTitle}>
              <h1 className={styles.title}>Angela</h1>
              <h1 className={styles.title}>Garcia.</h1> 
            </div>
          </main>
        </section>
        <section id="aboutme" className={styles.section}>
          <Aboutme showNav={false} />
        </section>
        <section id="projects" className={styles.section}>
          <Projects showNav={false} />
        </section>
        <section id="skills" className={styles.section}>
          <Skills showNav={false} />
        </section>
        <section id="contact" className={styles.section}>
          <Contact showNav={false} />
        </section>
      </div>
      
    </div>
  );
}
