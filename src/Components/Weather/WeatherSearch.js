import React from 'react'

class WeatherSearch extends React.Component {


    state = {
        inputValue: ''
    }

    handleInputChange = event =>{
        this.setState({
            inputValue: event.target.value
        })
    }

    handleSubmit = event =>{
        event.preventDefault()
    }

    render(){
        return(
            <div>
                <form>
                    <input
                        type="text"
                        placeholder="check the weather in..."
                        value={this.state.inputValue}
                        onChange={this.handleInputChange}
                    />
                    <button>
                        Search
                    </button>
                </form>
            </div>
        )
    }
}

export default WeatherSearch