import React from 'react'


const Weather = props => 
{
	function convertUNIX(unixTime) 
	{
		return new Date(unixTime * 1000);
	}

	function kelvinToCelsius(kelvinTemp)
	{
		return Math.round(kelvinTemp - 273);
	}

	function kelvinToFahrenheit(kelvinTemp)
	{
		return Math.round((kelvinTemp-273)*9/5+32)
	}

	return (
    <div>
      <h1>{props.city}, {props.country}</h1>
      <div>
				<p>{kelvinToCelsius(props.temp) + " Celsius"}</p>
				<p>{kelvinToFahrenheit(props.temp) + " Fahrenheit"}</p>
				<p>{convertUNIX(props.sunrise).toTimeString()}</p>
				<p>{convertUNIX(props.sunset).toTimeString()}</p>
			</div>
    </div>
	)
	
}

export default Weather