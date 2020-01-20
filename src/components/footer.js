import React from 'react'
import Fade from "react-reveal"
import styles from "./scss/footer.module.scss"

const Footer = () => (
    <footer className={styles.footerSection}>
      <Fade bottom>

        <p className={styles.footnote}>© 2020 David Larkin</p>
      </Fade>
    </footer> 
)

export default Footer