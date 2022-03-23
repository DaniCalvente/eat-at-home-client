import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getMyRestaurantsService } from "../services/restaurant.services";

import ListGroup from 'react-bootstrap/ListGroup' 

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
      <ListGroup as="ol" numbered>
        <ListGroup.Item as="li">
          {myRestaurants.map((eachRestaurant) => {
            return <p>{eachRestaurant.restName}</p>;
          })}
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}

export default OwnerRestaurant;
