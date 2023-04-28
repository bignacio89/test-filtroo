import axios from "axios"

class PicturesApi {
    api: any
     
    constructor(){
        this.api = axios.create({
            baseURL: 'https://picsum.photos/v2/'
        })
    }

    getPictures = () => {
        return this.api.get('/list')
    }
}

const picturesServices = new PicturesApi()

export default picturesServices