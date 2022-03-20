import { useEffect, useState } from "react"
import { useParams, useNavigate, Link } from "react-router-dom"
import axios from "axios"


function RestaurantMenu() {
  const [restMenu, setRestMenu] = useState(null)
  const navigate = useNavigate()
  const {_id} = useParams()

  useEffect(() => {
    getRestaurantMenu()
  }, [])

  const getRestaurantMenu = async () => {
    try{
      const response = await axios.get(`http://localhost:5005/api/restaurant/${_id}/menu`)
      console.log(response);
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