import { useState } from 'react'
import styles from "./about.module.css";
import aboutImg from "../assets/me1.jpg";

const About = () => {
  const [activeTab, setActiveTab] = useState("skills");

  return (
    <>
    <section id="about" className={styles.about}>
      <div className="container">
        <div className={styles.row}>
          {/* <div className={styles.aboutCol1}>
            <img src={aboutImg} alt="About Dharshan" />
            </div> */}
          <div className={styles.aboutCol2}>
            <h1 className={styles.subTitle}>ABOUT ME</h1>
            <p className={styles.intro}>
              I'm <strong>Dharshan VK</strong>. I am a dedicated and ambitious individual pursuing a B.E. in
              Electronics and Communication Engineering (ECE) with a strong
              passion for Web Development...
            </p>
          </div>
        </div>

        <div className={styles.infoBox}>
          <div className={styles.info}>
            <div className={styles.aboutInfo}>
              <div className={styles.infoItem}>
                <img src={aboutImg} alt="Dharshan" />
              </div>
              <div className={styles.infoItem}>
                <p><span>Name: </span>Dharshan VK</p>
              </div>
              <div className={styles.infoItem}>
                <p><span>Birthday: </span>23 September 2004</p>
              </div>
              <div className={styles.infoItem}>
                <p><span>Phone Number: </span>+91 8220856919</p>
              </div>
              <div className={styles.infoItem}>
                <p><span>E-Mail: </span>vkdharshan38@gmail.com</p>
              </div>
            </div>

            {/* <div className={styles.tabTitles}>
              <h3>SKILLS</h3>
                <div>
                  <p>Web</p>
                </div>
            </div> */}

            <div className={styles.tabTitles}>
              <div className={styles.test}>
              <p className={`${styles.tabLinks} ${activeTab === "skills" ? styles.active : ""}`} onClick={() => setActiveTab("skills")}>
                <a>Skills</a>
              </p>

              <p
                className={`${styles.tabLinks} ${
                  activeTab === "experience" ? styles.active : ""}`}
                onClick={() => setActiveTab("experience")}
                >Experience
              </p>

              <p
                className={`${styles.tabLinks} ${
                  activeTab === "education" ? styles.active : ""}`}
                onClick={() => setActiveTab("education")}
                >Education
              </p>
              </div>

            {activeTab === "skills" && (
              <div className={styles.tabContents}>
                <ul>
                  <li><span>Web Development</span> Designing Web Applications</li>
                  <li><span>Photography</span> Nature & Wildlife</li>
                </ul>
              </div>
            )}
            {activeTab === "experience" && (
              <div className={styles.tabContents}>
                <ul>
                  <li><span>2024 - Current</span> Self-training in Web Development</li>
                  <li><span>2024</span> Won Photography Competition</li>
                </ul>
              </div>
            )}
            {activeTab === "education" && (
              <div className={styles.tabContents}>
                <ul>
                  <li><span>2022 - Current</span> BE ECE @ SNS College</li>
                  <li><span>2021 - 2022</span> HSC @ Chandra School</li>
                  <li><span>2020 - 2021</span> SSLC @ Chandra School</li>
                </ul>
              </div>
            )}
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default About