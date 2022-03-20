import { useEffect, useState } from "react"
import axios from "axios"
import {Link, useNavigate, useParams} from "react-router-dom"

function RestaurantList() {
    //1.Crear estado que controle la informacion
    const [cityRestaurants, setCityRestaurants] = useState (null)
    const navigate = useNavigate()
    const {city} = useParams()

  //2. UseEfect (importarla)para buscar la informacion componentDidMount
  useEffect(() => {
    getCityRestaurants()

  }, [])

  //3. La fx async que haga la llamada a la API y actualice el estado
  const getCityRestaurants = async () => {

    try{
      const response = await axios.get(`http://localhost:5005/api/restaurant/${city}`)
      console.log(response)
      setCityRestaurants(response.data)

    }catch(err){
      navigate("/error")

    }

  }

  //4. Sistema de loading

  if(!cityRestaurants) {
    return <h3>...Loading</h3>
  }


  return (
    <div>
      <h2>Restaurant in {`${city[0].toUpperCase() + city.slice(1)}`}</h2> 
    
      {cityRestaurants.map((eachRestaurant) => {
        return (
          <div>
          <img src="" alt="Restaurant-img" />
          <Link to={`/restaurant/${eachRestaurant._id}/menu`}><h3>{eachRestaurant.restName}</h3></Link>
         <p>{eachRestaurant.foodType}</p>
         </div>
          
        )
      })}

    </div>
  )
}

export default RestaurantList