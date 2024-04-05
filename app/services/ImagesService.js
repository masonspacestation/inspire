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




  // const response = await nasaApi.get('apod')
  // console.log('🚀🛰️', response.data);
  // const apod = new Apod(response.data) // converting one thing, no need for mapping
  // AppState.activeApod = apod
  // console.log('🗃️', AppState.activeApod);










  // connectionTest(test) {
  //   console.log('service connection test: ', test);
  // }

  // ----------------------------------------------->>>>>
}


export const imagesService = new ImagesService()