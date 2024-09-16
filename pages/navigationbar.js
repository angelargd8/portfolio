import '../src/app/globals.css'
import styles from "../styles/navigationbar.module.css";
import React from "react";
import Link from 'next/link';

function NavBar(){
    return(
        <>
        <div className={styles.navbar} >
          <Link href="/">Home</Link>
          <Link href="/aboutme">About me</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/skills">Skills</Link>
          <Link href="/contact">Contact</Link>

        </div>
        </>
    )
}

export default NavBar;