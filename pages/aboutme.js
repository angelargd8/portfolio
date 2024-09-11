// import React, { useEffect, useState } from "react";
import '../src/app/globals.css'
import styles from "../styles/aboutme.module.css";
import NavBar from "./navigationbar";
import Image from "next/image";


function Aboutme(){
    return(
        <>
        <div className={styles.Container} >
            <div className={styles.ContainerText}>
                <div className={styles.ContainerOfContainerTitle}>
                    <div className={styles.ContainerTitle}>
                        <h1 className={styles.title}>About me</h1>
                    </div>
                    <div className={styles.Info}>
                        <h1 className={styles.subtitle} >¡Hola! Soy</h1>
                        <h1 className={styles.subtitle}>Angela Garcia</h1>
                        <h3 className={styles.subtitle}>Estudiante de CS</h3>  
                        <p className={styles.AboutmeInfo}>
                            Estoy en tercer año en la carrera de 
                            ciencias de la computación en la UVG. En este portafolio 
                            se puede encontrar mis recientes proyectos e información
                            de contacto.
                            Acerca de mis hobbies, me gusta escribir poesía, escuchar
                            música y aprender nuevas cosas.

                        </p>

                    </div>
                </div>

            </div>
            
        
            <Image
              src="/pics/91.jpg"
              alt="imagen"
              layout="responsive"
              width={800}
              height={80}
              className={styles.animatedImage}
              ></Image>

        </div>
        
        <NavBar/>
        </>
    )
}

export default Aboutme;