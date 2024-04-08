



export class Weather {
  constructor(data) {
    this.name = data.name
    this.temp = data.main.temp
    this.weather = data.weather[0].main
    this.icon = data.weather.icon
    this.tempFormat = 'F' ? 'C' : 'F'
    // this.tempFormat = data.tempFormat// ? data.tempFormat : 'F' //default value
    this.tempConverted = TempFormatConversion(this.temp, this.tempFormat)
    this.isFahrenheit = data.isFahrenheit
  }

  get weatherDisplayTemplate() {
    return `
  <h5 class="d-inline text-white">${this.name}</h5>
  <img src="${this.icon}" class="">
  <button onClick="app.WeatherController.tempFormatToggle()" class="d-inline-block clickable">
  <small>${this.tempConverted} | ${this.weather}</small>
  </button>
  `;

    // `
    // <input type="checkbox" ${(this.isFahrenheit == true) ? false : true} class="form-check-input col-2" name="completed" id="completed" onChange="app.TodosController.toggleCompletion('${this.id}')">
    // `


    // <small>${this.temp}°F ${this.weather}</small>
    // <small>${this.FahrenheitDisplay} ${this.weather}</small>
    // <small>${this.CelsiusDisplay} ${this.weather}</small>
  }

}


function TempFormatConversion(temp, tempFormat) {
  // const fTempDisplay = ((this.temp - 273.15) * 9 / 5 + 32).toFixed(0)
  // const cTempDisplay = (this.temp - 273.15).toFixed(0)
  // if (tempFormat == 'F') {
  //   return `
  //   ${fTempDisplay}°F
  //   `
  // } else {
  //   return `
  // ${cTempDisplay}°C

  let tempDisplay = ''

  if (tempFormat == 'F') {
    tempDisplay += `${((temp - 273.15) * 9 / 5 + 32).toFixed(0)}F°`
  } else {
    tempDisplay += `${(temp - 273.15).toFixed(0)}C°`
  }
  return tempDisplay
}