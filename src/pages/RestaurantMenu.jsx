import { useEffect, useState } from "react"
import { useParams, useNavigate, Link } from "react-router-dom"
import {getRestaurantMenuService} from "../services/restaurant.services"


function RestaurantMenu() {
  const [restMenu, setRestMenu] = useState(null)
  const navigate = useNavigate()
  const {id} = useParams()

  useEffect(() => {
    getRestaurantMenu()
  }, [])

  const getRestaurantMenu = async () => {
    try{
      const response = await getRestaurantMenuService(id)
      // console.log(response);
      setRestMenu(response.data)
    } catch(err) {
      navigate("/error")
    }

  }

   //4. Sistema de loading

   if(!restMenu) {
    return <h3>...Loading</h3>
  }


  return (
    <div>
    
    {restMenu.map((eachRestMenu) => {
      return (
        <div className="eachDish">
        {/* <Link to={`/restaurant/${eachRestMenu._id}/menu`}><h3>{eachRestMenu.name}</h3></Link> */}
        <h3>{eachRestMenu.name}</h3>
         <p>{eachRestMenu.price} $</p> 
        </div>
      )

    })}
    
    </div>
  )
}

export default RestaurantMenu