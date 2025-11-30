import React from 'react'
import styles from './services.module.css'

const Services = () => {
  return (
    <>
    <section id="services" className={styles.services}>
      <div className="container">
        <div className={styles.titleWrapper}>
          <h1 className={styles.subTitleBack}>MY SERVICES</h1>
          <h1 className={styles.subTitle}>MY SERVICES</h1>
        </div>
        
        <div className={styles.servicesList}>
          <div>
            <i className="fa-solid fa-code"></i>
            <h2>Web Development</h2>
            <p>
              <li>Custom website design & development</li>
              <li>Responsive & mobile-friendly websites</li>
            </p>
            {/* <a href="#">Learn More</a> */}
          </div>
          <div>
            <i className="fa-solid fa-crop-simple"></i>
            <h2>UI/UX Design</h2>
            <p>
              <li>User-friendly interfaces</li>
              <li>Design system creation</li>
            </p>
            {/* <a href="#">Learn More</a> */}
          </div>
          <div>
            <i className="fa-solid fa-camera"></i>
            <h2>Photography</h2>
            <p>
              <li>Nature Photography</li>
              <li>Freelancing</li>
            </p>
            {/* <a href="#">Learn More</a> */}
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Services