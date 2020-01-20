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
			error: false
		};
		//this.getWeather();
	}


	getWeather = async (e) => {
		try {
			e.preventDefault();

			const city = e.target.city.value
			const country = e.target.country.value

			let response;

			if (city && country) {
				console.log("CITY")
				let api_call
				api_call = await fetch(`https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=${process.env.GATSBY_APP_WEATHER_API_KEY}`)

				response = await api_call.json()

				this.setState({
					city: response.city.name,
					country: response.city.country,
					data: response.list,
					error: false
				})
			}
			else if (city && !country) {
				console.log("COUNTRY")
				const api_call = await fetch(`https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${process.env.GATSBY_APP_WEATHER_API_KEY}`)
				response = await api_call.json()

				this.setState({
					city: response.city.name,
					country: response.city.country,
					data: response.list,
					error: false
						//temp: response.main.temp
				})
			}
			else {
				if(!city && country)
					alert("Please input a city as well")
				else {
					alert("Please input a city")
				}
				this.setState({
					error: true
				})
			}
		} catch(e) {
			this.setState({
				error: true
			})
			//alert("You didn't enter a valid city/country")
			console.clear()
			//return Promise.reject()
		}

		//response;
		//console.log(response);
	}


	render() {
		return (
			<Layout>
				<SEO title="Home" />
				<Form getWeather={this.getWeather} />
				<Weather
					city={this.state.city}
					country={this.state.country}
					data={this.state.data}
					error={this.state.error}
					//temp={this.state.temp}
				/>
			</Layout>

		)
	}
}

export default IndexPage
