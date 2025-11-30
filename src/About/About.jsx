import { useState } from "react";
import styles from "./about.module.css";
import aboutImg from "../assets/me2.jpg";
import pythonIcon from "../assets/python.svg";
import cssIcon from "../assets/css3.svg";
import reactIcon from "../assets/atom.svg";
import htmlIcon from "../assets/html5.svg";
import figmaIcon from "../assets/figma (1).svg";
import jsIcon from "../assets/js (1).svg";
import PixelTransition from "../pixelTransition/PixelTransition";
// import twitterIcon from "../assets/twitter-alt.svg";

const About = () => {
  const [activeTab, setActiveTab] = useState("skills");

  return (
    <>
      <section id="about" className={styles.about}>
        <div className={styles.floatingIcons}>
          <img src={pythonIcon} alt="Python" className={styles.floatPython} />
          <img src={cssIcon} alt="CSS" className={styles.floatCSS} />
          <img src={reactIcon} alt="React" className={styles.floatReact} />
          <img src={htmlIcon} alt="HTML" className={styles.floatHTML} />
          <img src={figmaIcon} alt="HTML" className={styles.floatFigma} />
          <img src={jsIcon} alt="HTML" className={styles.floatJS} />
        </div>

        <div className="container">
          <div className={styles.row}>
            {/* <div className={styles.aboutCol1}>
            <img src={aboutImg} alt="About Dharshan" />
            </div> */}
            <div className={styles.aboutCol2}>
              <div className={styles.titleWrapper}>
                <h1 className={styles.subTitleBack}>ABOUT ME</h1>
                <h1 className={styles.subTitle}>ABOUT ME</h1>
              </div>
              <p className={styles.intro}>
                I'm <strong>Dharshan VK.</strong> Aspiring Software & Product
                Enthusiast with a strong foundation in web development, UI/UX,
                and digital innovation. Eager to contribute to end-to-end
                product lifecycles, from ideation to launch. Motivated to grow
                in a fast-paced, startup environment while delivering meaningful
                user experiences.
              </p>
            </div>
          </div>

          <div className={styles.infoBox}>
            <div className={styles.info}>
              <div className={styles.aboutInfo}>
                <div className={styles.infoItem}>
                  {/* <img src={aboutImg} alt="Dharshan" /> */}
                  <PixelTransition
                    firstContent={
                      <img
                        src={aboutImg}
                        alt="Dharshan"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    }
                    secondContent={
                      <div
                        style={{
                          width: "100%",
                          height: "100%",
                          display: "grid",
                          placeItems: "center",
                          backgroundColor: "#111",
                        }}
                      >
                        {/* <p style={{ fontWeight: 900, fontSize: "12px", color: "#ffffff" }}>Dharshan</p>
                      <p style={{ fontWeight: 900, fontSize: "12px", color: "#ffffff" }}>vkdharshan38@gmail.com</p> */}
                        <div className={styles.infoItem}>
                          <p>
                            <span>Name: </span>Dharshan VK
                          </p>
                        </div>
                        <div className={styles.infoItem}>
                          <p>
                            <span>Birthday: </span>23 September 2004
                          </p>
                        </div>
                        <div className={styles.infoItem}>
                          <p>
                            <span>Phone Number: </span>+91 8220856919
                          </p>
                        </div>
                        <div className={styles.infoItem}>
                          <p>
                            <span>E-Mail: </span>vkdharshan38@gmail.com
                          </p>
                        </div>
                      </div>
                    }
                    gridSize={12}
                    pixelColor="#ffffffff"
                    animationStepDuration={0.4}
                    className={styles.custompixelcard}
                  />
                </div>
              </div>

              <p className={styles.lines}></p>

              <div className={styles.tabTitles}>
                <div className={styles.test}>
                  <p
                    className={`${styles.tabLinks} ${
                      activeTab === "skills" ? styles.active : ""
                    }`}
                    onClick={() => setActiveTab("skills")}
                  >
                    <a>Skills</a>
                  </p>

                  <p
                    className={`${styles.tabLinks} ${
                      activeTab === "experience" ? styles.active : ""
                    }`}
                    onClick={() => setActiveTab("experience")}
                  >
                    Experience
                  </p>

                  <p
                    className={`${styles.tabLinks} ${
                      activeTab === "education" ? styles.active : ""
                    }`}
                    onClick={() => setActiveTab("education")}
                  >
                    Education
                  </p>
                </div>

                {activeTab === "skills" && (
                  <div className={styles.tabContents}>
                    <ul>
                      <li>
                        <span>Web Development</span> Designing Web Applications
                      </li>
                      <li>
                        <span>Photography</span> Nature & Wildlife
                      </li>
                    </ul>
                  </div>
                )}
                {activeTab === "experience" && (
                  <div className={styles.tabContents}>
                    <ul>
                      <li>
                        <span>2024 - Current</span> Self-training in Web
                        Development
                      </li>
                      <li>
                        <span>2024</span> Won Photography Competition
                      </li>
                    </ul>
                  </div>
                )}
                {activeTab === "education" && (
                  <div className={styles.tabContents}>
                    <ul>
                      <li>
                        <span>2022 - Current</span> BE ECE @ SNS College
                      </li>
                      <li>
                        <span>2021 - 2022</span> HSC @ Chandra School
                      </li>
                      <li>
                        <span>2020 - 2021</span> SSLC @ Chandra School
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
