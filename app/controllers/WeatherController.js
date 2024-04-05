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
    // formula for Kelvin to f (1K − 273.15) × 9/5 + 32 = -457.9°F
    const weatherDisplay = AppState.weather.weatherDisplayTemplate
    console.log(weatherDisplay);
    setHTML('weather-display', weatherDisplay)
  }
}