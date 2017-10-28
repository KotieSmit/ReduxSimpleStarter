import React, { Component } from 'react';
import GoogleMap from '../components/google_map'
import { connect } from 'react-redux';

import Charts from  '../components/chart';

 class WeatherList extends Component {
    renderWeather(cityData){
        const name =  cityData.city.name 
        const temps = _.map(cityData.list.map(weather => weather.main.temp), (temp) => temp -273.15 );
        const pressures = cityData.list.map(weather => weather.main.pressure)
        const humidities = cityData.list.map(weather => weather.main.humidity)
        const { lon, lat } = cityData.city.coord;


        return (
            <tr key={ name }>
                <td> <GoogleMap lon={lon} lat={lat}/> </td>
                <td> <Charts data={temps} color="orange" units="C"/> </td>
                <td> <Charts data={pressures} color="green" units="hPa" /> </td>
                <td> <Charts data={humidities} color="blue" units="%"/> </td>
            </tr>
        )
    };

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature(C)</th>
                        <th>Presure (kPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    { this.props.weather.map(this.renderWeather) }
                </tbody>
            </table>
        );
    }

}


function mapStateToProps({weather}){
    console.log('Weather:', weather);
    return { weather };
}

export default connect(mapStateToProps)(WeatherList)