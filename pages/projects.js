// import React, { useEffect, useState } from "react";
import '../src/app/globals.css'
import styles from "../styles/projects.module.css";
import NavBar from "./navigationbar";
import Image from "next/image";
import Carousel from './carousel';


function Projects(){
    const items = [
        { image: 'https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_3x2.jpg', title: 'Slide 1', href:'https://www.akc.org/wp-content/uploads/2018/05/Three-Australian-Shepherd-puppies-sitting-in-a-field.jpg' },
        { image: 'https://d3544la1u8djza.cloudfront.net/APHI/Blog/2021/07-06/small+white+fluffy+dog+smiling+at+the+camera+in+close-up-min.jpg', title: 'Slide 2' },
        { image: 'https://www.akc.org/wp-content/uploads/2018/05/Three-Australian-Shepherd-puppies-sitting-in-a-field.jpg', title: 'Slide 3' },
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