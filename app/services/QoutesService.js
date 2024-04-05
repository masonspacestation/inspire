import { api } from "./AxiosService.js"
import { Quote } from "../models/Quote.js"
import { AppState } from "../AppState.js";



class QuotesServices {
  async getQuote() {
    const response = await api.get('api/quotes')
    console.log(response.data);
    const quote = new Quote(response.data)
    AppState.quote = quote
    console.log('📦', AppState.quote);
  }















}

export const quotesService = new QuotesServices()