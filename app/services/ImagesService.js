import { api } from "./AxiosService.js";
import { AppState } from "../AppState.js";
import { Image } from "../models/Image.js";



class ImagesService {

  async getBgImage() {
    const response = await api.get('api/images')
    console.log(response.data);
    const image = new Image(response.data)
    AppState.image = image
    console.log(AppState.image);
  }















  // connectionTest(test) {
  //   console.log('service connection test: ', test);
  // }

  // ----------------------------------------------->>>>>
}


export const imagesService = new ImagesService()