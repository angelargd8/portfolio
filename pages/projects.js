// import React, { useEffect, useState } from "react";
import '../src/app/globals.css'
import styles from "../styles/projects.module.css";
import NavBar from "./navigationbar";
import Image from "next/image";


function Projects(){
    return(
        <>        
        <div className={styles.ContainerTitle}>
              <h1 className={styles.title}>Projects</h1>
        </div>
        <NavBar/>
        </>
    )
}

export default Projects;