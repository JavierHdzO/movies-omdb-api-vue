import instance from "@/api/api";



const getMoviesByName = async ( param ) => {

    try {
        const response = await (await instance.get(`&s=${ param }`)).data
    
        return response
        
    } catch (error) {
        throw `Request fail ${ error }`
    }
}

const getMoviesByID = async ( param ) => {

    try {
        const response = await (await instance.get(`&i=${ param }`)).data
        return response
        
    } catch (error) {
        throw `Request failed: ${ error }`
    }
}




export {
    getMoviesByName,
    getMoviesByID
}