
// Todas las llamadas a API de BE para Restaurant

import axios from "axios"

const service = axios.create({
    baseURL:`${process.env.REACT_APP_SERVER_URL}/restaurant`
})

const getCityRestaurantsService = (city) => {
return service.get(`/${city}`)
}

const getRestaurantMenuService = (id) => {
    return service.get(`/menu/${id}`)  
}

export {
    getCityRestaurantsService,
    getRestaurantMenuService,
}