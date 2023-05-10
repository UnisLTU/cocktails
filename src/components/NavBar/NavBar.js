import React from 'react'
import styles from './Navbar.module.css'

const NavBar = () => {
    return (
        <>
            <div className={styles.navbar_container}>
                <a href="https://unisltu.github.io/portfolio/">Ut</a>
                <div className={styles.links}>
                    <a href="https://github.com/UnisLTU">Github</a>
                    <a href="https://github.com/UnisLTU/cocktails">Repo</a>
                </div>
            </div>
        </>
    )
}

export default NavBar
