import { api } from "./AxiosService.js";
import { AppState } from "../AppState.js";
import { Image } from "../models/Image.js";



class ImagesService {

  async getBgImage() {
    const response = await api.get('api/images')
    const image = new Image(response.data)
    AppState.image = image
  }











  // connectionTest(test) {
  //   console.log('service connection test: ', test);
  // }

  // ----------------------------------------------->>>>>
}


export const imagesService = new ImagesService()