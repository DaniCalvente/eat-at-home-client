import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getMyRestaurantsService } from "../services/restaurant.services";

function OwnerRestaurant() {
  const [myRestaurants, setMyRestaurants] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    getMyRestaurants();
  }, []);

  const getMyRestaurants = async () => {
    try {
      const response = await getMyRestaurantsService();
      console.log(response);
      setMyRestaurants(response.data);
    } catch (err) {
      navigate("/error");
    }
  };

  if (!myRestaurants) {
    return <h3>...Loading</h3>;
  }

  return (
    <div>
      <h4> Mis Restaurantes</h4>

      {myRestaurants.map((eachRestaurant) => {
        return (
          <div>
            <span>{eachRestaurant.restName}</span>
            <button>Editar Restaurante</button>
            <button>Eliminar Restaurante</button>
            <button>Editar Menu</button>
          </div>
        );
      })}
    </div>
  );
}

export default OwnerRestaurant;
