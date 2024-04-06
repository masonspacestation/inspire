import { AppState } from "../AppState.js";



export class Clock {
  constructor() {
    // this.time = new Time().toDateString
    this.date = new Date()

  }


  get ClockDisplayTemplate() {
    return `
  <h3>${this.date.toLocaleTimeString()}</h3>
  `
  }


}




// {
//   "abbreviation": "MDT",
//   "client_ip": "75.174.38.91",
//   "datetime": "2024-04-06T11:30:39.139170-06:00",
//   "day_of_week": 6,
//   "day_of_year": 97,
//   "dst": true,
//   "dst_from": "2024-03-10T09:00:00+00:00",
//   "dst_offset": 3600,
//   "dst_until": "2024-11-03T08:00:00+00:00",
//   "raw_offset": -25200,
//   "timezone": "America/Boise",
//   "unixtime": 1712424639,
//   "utc_datetime": "2024-04-06T17:30:39.139170+00:00",
//   "utc_offset": "-06:00",
//   "week_number": 14
// }