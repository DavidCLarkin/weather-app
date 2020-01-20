import React from 'react'
import styles from './scss/error.module.scss'

const ErrorComponent = () => {
    return (
        <div className={styles.container}>
            <p>City/Country not found, please type a valid city or county</p>
        </div>
    )
}

export default ErrorComponent;