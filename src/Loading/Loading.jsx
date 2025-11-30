import React from 'react'
import styles from './loading.module.css'
// import stickmanVideo from '../assets/stickman.mp4';

const Loading = () => {
  return (
    <>
    <div className={styles.loadingWrapper}>
      {/* <video
        className={styles.bgVideo}
        src={stickmanVideo}
      /> */}
      <div className={styles.centerContent}>
        <div className={styles.loader}></div>
        <p className={styles.pText}>Loading...</p>
      </div>
    </div>
    </>
  )
}

export default Loading