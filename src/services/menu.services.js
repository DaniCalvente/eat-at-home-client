// Todas las llamadas a API de BE para Menu

import axios from "axios"
import { Router } from "react-router-dom"

const service = axios.create({
    baseURL:`${process.env.REACT_APP_SERVER_URL}/menu-item`
})

// esta configuracion nos permite enviar el Token en cada request que se haga
service.interceptors.request.use((config) => {

    // aqui buscamos el token en localstorage
    const storedToken = localStorage.getItem("authToken")
    
    // si el toke existe lo agregamos a los headers del request
    config.headers = storedToken && { Authorization: `Bearer ${storedToken}` }
    return config;
  })

  const getMenuItemInfoService = (id) => {
    return service.get(`/menu/${id}`)
  }

  const editmenuItemService = (id, menuItem) => {
    return service.patch(`/menu/edit/${id}`, menuItem)
  }

  const deleteItemMenuService = (id) => {
      return service.delete(`/menu/delete/${id}`)
  }


  export {
    deleteItemMenuService,
    getMenuItemInfoService,
    editmenuItemService,
  }
