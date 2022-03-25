import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getMyRestaurantsService } from "../services/restaurant.services";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

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
    <div className="owner-restaurant-container">
      <h4> My Restaurants</h4>
      <ListGroup className="myRestaurants">
        <ListGroup.Item as="li">
          {props.myRestaurants.map((eachRestaurant) => {
            return (
              <div className="owner-my-restaurant">
                <div className="owner-restaurant-name">
                  <span>{eachRestaurant.restName}</span>
                </div>
                <div className="owner-restaurant-buttons">
                  <ButtonGroup aria-label="Basic example">
                    <Link to={`/restaurant/edit/${eachRestaurant._id}`}>
                      <Button variant="secondary" className="buttonOwner">
                        Edit Restaurant
                      </Button>
                    </Link>
                    <Link to={`/restaurant/menu/${eachRestaurant._id}`}>
                      <Button variant="secondary" className="buttonOwner">
                        Edit Menu
                      </Button>
                    </Link>
                  </ButtonGroup>
                </div>
              </div>
            );
          })}
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}

export default OwnerRestaurant;
