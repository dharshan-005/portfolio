import React from 'react'
import styles from './projects.module.css'
import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.png'
import img4 from '../assets/img4.png'
// import img5 from '../assets/img5.png'
import img6 from '../assets/img6.png'

const Projects = () => {
  return (
    <>
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <div className={styles.titleWrapper}>
          <h1 className={styles.subTitleBack}>PROJECTS</h1>
          <h1 className={styles.subTitle}>PROJECTS</h1>
        </div>
        <div className={styles.workList}>
          {[ 
            { img: img1, title: "Hira", desc: "Personal Japanese learning website." },
            { img: img2, title: "Login Page", desc: "Sample design for login page", link: 'https://github.com/dharshan-005/Login-Page.git' },
            { img: img3, title: "JioCinema Clone", desc: "Front-end clone of JioCinema" },
            { img: img6, title: "IRCTC - Redesign", desc: "Front-end redesign of IRCTC website", link: "https://github.com/dharshan-005/IRCTC-redesign.git" },
            { img: img4, title: "Contact Form", desc: "Sample contact form (via Gmail)", link: 'https://github.com/dharshan-005/Contact-Form.git' },
            // { img: img5, title: "Perfumy", desc: "Sample perfume website" }
          ].map((p, idx) => (
            <div key={idx} className={styles.work}>
              <img src={p.img} alt={p.title} />
              <div className={styles.layer}>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <a href={p.link} target='_blank' rel='noopener norefferer'><i className="fa-brands fa-github"></i></a>
              </div>
            </div>
          ))}
        </div>
        {/* <a href="#" className={styles.btn}>See more..</a> */}
      </div>
    </section>
    </>
  )
}

export default Projects