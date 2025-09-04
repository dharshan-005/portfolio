import React from 'react'
import styles from "./header.module.css";

const Header = () => {
  return (
    <>
    <header id="header" className={styles.header}>
      <div className="container">
        <div className={styles.headerText}>
          <p>FullStack Developer | Photographer | UI/UX Designer</p>
          <h1>
            Hi, I'm <span>Dharshan VK</span>
            <h4>The Wanderlust Person</h4>
          </h1>
        </div>
      </div>
    </header>
    </>
  )
}

export default Header