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
				<p className={styles.note}>Note: not inputting a country/country code can return ambiguous results</p>
				<div className={styles.buttonContainer}>
					<button>Get Weather</button>
				</div>
			</form>
			<div className={styles.buttonContainer}>
				<button 
					onClick={props.getCoordWeather}
					style={{marginTop: '0', marginBottom: '1.5rem'}}>Use Current Location</button>
			</div>
		</div>
	)
}

export default Form