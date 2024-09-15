// import React, { useEffect, useState } from "react";
import '../src/app/globals.css'
import styles from "../styles/contact.module.css";
import Circles from './circles';
import NavBar from "./navigationbar";


function Contact(){
    const items = [
        { 
            image: "https://i.imgur.com/H6s5s3m.png", 
            title: 'LinkedIn',
            href: 'https://www.linkedin.com/in/angelargd8/'
        },
        { 
            image: 'https://i.imgur.com/6WpjMPa.png', 
            title: 'Github', 
            href: 'https://github.com/angelargd8/' 
        },
        
        { 
            image: 'https://i.imgur.com/CTFNCIO.png', 
            title: 'gmail',
            href: 'mailto:angelargd8@gmail.com'
        },
        { 
            image: 'https://i.imgur.com/TsNKcWJ.png', 
            title: 'instagram',
            href: 'https://www.instagram.com/angelargd8/'
        },
    ];
    return(
        <>        
        <div className={styles.ContainerContact}>
        
            <div className={styles.Container}>
                <div className={styles.ContainerTitle}>
                    <h1 className={styles.title}>Contact</h1>
                </div>
                <div className={styles.ContainerObjects}>
                    {/* <p className={styles.text}>
                            Feel free to reach out to me through
                            any of the following platforms:
                    </p> */}
                    <Circles items = {items} />
                </div>
            </div>
        </div> 
        <NavBar/>
        </>
    )
}

export default Contact;