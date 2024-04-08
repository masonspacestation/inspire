import { api } from "./AxiosService.js"
import { AppState } from "../AppState.js"
import { Weather } from "../models/Weather.js"
import { setText } from "../utils/Writer.js";
import { saveState, loadState } from "../utils/Store.js";


class WeatherService {


  async getWeather() {
    let response = await api.get('api/weather')
    const weather = new Weather(response.data)
    AppState.weather = weather
    console.log('⚡️', AppState.weather);
  }


  async tempFormatConversion() {
    let format = AppState.weather
    if (format.tempFormat == 'F') {
      format.tempFormat = 'C'
      format.tempConverted = `${(format.temp - 273.15).toFixed(0)}C°`
      console.log('service x', AppState.weather);

    } else {
      format.tempFormat = 'F'
      format.tempConverted = `${((format.temp - 273.15) * 9 / 5 + 32).toFixed(0)}F°`
      console.log('service y', AppState.weather);
    }
    saveState('weather', AppState.weather)
  }

  // saveWeather() {
  //   window.localStorage.setItems("weather", JSON.stringify(weather))
  // }


  loadWeather() {
    // const localWeather = loadState('weather', { Weather })
    // AppState.weather = localWeather
    // console.log('weather loaded', AppState.weather);
    JSON.parse(window.localStorage.getItem("weather"))
  }

  /**
     saveJot() {
      saveState('jots', AppState.jots)
    }
  
    loadJots() {
      const jotsFromLocalStorage = loadState('jots', [Jot])
      AppState.jots = jotsFromLocalStorage
      console.log("we've reached the service");
    }
  
   */







}


export const weatherService = new WeatherService

