import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styles from './scss/header.module.scss'

const Header = () => (
  <header className={styles.header}>
    <div className={styles.content}
      //style={{
       // margin: `0 auto`,
        //maxWidth: 960,
        //padding: `1.45rem 1.0875rem`,
      //}}
    >
      <h1>Logo</h1>
    </div>
  </header>
)

export default Header
