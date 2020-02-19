import React from "react"
import styles from './scss/header.module.scss'
import logo from '../images/weatherIcons/wi-windy.svg'

const Header = () => (
  <header className={styles.header}>
    <div className={styles.content}>
      <img src={logo} alt="logo" height='50'  width='50'></img>
    </div>
  </header>
)

export default Header
