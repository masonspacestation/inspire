



export class Weather {
  constructor(data) {
    this.name = data.name
    this.temp = data.main.temp
    this.weather = data.weather[0].main
    this.icon = data.weather.icon
  }

  get weatherDisplayTemplate() {
    return `
  <h5 class='d-block'>${this.name}</h5>
  <img src="${this.icon}" class="d-block">
  <small>${this.temp}°F ${this.weather}</small>
  `
  }

}