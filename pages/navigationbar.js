"use client";

import styles from "../styles/navigationbar.module.css";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const navItems = [
  { id: "home", label: "Home" },
  { id: "aboutme", label: "About me" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);
  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
    closeMenu();
  };

  useEffect(() => {
    const validIds = new Set(navItems.map((item) => item.id));

    const updateFromLocation = () => {
      const hashId = window.location.hash.replace("#", "");
      const pathId = window.location.pathname.replace("/", "") || "home";

      if (validIds.has(hashId)) {
        setActiveSection(hashId);
        return;
      }

      if (validIds.has(pathId)) {
        setActiveSection(pathId);
      }
    };

    updateFromLocation();
    window.addEventListener("hashchange", updateFromLocation);

    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    if (!sections.length) {
      return () => window.removeEventListener("hashchange", updateFromLocation);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry?.target.id) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      { threshold: [0.35, 0.55, 0.75] }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      window.removeEventListener("hashchange", updateFromLocation);
      observer.disconnect();
    };
  }, []);

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
        {navItems.map((item) => (
          <Link
            key={item.id}
            href={`/#${item.id}`}
            onClick={() => handleNavClick(item.id)}
            className={activeSection === item.id ? styles.activeLink : ""}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </>
  );
}

export default NavBar;
