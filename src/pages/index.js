import React, { Component } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Weather from "../components/weather"
import Form from "../components/form"

class IndexPage extends Component {

	constructor() {
		super();
		this.state = {
			city: undefined,
			country: undefined,
			data: undefined,
			todaysTemp: undefined,
			todaysIcon: undefined,
			todaysDesc: undefined,
			error: false,
			lat: null,
			long: null
		};

		this.getLocation = this.getLocation.bind(this);
		this.showPosition = this.showPosition.bind(this);

		this.getLocation()
	}

	getLocation() {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(this.showPosition, this.handleLocationError)
			//this.getWeatherCoords()
		}
		else {
			alert('not allowed')
		}
	}

	showPosition(position) {
		this.setState({
			lat: position.coords.latitude,
			long: position.coords.longitude
		}, () => { this.getWeatherCoords() }); // callback to make sure state is set

	}

	getWeatherCoords = async () => {
		try {
			let api_call
			let response
			const lat = this.state.lat
			const long = this.state.long
			//console.log('Lat:' + this.state.lat)

			api_call = await fetch(`https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${process.env.GATSBY_APP_WEATHER_API_KEY}`)

			response = await api_call.json()

			this.setState({
				todaysTemp: response.main.temp,
				todaysIcon: response.weather[0].icon,
				todaysDesc: response.weather[0].description,
				error: false
			})

			// Getting the weeks weather data
			api_call = await fetch(`https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${process.env.GATSBY_APP_WEATHER_API_KEY}`)

			response = await api_call.json()

			this.setState({
				city: response.city.name,
				country: response.city.country,
				data: response.list,
				error: false
			})

			//console.log(response)
		} catch (e) {
			this.setState({
				error: true
			})
			console.clear()
		}
	}

	// error handling for location services
	handleLocationError(error) {
		switch (error.code) {
			case error.PERMISSION_DENIED:
				console.log("User denied the request for Geolocation.")
				break;
			case error.POSITION_UNAVAILABLE:
				console.log("Location information is unavailable.")
				break;
			case error.TIMEOUT:
				console.log("The request to get user location timed out.")
				break;
			case error.UNKNOWN_ERROR:
				console.log("An unknown error occurred.")
				break;
			default: console.log("default.");
				break;
		}
	}

	getWeather = async (e) => {
		try {
			e.preventDefault();

			const city = e.target.city.value
			const country = e.target.country.value

			let response;
			if (city && country) {
				let api_call

				// Getting the weeks weather data
				api_call = await fetch(`https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=${process.env.GATSBY_APP_WEATHER_API_KEY}`)

				response = await api_call.json()

				this.setState({
					city: response.city.name,
					country: response.city.country,
					data: response.list,
					error: false
				})

				// Getting today's weather data
				api_call = await fetch(`https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${process.env.GATSBY_APP_WEATHER_API_KEY}`)

				response = await api_call.json()

				this.setState({
					todaysTemp: response.main.temp,
					todaysIcon: response.weather[0].icon,
					todaysDesc: response.weather[0].description
				})
			}
			else if (city && !country) {
				let api_call

				api_call = await fetch(`https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${process.env.GATSBY_APP_WEATHER_API_KEY}`)

				response = await api_call.json()

				this.setState({
					city: response.city.name,
					country: response.city.country,
					data: response.list,
				})

				// Getting today's weather data
				api_call = await fetch(`https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.GATSBY_APP_WEATHER_API_KEY}`)

				response = await api_call.json()

				this.setState({
					todaysTemp: response.main.temp,
					todaysIcon: response.weather[0].icon,
					todaysDesc: response.weather[0].description,
					error: false
				})
			}
			else {
				//if(!city && country)
				//alert("Please input a city as well")
				//else {
				//alert("Please input a city")
				//}
				this.setState({
					error: true
				})
			}
		} catch (e) {
			this.setState({
				error: true
			})
			console.clear()
		}
	}


	render() {
		return (
			<Layout>
				<SEO title="Home" />
				<Form getWeather={this.getWeather} error={this.state.error} />
				<Weather
					city={this.state.city}
					country={this.state.country}
					data={this.state.data}
					todaysTemp={this.state.todaysTemp}
					todaysIcon={this.state.todaysIcon}
					todaysDesc={this.state.todaysDesc}
					error={this.state.error}
				/>

			</Layout>

		)
	}
}

export default IndexPage
