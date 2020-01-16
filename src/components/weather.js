import React from 'react'


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

	return (
		<div>
			<h1>{props.city}, {props.country}</h1>
				{console.log(props.data)}
					{data && data.map((e, index) => {
						console.log(e.main.temp)
						if(index < 3)
						{
							return (
								<div>
									<p>{e.main.temp}</p>
								</div>
							)
						}
					})}
				<p>{kelvinToCelsius(props.temp) + " Celsius"}</p>
				<p>{kelvinToFahrenheit(props.temp) + " Fahrenheit"}</p>
				<p>{convertUNIX(props.sunrise).toTimeString()}</p>
				<p>{convertUNIX(props.sunset).toTimeString()}</p>
		</div>
	)

}

export default Weather