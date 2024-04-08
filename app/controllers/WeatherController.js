import { AppState } from "../AppState.js";
import { weatherService } from "../services/WeatherService.js";
import { setHTML } from "../utils/Writer.js";




export class WeatherController {
  constructor() {
    console.log('🌪️🎮');
    weatherService.loadWeather()
    this.getWeather()
    AppState.on('weather', this.drawWeather)
  }


  async getWeather() {
    try {
      await weatherService.getWeather()
    } catch (error) {
      console.error("can't get weather, ", error);
    }
  }


  drawWeather() {

    const weatherDisplay = AppState.weather.weatherDisplayTemplate
    // console.log(weatherDisplay);
    setHTML('weather-display', weatherDisplay)
  }

  async tempFormatToggle() {
    try {

      // const activeTempFormat = AppState.weather.tempFormat
      // console.log('toggling weather 1', activeTempFormat);
      // console.log('weather service 1b ', AppState.weather);
      await weatherService.tempFormatConversion()
      // await weatherService.tempFormatToggle(activeTempFormat)
      // console.log('toggling weather 2', activeTempFormat);
      // console.log('weather service 2b ', AppState.weather);
    } catch (error) {
      console.error('it rains on us all', error);
    }

  }
}