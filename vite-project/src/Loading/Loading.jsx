import React from 'react'
import styles from './loading.module.css'

const Loading = () => {
  return (
    <>
    <div style={({display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#000000'})}>
        <div className={styles.loader}></div>
        <p className={styles.pText}>Loading...</p>
    </div>
    </>
  )
}

export default Loading