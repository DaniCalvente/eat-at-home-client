
// Todas las llamadas a API de BE para Restaurant

import axios from "axios"

const getCityRestaurantsService = (city) => {
return axios.get(`http://localhost:5005/api/restaurant/${city}`)
}

const getRestaurantMenuService = (_id) => {
    return axios.get(`http://localhost:5005/api/restaurant/${_id}/menu`)  
}

export {
    getCityRestaurantsService,
    getRestaurantMenuService,
}