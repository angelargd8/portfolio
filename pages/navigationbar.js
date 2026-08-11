"use client";

import styles from "../styles/navigationbar.module.css";
import React, { useState } from "react";
import Link from "next/link";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <button
        className={`${styles.hamburger} ${isOpen ? styles.active : ""}`}
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
      >
        <span />
        <span />
        <span />
      </button>

      {isOpen && (
        <div
          className={styles.backdrop}
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      <div className={`${styles.navbar} ${isOpen ? styles.open : ""}`}>
        <Link href="/#home" onClick={closeMenu}>
          Home
        </Link>
        <Link href="/#aboutme" onClick={closeMenu}>
          About me
        </Link>
        <Link href="/#projects" onClick={closeMenu}>
          Projects
        </Link>
        <Link href="/#skills" onClick={closeMenu}>
          Skills
        </Link>
        <Link href="/#contact" onClick={closeMenu}>
          Contact
        </Link>
      </div>
    </>
  );
}

export default NavBar;
