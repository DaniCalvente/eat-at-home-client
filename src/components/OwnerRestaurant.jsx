import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getMyRestaurantsService } from "../services/restaurant.services";

function OwnerRestaurant() {
    const [myRestaurants, setMyRestaurants] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        getMyRestaurants()

    }, [])

    const getMyRestaurants = async () => {
        try {
            const response = await getMyRestaurantsService()
            setMyRestaurants(response.data)
            
        }catch(err) {
            navigate("/error")
        }
    }

    if(!myRestaurants) {
        return <h3>...Loading</h3>
    }

  return (
    <div>

        <h4> Mi Restaurante</h4>

        {myRestaurants.map((eachRestaurant) => {
            <p>{eachRestaurant.restName}</p>
        })}


    </div>
  )
}

export default OwnerRestaurant