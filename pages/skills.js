// import React, { useEffect, useState } from "react";
import '../src/app/globals.css'
import styles from "../styles/projects.module.css";
import NavBar from "./navigationbar";
import Image from "next/image";


function Skills(){
    return(
        <>        
        <div className={styles.ContainerTitle}>
              <h1 className={styles.title}>Skills</h1>
        </div>
        <NavBar/>
        </>
    )
}

export default Skills;