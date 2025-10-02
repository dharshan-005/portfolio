// import React from 'react'
import { useState } from "react";
import styles from "./navbar.module.css";
import logo from "../assets/LOGO6.png";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    
  return (
    <>
    <nav className={styles.nav}>

        <a className={styles.brand} href="#"><img src={logo} alt="Logo" className={styles.logo} /></a>

        { !open && (
          <i className="fa-solid fa-bars" onClick={() => setOpen(true)}></i>
        )} 

        <ul className={`${styles.menu} ${open ? styles.show : ""}`} id="sidemenu">
            <li><a href="#header">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#photography">My Gallery</a></li>
            <li><a href="#contact">Contact</a></li>
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