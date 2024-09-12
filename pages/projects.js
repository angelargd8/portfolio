// import React, { useEffect, useState } from "react";
import '../src/app/globals.css'
import styles from "../styles/projects.module.css";
import NavBar from "./navigationbar";
import Image from "next/image";
import Carousel from './carousel';


function Projects(){

    const items = [
        { src: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.nationalgeographic.com%2Fanimals%2Fmammals%2Ffacts%2Fdomestic-dog&psig=AOvVaw1-orEILIYJkmqi2h9YvYZW&ust=1726203240007000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCMDJ26nOvIgDFQAAAAAdAAAAABAE', alt: 'Slide 1' },
        { src: 'https://via.placeholder.com/600x400', alt: 'Slide 2' },
        { src: 'https://via.placeholder.com/600x400', alt: 'Slide 3' },
    ];

    return(
        <>        
        <div className={styles.ContainerTitle}>
              <h1 className={styles.title}>Projects</h1>
        </div>
        {/*hacer carousel*/}
        <div className={styles.Carousel}>
            <Carousel items = {items} />
        </div>

        <NavBar/>
        </>
    )
}

export default Projects;