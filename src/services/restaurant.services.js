
// Todas las llamadas a API de BE para Restaurant

import axios from "axios"

const service = axios.create({
    baseURL:`${process.env.REACT_APP_SERVER_URL}/restaurant`
})

// esta configuracion nos permite enviar el Token en cada request que se haga
service.interceptors.request.use((config) => {

    // aqui buscamos el token en localstorage
    const storedToken = localStorage.getItem("authToken")
    
    // si el toke existe lo agregamos a los headers del request
    config.headers = storedToken && { Authorization: `Bearer ${storedToken}` }
    return config;
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