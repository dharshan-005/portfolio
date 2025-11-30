import React from 'react'
import styles from './contact.module.css'
import arrowImage from "../assets/arrowForwardIos.svg"

const Contact = () => {
  return (
    <>
    <section id = 'contact' className={styles.contact}>
        <div>
            <div className={styles.titleWrapper}>
                <h1 className={styles.subTitleBack}>CONTACT</h1>
                <h1 className={styles.subTitle}>CONTACT</h1>
            </div>
            <div className={styles.root}>
              <div className={styles.contactContainer}>
                <form action="https://api.web3forms.com/submit" method="POST" className={styles.contactLeft}>
                    <div className={styles.contactLeftTitle}>
                        <h2>Get in touch</h2>
                        <hr />
                    </div>
                    <input type="hidden" name="access_key" value="cc3ccde3-f261-43a6-a456-d80ad4425e13" />
                    <input type="text" name="name" placeholder="Your Name" className={styles.contactInputs} required />
                    <input type="email" name="email" placeholder="Your Email" className={styles.contactInputs} required />
                    <textarea name="message" placeholder="Leave Your Message Here" className={styles.contactInputs} required></textarea>
                    <button type="submit">Submit <img src={arrowImage} alt="->" /></button>
                </form>
              </div>
              
              <div className={styles.contactContainerLeft}>
                {/* <h1 className={styles.subTitle}>Contact Me</h1> */}
                <p><i class="fa-solid fa-at"></i> vkdharshan38@gmail.com</p>
                <p><i class="fa-solid fa-phone"></i> +91 8220856919</p>
                <br />
                <div className={styles.socialIcons}>
                  <a href="https://www.linkedin.com/in/dharshan-vk/"><i class="fa-brands fa-linkedin"></i></a>
                  <a href=""><i class="fa-brands fa-x-twitter"></i></a>
                  <a href="https://www.instagram.com/dharshan___05/"><i class="fa-brands fa-instagram"></i></a>
                  <a href="https://canary.discord.com/channels/@me"><i class="fa-brands fa-discord"></i></a>
                  <a href="https://github.com/dharshan-005"><i class="fa-brands fa-github"></i></a>
                </div>
                {/* <a href="images/@sample_resume.pdf" download class="btn btn2">Resume</a> */}
              </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Contact