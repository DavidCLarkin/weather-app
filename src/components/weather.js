import React from 'react'
import styles from './scss/weather.module.scss'
import helpers from '../helpers/helpers.js'
import Reveal from 'react-reveal/Reveal'
import WeatherDisplay from './weatherDisplay'
import ErrorComponent from './errorComponent'

const Weather = props => {
	const data = props.data
	const error = props.error

	let componentToDisplay

	if(error)
	{
		componentToDisplay = <ErrorComponent />
	}
	else {
		componentToDisplay = <WeatherDisplay data={data} city={props.city} country={props.country}/>
	}

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
		var date = convertUNIX(inputDate)
		var month = helpers.convertMonthToString(date.getUTCMonth())
		var day = helpers.convertDateToString(date.getUTCDay())
		var dateString = '' + day + ', ' + month + ' ' + date.getUTCDate();

		return dateString;
	}

	function convertToTime(inputDate) {
		var date = convertUNIX(inputDate)
		return convertMilitaryTime(date.getUTCHours())
	}

	function convertMilitaryTime(time) {
		//time += 1
		if (time == 0) return '12 am'
		else if (time < 12) return time + ' am'
		else if (time == 12) return '12 pm'
		else if (time > 12) return time - 12 + ' pm'
	}

	function filterByTime(time) {
		var date = convertUNIX(time)
		return date.getUTCHours()

	}

	return (
		<div>
			{componentToDisplay}
		</div>
				
	)

}

export default Weather