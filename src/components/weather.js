import React from 'react'
import styles from './scss/weather.module.scss'
import helpers from '../helpers/helpers.js'

const Weather = props => {
	const data = props.data

	function convertUNIX(unixTime) {
		return new Date(unixTime * 1000);
	}

	function kelvinToCelsius(kelvinTemp) {
		return Math.round(kelvinTemp - 273);
	}

	function kelvinToFahrenheit(kelvinTemp) {
		return Math.round((kelvinTemp - 273) * 9 / 5 + 32)
	}

	function convertToDate(inputDate) {
		var date = convertUNIX(inputDate);
		var month = helpers.convertMonthToString(date.getUTCMonth())
		var day = helpers.convertDateToString(date.getUTCDay())
		var dateString = '' + day + ', ' + month + ' ' + date.getUTCDate();

		return dateString;
	}

	return (
		<div>
			<h1 className={styles.headers}>{props.city}, {props.country}</h1>
			<div className={styles.container}>

				{console.log(props.data)}
				{data && data.map((e, index) => {
					console.log(e)
					if (index == 4 || index % 8 == 0) {
						return (
							<div className={styles.section}>
								{console.log("DATE: " + convertUNIX(e.dt))}
								<p>{convertToDate(e.dt)}</p>
								<p className={styles.para}>{kelvinToFahrenheit(e.main.temp)}</p>
							</div>
						)
					}
				})}
				{/*
			<p>{kelvinToCelsius(props.temp) + " Celsius"}</p>
			<p>{kelvinToFahrenheit(props.temp) + " Fahrenheit"}</p>
			<p>{convertUNIX(props.sunrise).toTimeString()}</p>
			<p>{convertUNIX(props.sunset).toTimeString()}</p>
			*/}
			</div>
		</div>
	)

}

export default Weather