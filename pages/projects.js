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
            image: "/assets/microcuenca.png", 
            title: "Microcuenca's Website",
            href: 'https://microcuencasdeploy-rai6ygiw3-marchmols-projects-04a83ad4.vercel.app/',
            link: 'https://microcuencasdeploy-rai6ygiw3-marchmols-projects-04a83ad4.vercel.app/',
            description: 'The Comprehensive Evaluation Project for the Contreras Micro-Watershed is an interdisciplinary initiative dedicated to water and environmental conservation. At “Save the Micro-Watershed”, we are a passionate team of ecologists, educators, and volunteers committed to protecting these vital ecosystems that sustain life on Earth. As part of this mission, I coordinated the computing team responsible for designing and developing our modern web platform using Next.js. This platform enables us to share knowledge, organize collaborative efforts, and inspire collective action to safeguard micro-watersheds for future generations.',
            imageOnly: true
        },
        { 
            image: "", 
            title: 'Expiration Date',
            href: 'https://youtu.be/n4asfQivXko?si=BcZoS0Fu5dHP0_OJ',
            link: 'https://github.com/angelargd8/ExpirationDate',
            description: 'This project implements the new system event in Unity, scriptable objects, animator controller, scene management, object pooling \n DEMO: https://angelargd8.itch.io/expirationdate'
        },
        { 
            image: "", 
            title: 'Sleep Simulator',
            href: 'https://www.youtube.com/embed/VnwY8vEvdms?si=HCY1MxITWuAmrToA',
            link: 'https://github.com/angelargd8/SleepSimulator',
            description: 'This project is a game, utilizing object pooling, bootstraper and scene management in Unity'
        },
        { 
            image: "", 
            title: 'B-rush',
            href: 'https://www.youtube.com/embed/Xg_iSiYMsZo',
            link: 'https://github.com/angelargd8/B-rush',
            description: 'This project is a game and uses save and load system'
        },
        { 
            image: "", 
            title: 'SneakRush',
            href: 'https://www.youtube.com/embed/qNrtTjbpsJs',
            link: 'https://github.com/angelargd8/SneakRush',
            description: 'This project is a game and uses scriptable objects'
        },
        { 
            image: "", 
            title: 'MazeRush',
            href: 'https://www.youtube.com/embed/uYraQ0wTaW4?si=E66TuBAvd_HwOHTw',
            link: 'https://github.com/angelargd8/MazeRush',
            description: 'This project is a game and uses the animator controller in Unity'
        },

        
        { 
            image: "", 
            title: 'Remote Server MCPs Chatbot',
            href: 'https://www.youtube.com/embed/c710uRN_phY',
            link: 'https://github.com/angelargd8/proyecto1-redes',
            description: 'This project implements a CLI chatbot that acts as an MCP host and connects to multiple MCP servers (tools) to perform real actions: create and manage local Git repositories, read/write the filesystem, verify and fix grammar , and explore YouTube trends. The chatbot uses an LLM to understand natural-language prompts and trigger tool calls automatically.'
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
