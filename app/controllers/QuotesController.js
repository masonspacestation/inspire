import { AppState } from "../AppState.js";
import { quotesService } from "../services/QuotesService.js";
import { setHTML } from "../utils/Writer.js";



export class QuotesController {
  constructor() {
    console.log('🎙️🎮');
    this.getQuote()
    AppState.on('quote', this.drawQuote)
  }


  async getQuote() {
    try {
      quotesService.getQuote()
    } catch (error) {
      console.log(error);
    }
  }

  drawQuote() {
    const activeQuote = AppState.quote.quoteDisplay
    setHTML('active-quote', activeQuote)
  }




}