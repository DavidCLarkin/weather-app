import React, { Component } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Weather from "../components/weather"
import Form from "../components/form"

class IndexPage extends Component {

	constructor() {
		super();
		this.state = {
			city: undefined,
			country: undefined,
			data: undefined
		};
		//this.getWeather();
	}

	getWeather = async (e) => {
		e.preventDefault();

		const city = e.target.city.value
		const country = e.target.country.value

		var response = undefined;
		console.log("Key: "+process.env.GATSBY_APP_WEATHER_API_KEY);

		if (city && country) {
			console.log("CITY")
			const api_call = await fetch(`https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=${process.env.GATSBY_APP_WEATHER_API_KEY}`)
			response = await api_call.json()
			console.log(response)
			this.setState({
				city: response.city.name,
				country: response.city.country,
				data: response.list
				//temp: response.main.temp
			})
		}
		else if (city && !country) {
			console.log("COUNTRY")
			const api_call = await fetch(`https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${process.env.GATSBY_APP_WEATHER_API_KEY}`)
			response = await api_call.json()

			this.setState({
				city: response.city.name,
				country: response.city.country,
				data: response.list

				//temp: response.main.temp
			})
		}

		//response;
		console.log(response);
	};


	render() {
		return (
			<Layout>
				<SEO title="Home" />
				<Form getWeather={this.getWeather} />
				<Weather
					city={this.state.city}
					country={this.state.country}
					data={this.state.data}
					//temp={this.state.temp}
				/>
			</Layout>
		)
	}
}

export default IndexPage
