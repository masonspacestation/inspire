import { AppState } from "../AppState.js";
import { clockService } from "../services/ClockService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";
import { setHTML, setText } from "../utils/Writer.js";



export class ClockController {
  constructor() {
    console.log('🕰️ 🎮');
    this.drawClock()
    this.drawDate()
    setInterval(this.drawClock, 1000)
    setInterval(this.drawDate, 360000)
    // this.getClock()
  }

  // async getClock() {
  //   try {
  //     await clockService.getClock()
  //   } catch (error) {
  //     console.error('clock error: ', error);
  //   }
  // }


  drawClock() {
    let clockDisplay = new Date()
    setHTML('clock-display', clockDisplay.toLocaleTimeString('en-US'))
  }

  drawDate() {
    let dateDisplay = new Date()
    setHTML('date-display', dateDisplay.toDateString())
  }


}