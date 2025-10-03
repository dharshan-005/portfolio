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
            <div>
              <div className={styles.contactContainer}>
                <form action="https://api.web3forms.com/submit" method="POST" className={styles.contactLeft}>
                    <div className={styles.contactLeftTitle}>
                        <h2>Get in touch</h2>
                        <hr />
                    </div>
                    <input type="hidden" name="access_key" value="60daffcf-8ee5-4e15-aba2-8c1f3576816f" />
                    <input type="text" name="name" placeholder="Your Name" className={styles.contactInputs} required />
                    <input type="email" name="email" placeholder="Your Email" className={styles.contactInputs} required />
                    <textarea name="message" placeholder="Leave Your Message Here" className={styles.contactInputs} required></textarea>
                    <button type="submit">Submit <img src={arrowImage} alt="->" /></button>
                </form>
              </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Contact