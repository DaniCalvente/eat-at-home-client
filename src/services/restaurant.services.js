
// Todas las llamadas a API de BE para Restaurant

import axios from "axios"

const getCityRestaurantsService = () => {
return axios.get(`http://localhost:5005/api/restaurant/${city}`)
}

const getRestaurantMenuService = () => {
    return axios.get(`http://localhost:5005/api/restaurant/${_id}/menu`)  
}