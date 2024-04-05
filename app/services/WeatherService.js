import { api } from "./AxiosService.js"
import { AppState } from "../AppState.js"
import { Weather } from "../models/Weather.js"


class WeatherService {
  async getWeather() {
    let response = await api.get('api/weather')
    const weather = new Weather(response.data)
    AppState.weather = weather
    console.log('⚡️', AppState.weather);
  }









}


export const weatherService = new WeatherService