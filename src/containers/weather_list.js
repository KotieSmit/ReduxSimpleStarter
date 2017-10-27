import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Sparklines, SparklinesLine } from 'react-sparklines';

 class WeatherList extends Component {
    renderWeather(cityData){
        const name =  cityData.city.name 
        const temps = cityData.list.map(weather => weather.main.temp)
        const pressures = cityData.list.map(weather => weather.main.pressure)
        const humidities = cityData.list.map(weather => weather.main.humidity)
        console.log(humidities);

        return (
            <tr key={ name }>
                <td>{ name} </td>
                <td>
                    <Sparklines height={120} heigh={ 180 }data={temps}>
                        <SparklinesLine  color="red" />
                    </Sparklines>
                </td>
            </tr>
        )
    };

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature</th>
                        <th>Presure</th>
                        <th>Humidity</th>
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