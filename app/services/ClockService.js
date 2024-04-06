import { api } from "./AxiosService.js"
import { ClockController } from "../controllers/ClockController.js"
import { Clock } from "../models/Clock.js"

// @ts-ignore
const clockApi = axios.create({
  baseURL: 'https://worldtimeapi.org/api/timezone/America/',
  timeout: 4000,
})

class ClockService {
  async getClock() {
    const result = await clockApi.get('Boise')
    console.log('morris day ', result);

  }



}

export const clockService = new ClockService()