import React, { Component } from 'react'
import Fade from "react-reveal"
import styles from "./scss/footer.module.scss"
//import geolocated from 'react-geolocated'

class Footer extends Component {

  render() {
    return (
      <footer className={styles.footerSection}>
        <Fade bottom>
          <p className={styles.footnote}>© 2020 David Larkin</p>
        </Fade>
      </footer> 
    )
  }
}

export default Footer;