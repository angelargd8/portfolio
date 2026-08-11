import styles from "../styles/aboutme.module.css";
import NavBar from "./navigationbar";
import Image from "next/image";
import React from "react";

function Aboutme({ showNav = true }){
    return(
        <>
        <div className={styles.Container} >
            <div className={styles.ContainerText}>
                <div className={styles.ContainerOfContainerTitle}>
                    <div className={styles.ContainerTitle}>
                        <h1 className={styles.title}>About me</h1>
                    </div>
                    <div className={styles.Info}>
                        <h1 className={styles.subtitle} >¡Hi! I&apos;m</h1>
                        <h1 className={styles.subtitle}>Angela Garcia</h1>
                        <h3 className={styles.subtitle}>CS Student</h3>  
                        <p className={styles.AboutmeInfo}>
                        I am in my fifth year of the Computer Science program at UVG.
                        In this portfolio, you can find my recent projects and contact information. 
                        Regarding my hobbies, I enjoy writing poetry, listening to music, 
                        and learning new things.
                        </p>

                    </div>
                </div>

            </div>
            
            <div className={styles.Bar}>
            <Image
              src="/pics/2.jpeg"
              alt="imagen"
              layout="responsive"
              width={800}
              height={80}
              className={styles.animatedImage}
              ></Image>
            </div>

        </div>
        
        {showNav && <NavBar/>}
        </>
    )
}

export default Aboutme;
