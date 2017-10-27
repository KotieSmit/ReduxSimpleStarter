import axios from 'axios'
const API_KEY = "9c03145a38237bc0e4b8bd872902181f";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`


export const FETCH_WEATHER = 'FETCH_WEATHER';


export default function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},zar`
    const request = axios.get(url);

    console.log("Request: ", request)

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}