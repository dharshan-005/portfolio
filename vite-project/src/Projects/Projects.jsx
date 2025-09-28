import React from 'react'
import styles from './projects.module.css'
import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.png'
import img4 from '../assets/img4.png'
import img5 from '../assets/img5.png'

const Projects = () => {
  return (
    <>
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <div className={styles.subTitle}>My Projects</div>
        <div className={styles.workList}>
          {[ 
            { img: img1, title: "Register Form", desc: "Sample design for register website" },
            { img: img2, title: "Login Page", desc: "Sample design for login page" },
            { img: img3, title: "JioCinema Clone", desc: "Front-end clone of JioCinema" },
            { img: img4, title: "Contact Form", desc: "Sample contact form (via Gmail)" },
            { img: img5, title: "Perfumy", desc: "Sample perfume website" }
          ].map((p, idx) => (
            <div key={idx} className={styles.work}>
              <img src={p.img} alt={p.title} />
              <div className={styles.layer}>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <a href="#"><i className="fa-brands fa-github"></i></a>
              </div>
            </div>
          ))}
        </div>
        <a href="#" className={styles.btn}>See more..</a>
      </div>
    </section>
    </>
  )
}

export default Projects