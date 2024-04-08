



export class Weather {
  constructor(data) {
    this.name = data.name
    this.temp = data.main.temp
    this.weather = data.weather[0].main
    this.icon = data.weather.icon
    // this.tempFormat = ConvertTempFormat()
    // this.tempFormat = 'F' ? 'C' : 'F'
    this.tempFormat = 'F'
    // this.tempFormat = data.tempFormat ? data.tempFormat : 'F' //default value
    this.tempConverted = `${((this.temp - 273.15) * 9 / 5 + 32).toFixed(0)}F°`
  }

  get weatherDisplayTemplate() {
    return `
  <h5 class="d-inline text-white">${this.name}</h5>
  <img src="${this.icon}" class="">
  <button onClick="app.WeatherController.tempFormatToggle()" class="btn btn-outline-white rounded-pill p-3 px-4 text-white d-inline-block clickable">
  <small>${this.tempConverted} | ${this.weather}</small>
  </button>
  `
  }

}

// function ConvertTempFormat(format) {

//   let tempFormat = format
//   if (tempFormat == 'F') {
//     tempFormat = 'C'

//   } else {
//     tempFormat = 'F'
//   }
//   return tempFormat
// }

// function TempFormatConversion(temp, tempFormat) {
//   let tempDisplay = ''

//   if (tempFormat == 'F') {
//     tempDisplay += `${((temp - 273.15) * 9 / 5 + 32).toFixed(0)}F°`
//   } else {
//     tempDisplay += `${(temp - 273.15).toFixed(0)}C°`
//   }
//   return tempDisplay
// }