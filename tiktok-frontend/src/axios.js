import axios from "axios";

const instance = axios.create({
    baseURL: "https://tiktok-web-clone.herokuapp.com/"
})

export default instance