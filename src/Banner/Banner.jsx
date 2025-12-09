import React, { useEffect } from 'react'
import styles from "./banner.module.css";
import TypingRoles from './TypingRoles';
import Dharshan from '../assets/Dharshan-gemini.png'

const Banner = () => {

  return (
    <>
    <header id="home" className={styles.header}>
      <div className={styles.container}>
        <div className={styles.headerText}>
          <h1>
            <span>DHARSHAN VK</span>
            {/* <h4>The Wanderlust Person</h4> */}
          </h1>
          <TypingRoles />
        </div>
        <div className={styles.headerImage}>
          <img src={Dharshan} alt="Dharshan" />
        </div>
      </div>
    </header>
    </>
  )
}

export default Banner