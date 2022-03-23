import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getMyRestaurantsService } from "../services/restaurant.services";
import ListGroup from "react-bootstrap/ListGroup";

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
      <h4> My Restaurants</h4>
      <ListGroup as="ol" numbered>
        <ListGroup.Item as="li">
          {props.myRestaurants.map((eachRestaurant) => {
            return (
              <div>
                <span>{eachRestaurant.restName}</span>

                <Link to={`/restaurant/edit/${eachRestaurant._id}`}>
                  <button>Edit Restaurant</button>
                </Link>
                <Link to={`/restaurant/menu/${eachRestaurant._id}`}>
                  <button>Edit Menu</button>
                </Link>
              </div>
            );
          })}
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}

export default OwnerRestaurant;
