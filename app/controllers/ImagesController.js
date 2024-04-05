import { AppState } from "../AppState.js";
import { imagesService } from "../services/ImagesService.js";
import { setHTML, setText } from "../utils/Writer.js";



export class ImagesController {
  constructor() {
    console.log('📸🎮');
    // this.connectionTest()
    this.getBgImage()
    AppState.on('image', this.drawImage)
  }


  async getBgImage() {
    try {
      await imagesService.getBgImage()
    } catch (error) {
      console.error("couldn't get images yet", error);
    }
  }


  drawImage() {
    // const imgBG = ''
    let bgImg = AppState.image.imgBgElem
    setHTML('imgBG', bgImg)
  }





  // connectionTest() {
  //   imagesService.connectionTest('passed')
  // }

  // ----------------------------------------------->>>>>
}