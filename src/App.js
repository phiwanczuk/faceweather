import React, {Component} from 'react';
import WeatherSearch from './Components/Weather/WeatherSearch'
import './App.css';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'

class App extends Component {
    render() {
        return (
            <Router>
                <Route
                    exact
                    path='/'
                    component={WeatherSearch}
                />

            </Router>
        )
    }
}
export default App;