import { useEffect, useState } from "react"
import { useParams, useNavigate, Link } from "react-router-dom"
import {getRestaurantMenuService} from "../services/restaurant.services"
import {deleteItemMenuService} from "../services/menu.services"
import AddMenuItemForm from "../components/AddMenuItemForm"


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
      setRestMenu(response.data.menuItems)
      console.log(response.data.isOwner); //! este booleano, lo vamos a guardar en un estado, y luego ese estado lo utilizaremos para habilitar determinadas funciones
    } catch(err) {
      navigate("/error")
    }

  }

  const handleEdit = (menuId) => {
    navigate(`/restaurant/menu/edit/${menuId}`)
  }

  const handleDelete = async (menuId) => {
    try{
     await deleteItemMenuService(menuId)
     getRestaurantMenu()

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

    <AddMenuItemForm/>

    {/* <button onClick={handleNew}>New Dish</button> */}
    
    {restMenu.map((eachRestMenu) => {
      return (
        <div className="eachDish">
        {/* <Link to={`/restaurant/${eachRestMenu._id}/menu`}><h3>{eachRestMenu.name}</h3></Link> */}
        <h3>{eachRestMenu.name}</h3>
         <p>{eachRestMenu.price} $</p> 
         <button onClick={()=>handleEdit(eachRestMenu._id)}>Edit</button>
         <button onClick={()=>handleDelete(eachRestMenu._id)}>Delete</button>
        </div>
      )

    })}
    
    </div>
  )
}

export default RestaurantMenu