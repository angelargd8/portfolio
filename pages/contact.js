// import React, { useEffect, useState } from "react";
import '../src/app/globals.css'
import styles from "../styles/contact.module.css";
import NavBar from "./navigationbar";
import Image from "next/image";


function Contact(){
    return(
        <>        
        <div className={styles.ContainerContact}>
        </div> 
        <div className={styles.Container}>
            <div className={styles.ContainerTitle}>
                <h1 className={styles.title}>Contact</h1>
            </div>
            
            <div className={styles.ContainerImagen}>&nbsp;
            <Image
              src="/pics/173.jpeg"
              alt="imagen"
              layout="responsive"
              width={800}
              height={80}
              className={styles.animatedImage}
            ></Image>
            </div> 
        </div>
            
        <NavBar/>
        </>
    )
}

export default Contact;