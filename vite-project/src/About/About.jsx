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
          <div className={styles.aboutCol1}>
            <img src={aboutImg} alt="About Dharshan" />
          </div>
          <div className={styles.aboutCol2}>
            <h1 className={styles.subTitle}>About Me</h1>
            <p>
              I am a dedicated and ambitious individual pursuing a B.E. in
              Electronics and Communication Engineering (ECE) with a strong
              passion for Web Development...
            </p>

            <div className={styles.tabTitles}>
              <p className={`${styles.tabLinks} ${activeTab === "skills" ? styles.active : ""}`} onClick={() => setActiveTab("skills")}>
                <a>Skills</a>
              </p>
              <p
                className={`${styles.tabLinks} ${
                  activeTab === "experience" ? styles.active : ""}`}
                onClick={() => setActiveTab("experience")}
              >
                Experience
              </p>
              <p
                className={`${styles.tabLinks} ${
                  activeTab === "education" ? styles.active : ""}`}
                onClick={() => setActiveTab("education")}
              >
                Education
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
    </section>
    </>
  )
}

export default About