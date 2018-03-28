import React from 'react'


class Weather extends React.Component {


    state = {
        weather: null,
        location: ''
    }


    fetchData = (event) => {
        event.preventDefault()
        let location = encodeURIComponent(this.state.location)
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=209c0c18886d791519db4cc4308daa95`)
            .then(response => response.json())
            .then(
                weather => this.setState({weather})
            )
    }
    handleInputChange = event => {
        this.setState({
            location: event.target.value

        })
    }

    render() {
        const {weather} = this.state
        return (
            <div className='weather-view'>
                <h1>Check the weather forecast for your city</h1>
                <form onSubmit={this.fetchData}>
                    <input type="text"
                           placeholder='City name'
                           value={this.state.location}
                           onChange={this.handleInputChange}
                    />
                    <button
                        type='submit'
                    >Search
                    </button>
                </form>   {
                weather &&
                <React.Fragment>
                    <p>Temperature: {weather.main.temp}</p>
                    <p>Temperature: {weather.main.humidity}</p>
                </React.Fragment>

                }
            </div>
        )
    }
}

export default Weather