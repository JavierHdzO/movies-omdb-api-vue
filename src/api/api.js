import axios from "axios";
import  apiKey  from "@/env";


const instance = axios.create({
    baseURL:`http://www.omdbapi.com/?`,
    params: {
        apiKey
    }

})


export default instance

