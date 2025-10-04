// import React from 'react'
import { useEffect, useState } from "react";
import styles from "./navbar.module.css";
import logo from "../assets/LOGO6.png";
import resume from "../assets/resume_35.pdf"

const sections = ["header", "about", "services", "projects", "photography", "contact"];

const Navbar = () => {
    const [open, setOpen] = useState(false);

    // const [active, setActive] = useState(window.location.hash || "#header")

    // useEffect(() => {
    //   const onHashChange = () => setActive(window.location.hash || "#header");
    //   window.addEventListener("hashchange", onhashchange);
    //   return () => window.removeEventListener("hashchange", onhashchange);
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
            {/* <li>
              <a href="#header" className={active === "#header" ? styles.active : ""}>Home</a>
            </li>
            <li>
              <a href="#about" className={active === "#about" ? styles.active : ""}>About</a>
            </li>
            <li>
              <a href="#services" className={active === "#services" ? styles.active : ""}>Services</a>
            </li>
            <li>
              <a href="#projects" className={active === "#projects" ? styles.active : ""}>Projects</a>
            </li>
            <li>
              <a href="#photography" className={active === "#photography" ? styles.active : ""}>My Gallery</a>
            </li>
            <li>
              <a href="#contact" className={active === "#contact" ? styles.active : ""}>Contact</a>
            </li> */}
            {/* (<i className="fa-solid fa-xmark" onClick={() => setOpen(false)}></i> ) */}
            {/* {open ? (<i className="fa-solid fa-xmark" onClick={() => setOpen(false)}></i> ) : ( <i className="fa-solid fa-bars" onClick={() => setOpen(true)}></i> )} */}
            {open && (
              <i className="fa-solid fa-xmark" onClick={() => setOpen(false)}></i>
            )} 
        </ul>
      </nav>
      </>
  )
}

export default Navbar