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
		componentToDisplay = <WeatherDisplay 
								data={data} 
								city={props.city} 
								country={props.country} 
								todaysTemp={props.todaysTemp} 
								todaysIcon={props.todaysIcon}
								todaysDesc={props.todaysDesc}
								/>
	}

	return (
		<div>
			{componentToDisplay}
		</div>
				
	)

}

export default Weather