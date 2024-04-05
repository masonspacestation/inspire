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
    const bgImg = AppState.image
    document.body.style.backgroundImage = `url(${bgImg.imgUrl})`
  }




  // connectionTest() {
  //   imagesService.connectionTest('passed')
  // }

  // ----------------------------------------------->>>>>
}