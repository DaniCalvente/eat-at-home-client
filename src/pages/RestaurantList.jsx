import { useEffect, useState } from "react"
import axios from "axios"
import {Link, useNavigate} from "react-router-dom"

function RestaurantList() {
    //1.Crear estado que controle la informacion
    const [cityRestaurants, setCityRestaurants] = useState (null)
    const navigate = useNavigate()

  //2. UseEfect (importarla)para buscar la informacion componentDidMount
  useEffect(() => {
    getCityRestaurants()

  }, [])

  //3. La fx async que haga la llamada a la API y actualice el estado
  const getCityRestaurants = async () => {
    try{
      const response = await axios.get("http://localhost:5005/api/restaurant/:city")
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
      <h2>Restaurant in your City</h2>
      {/* {cityRestaurants.map((eachRestaurant) => {
        return (
          <div>
            <Link> {`/restaurant/${eachRestaurant._id/menu}`} </Link> 
          </div>
        )
      })} */}

    </div>
  )
}

export default RestaurantList