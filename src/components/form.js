import React from 'react'

const Form = props => {
  return (
    <div>
			<form onSubmit={props.getWeather}>
			<input 
				name="city"
        placeholder="City"
			/>
			<input
				name="country"
        placeholder="Country"
			/>
			<button>Get Weather</button>
			</form>
    </div>
  )
}

export default Form