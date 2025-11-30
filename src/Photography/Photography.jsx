import React from 'react'
import styles from './photography.module.css'
import img1 from '../assets/Image1.jpg'
import img2 from '../assets/Image2.jpg'
import img3 from '../assets/Image3.jpg'
import img4 from '../assets/Image4.jpg'
import img5 from '../assets/Image5.jpg'
import img6 from '../assets/Image6.jpg'
import img7 from '../assets/Image7.jpg'
import img8 from '../assets/Image8.jpg'
import img9 from '../assets/Image9.jpg'
import img10 from '../assets/Image10.jpg'

const Photography = () => {
  return (
    <>
    <section id="photography" className={styles.photography}>
      <div className="container">
      <div className={styles.titleWrapper}>
        <h1 className={styles.subTitleBack}>MY GALLERY</h1>
        <h1 className={styles.subTitle}>MY GALLERY</h1>
      </div>
      {/* <p className={styles.description}>A showcase of my photography work.</p> */}
        <div className={styles.imageSlider}>
          <div className={styles.row}>
            {[img1, img2, img3, img4, img5, img6, img7, img8, img9, img10].map((src, i) => (
              <img key={i} src={src} alt={`Photo ${i + 1}`} />
            ))}
          </div>
        </div>
        <a href="#" className={styles.btn}>See more..</a>
      </div>
    </section>
    </>
  )
}

export default Photography