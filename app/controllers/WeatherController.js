import { AppState } from "../AppState.js";
import { weatherService } from "../services/WeatherService.js";
import { setHTML } from "../utils/Writer.js";




export class WeatherController {
  constructor() {
    console.log('🌪️🎮');
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

  tempFormatToggle() {
    let activeTempFormat = AppState.weather.tempFormat
    console.log('toggling weather', activeTempFormat);
    if (activeTempFormat == 'C') {
      activeTempFormat = 'F'
    } else if (activeTempFormat == 'F') {
      activeTempFormat = 'C'
    }
  }
}