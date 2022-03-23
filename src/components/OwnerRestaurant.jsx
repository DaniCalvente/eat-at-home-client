import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getMyRestaurantsService } from "../services/restaurant.services";

function OwnerRestaurant(props) {
  // const [myRestaurants, setMyRestaurants] = useState(null);
  // const navigate = useNavigate();

  // useEffect(() => {
  //   getMyRestaurants();
  // }, []);

  // const getMyRestaurants = async () => {
  //   try {
  //     const response = await getMyRestaurantsService();
  //     console.log(response);
  //     setMyRestaurants(response.data);
  //   } catch (err) {
  //     navigate("/error");
  //   }
  // };

  if (!props.myRestaurants) {
    return <h3>...Loading</h3>;
  }

  return (
    <div>
      <h4> Mis Restaurantes</h4>

      {props.myRestaurants.map((eachRestaurant) => {
        return (
          <div>
            <span>{eachRestaurant.restName}</span>
            
           
            <Link to={`/restaurant/edit/${eachRestaurant._id}`}><button>Editar Restaurante</button></Link>
            <Link to={`/restaurant/menu/${eachRestaurant._id}`}><button>Editar Menu</button></Link>
          </div>
        );
      })}
    </div>
  );
}

export default OwnerRestaurant;
