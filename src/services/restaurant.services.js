
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

const addMenuItemService = (id, newMenuItem) => {
    return service.post(`/menu/${id}`, newMenuItem)
  }

const addRestaurantService = (newRestaurant) => {
    return service.post(`/owner`, newRestaurant)  
}

const getMyRestaurantsService = () => {
    return service.get(`/owner`)
}

const getRestaurantInfoService = (id) => {
    return service.get(`/edit/${id}`)
}
const editRestaurantService = (id, updateRestaurant) => {
    return service.patch(`/edit/${id}`, updateRestaurant)
}

const deleteRestaurantService = (id) => {
    return service.delete(`/delete/${id}`)
}

export {
    getCityRestaurantsService,
    getRestaurantMenuService,
    addRestaurantService,
    getMyRestaurantsService,
    getRestaurantInfoService,
    editRestaurantService,
    deleteRestaurantService,
    addMenuItemService,
}