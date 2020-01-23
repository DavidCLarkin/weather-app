import React from 'react'
import styles from './scss/form.module.scss'

const Form = props => {

	const error = props.error

	let inputsToShow

	if(error) {
		inputsToShow = 
		<div className={styles.container}>
			<input className={styles.inputField}
				type="input"
				style={{borderBottomColor:"#CD2D2D"}}
				name="city"
				placeholder="City"
				/>
			<input className={styles.inputField}
				type="input"
				style={{borderBottomColor:"#CD2D2D"}}
				name="country"
				placeholder="Country"
				/>
		</div>
	}
	else {
		inputsToShow = 
		<div className={styles.container}>
			<input className={styles.inputField}
				type="input"
				name="city"
				placeholder="City"
				/>
			<input className={styles.inputField}
				type="input"
				name="country"
				placeholder="Country"
				/>
		</div>
	}

	return (
		<div className={styles.outer}>
			<form onSubmit={props.getWeather}>
					{inputsToShow}
				<div className={styles.buttonContainer}>
					<button>Get Weather</button>
				</div>
			</form>
		</div>
	)
}

export default Form