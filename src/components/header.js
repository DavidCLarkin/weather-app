import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styles from './scss/header.module.scss'
import logo from '../images/weatherIcons/wi-windy.svg'

const Header = () => (
  <header className={styles.header}>
    <div className={styles.content}
      //style={{
       // margin: `0 auto`,
        //maxWidth: 960,
        //padding: `1.45rem 1.0875rem`,
      //}}
    >
      <img src={logo} alt="logo" height='50'  width='50'></img>
    </div>
  </header>
)

export default Header
