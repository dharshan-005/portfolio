// import React from 'react'
import { useEffect, useState } from "react";
import styles from "./navbar.module.css";
import logo from "../assets/logo.png";
import resume from "../assets/resume_35.pdf"

const sections = ["header", "about", "services", "projects", "contact"];

const Navbar = () => {
  const [open, setOpen] = useState(false);

   const [activeSection, setActiveSection] = useState("header");


  useEffect(() => {
    const handleScroll = () => {
      let current = "header";
      sections.forEach((sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
          const { top } = section.getBoundingClientRect();
          if (top <= window.innerHeight / 2) {
            current = sectionId;
          }
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
    <nav className={styles.nav}>
      <a className={styles.brand} href="#"><img src={logo} alt="Logo" className={styles.logo} /></a>

      { !open && (
        <i className="fa-solid fa-bars" onClick={() => setOpen(true)}></i>
      )} 

      <ul className={`${styles.menu} ${open ? styles.show : ""}`} id="sidemenu">
      
        {sections.map((id) => (
        
        <li key={id}>
          <a href={`#${id}`} className={activeSection === id ? styles.active : ""}>
            {id.charAt(0).toUpperCase() + id.slice(1)}
          </a>
        </li>
        ))}
        
        <hr />

        <div className={styles.resume}>
          <button className={styles.btn}><a href={resume} >Resume</a></button>
        </div>

        {open && (
          <i className="fa-solid fa-xmark" onClick={() => setOpen(false)}></i>
        )} 
      </ul>
    </nav>
    </>
  )
}

export default Navbar