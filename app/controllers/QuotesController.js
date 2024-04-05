import { AppState } from "../AppState.js";
import { quotesService } from "../services/QoutesService.js";
import { setHTML } from "../utils/Writer.js";



export class QuotesController {
  constructor() {
    console.log('🎙️🎮');
    AppState.on('quote', this.drawQuote)
  }


  async getQuote() {
    console.log('here');
    try {
      quotesService.getQuote()
    } catch (error) {
      console.log(error);
    }
  }

  drawQuote() {
    const activeQuote = AppState.quote.body
    // let quoteDisplay = ''
    setHTML('active-quote', activeQuote)
    console.log('drawquote body', activeQuote);

  }




}