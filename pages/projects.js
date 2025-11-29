// import React, { useEffect, useState } from "react";
import '../src/app/globals.css'
import styles from "../styles/projects.module.css";
import NavBar from "./navigationbar";
import Carousel from './carousel';
import React from "react";

function Projects(){
    const items = [
        { 
            image: "/assets/deep.gif", 
            title: 'Emoji detection XR',
            href: '/assets/deep.gif',
            link: 'https://github.com/angelargd8/DL-project',
            description: 'This project focuses on emotion detection from hand-drawn faces within extended reality (XR) environments. The main goal is to enhance immersive experiences in XR by integrating a convolutional neural network (CNN) model capable of recognizing various emotions (such as happy, sad, angry, surprised, etc.) from drawn emoji faces. The model is trained using a diverse dataset of emoji images and is exported in ONNX format for direct integration into Unity using the Unity Sentis library. This approach allows real-time, on-device inference without relying on external servers, which is crucial for maintaining low latency and a seamless user experience in XR. The solution involves data preprocessing, model training and evaluation (achieving high accuracy), and technical integration with Unity for real-time emotion recognition. The project demonstrates the feasibility of deploying deep learning models locally within XR applications and lays the groundwork for future interactive and educational experiences based on emotion detection',
            imageOnly: true
        },
        { 
            image: "https://i.imgur.com/Hu2NlE7.png", 
            title: 'Only CSS Animation',
            href: 'https://labb4-1.vercel.app/',
            link: 'https://labb4-1.vercel.app/',
            description: 'Animation made with only css with 1 div'
        },
        { 
            image: 'https://i.imgur.com/fjeGW9o.png', 
            title: 'Calculator', 
            href: 'https://labb8.vercel.app/',
            link: 'https://labb8.vercel.app/',
            description: 'Calculator with tests, vitest and jsdom'
        },
        
        { 
            image: 'https://i.imgur.com/05r6T0g.png', 
            title: 'HTML game',
            href: 'https://labb3-dun.vercel.app/',
            link: 'https://labb3-dun.vercel.app/',
            description: 'just HTML game '
        },
        { 
            image: 'https://i.imgur.com/othduAc.png', 
            title: 'Old portfolio',
            href: 'https://portafolio-web-two-amber.vercel.app/',
            link: 'https://portafolio-web-two-amber.vercel.app/',
            description: 'Portfolio I made for the web class'
        },
    ];
    return(
        <>        
        <div className={styles.ContainerProjects}>
            <div className={styles.ContainerTitle}>
                <h1 className={styles.title}>Projects</h1>
            </div>
            <div className={styles.Carousel}>
                <Carousel items = {items} />
            </div>
        </div>

        <NavBar/>
        </>
    )
}

export default Projects;
