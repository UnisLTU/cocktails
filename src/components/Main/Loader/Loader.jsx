import React from 'react'
import styles from './Loader.module.css'

const Loader = () => (
    <div data-testid='loader' className={styles.wrapper}>
        <span className={`${styles.circle} ${styles.circle_1}`} />
        <span className={`${styles.circle} ${styles.circle_2}`} />
        <span className={`${styles.circle} ${styles.circle_3}`} />
        <span className={`${styles.circle} ${styles.circle_4}`} />
    </div>
)

export default Loader
