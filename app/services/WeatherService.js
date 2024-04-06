import { api } from "./AxiosService.js"
import { AppState } from "../AppState.js"
import { Weather } from "../models/Weather.js"


class WeatherService {
  async tempFormatToggle(activeTempFormat) {
    console.log('weather service 1', activeTempFormat);
    console.log('weather service 2 ', AppState.weather);
    if (activeTempFormat == 'C') {
      activeTempFormat = 'F'
      console.log('weather service 3', activeTempFormat);
    } else if (activeTempFormat == 'F') {
      activeTempFormat = 'C'
      console.log('weather service 4', activeTempFormat);
      console.log('weather service 5 ', AppState.weather);
    }
    AppState.weather.tempFormat = activeTempFormat
    console.log('weather service 6 ', AppState.weather);
    // const response = await api.put('api/weather', AppState.weather)
    // console.log('weather service 7', response);
  }


  async getWeather() {
    let response = await api.get('api/weather')
    const weather = new Weather(response.data)
    AppState.weather = weather
    console.log('⚡️', AppState.weather);
  }









}


export const weatherService = new WeatherService