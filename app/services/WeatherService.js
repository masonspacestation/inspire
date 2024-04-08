import { api } from "./AxiosService.js"
import { AppState } from "../AppState.js"
import { Weather } from "../models/Weather.js"
import { setText } from "../utils/Writer.js";


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
    // const response = await api.put('api/weather')
    // console.log('service z', AppState.weather);
    // console.log('service xy', response);



  }

  //   let tempDisplay = ''
  //   const temp = AppState.weather.temp
  //   const weather = AppState.weather.weather
  //   // ${this.tempConverted} | ${this.weather}

  //   if (tempFormat == 'F') {
  //     tempDisplay += `${((temp - 273.15) * 9 / 5 + 32).toFixed(0)}F° | ${weather}`
  //   } else {
  //     tempDisplay += `${(temp - 273.15).toFixed(0)}C° | ${weather}`
  //   }

  //   setText('temp-toggle-button', tempDisplay)

  // }



}


export const weatherService = new WeatherService




/**!SECTION
  async tempFormatToggle(activeTempFormat) {
    // console.log('weather service 1', activeTempFormat);
    // console.log('weather service 2 ', AppState.weather);
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


  async convertTempFormat(activeTempFormat) {
    console.log('convert 1', activeTempFormat);
    if (activeTempFormat == 'C') {
      activeTempFormat = 'F'
      console.log('convert 2', activeTempFormat);
      console.log('convert 2b', AppState.weather);
    } else if (activeTempFormat == 'F') {
      activeTempFormat = 'C'
      console.log('convert 3', activeTempFormat);
    }
    console.log('convert 4', activeTempFormat);
    return activeTempFormat
  }

 */