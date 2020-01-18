import React from 'react'
import styles from './scss/form.module.scss'

const Form = props => {
	return (
		<div className={styles.outer}>
			<form onSubmit={props.getWeather}>
				<div className={styles.container}>
					<input className={styles.inputField}
						name="city"
						placeholder="City"
					/>
					<input className={styles.inputField}
						name="country"
						placeholder="Country"
					/>
				</div>
				<div className={styles.buttonContainer}>
					<button>Get Weather</button>
				</div>
			</form>
		</div>
	)
}

export default Form