// import React, { useEffect, useState } from "react";
import '../src/app/globals.css'
import styles from "../styles/projects.module.css";
import NavBar from "./navigationbar";
import Carousel from './carousel';
import React from "react";


function Projects(){
    const items = [
        { 
            image: "https://i.imgur.com/Hu2NlE7.png", 
            title: 'Only CSS Animation',
            href: 'https://labb4-1.vercel.app/'
        },
        { 
            image: 'https://i.imgur.com/fjeGW9o.png', 
            title: 'Calculator with tests, vitest and jsdom', 
            href: 'https://labb8.vercel.app/' 
        },
        
        { 
            image: 'https://i.imgur.com/05r6T0g.png', 
            title: 'HTML game',
            href: 'https://labb3-dun.vercel.app/'
        },
        { 
            image: 'https://i.imgur.com/othduAc.png', 
            title: 'Old portfolio',
            href: 'https://portafolio-web-two-amber.vercel.app/'
        },
    ];
    return(
        <>        
        <div className={styles.ContainerTitle}>
              <h1 className={styles.title}>Projects</h1>
        </div>
        <div className={styles.Carousel}>
            <Carousel items = {items} />
        </div>

        <NavBar/>
        </>
    )
}

export default Projects;