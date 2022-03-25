import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getCityRestaurantsService } from "../services/restaurant.services";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import RingLoader from "react-spinners/RingLoader";
// import restaurantImg from "../images/restaurant.jpeg"
import Image from "react-bootstrap/Image";

function RestaurantList() {
  //1.Crear estado que controle la informacion
  const [cityRestaurants, setCityRestaurants] = useState(null);
  const [fetching, setFetching] = useState(true);

  const navigate = useNavigate();
  const { city } = useParams();

  //2. UseEfect (importarla)para buscar la informacion componentDidMount
  useEffect(() => {
    getCityRestaurants();
  }, []);

  //3. La fx async que haga la llamada a la API y actualice el estado
  const getCityRestaurants = async () => {
    try {
      const response = await getCityRestaurantsService(city);
      // console.log(response)
      setCityRestaurants(response.data);
      setFetching(false);
    } catch (err) {
      navigate("/error");
    }
  };

  if (fetching) {
    return (
      <div>
        <RingLoader />
      </div>
    );
  }

  //4. Sistema de loading

  if (!cityRestaurants) {
    return <h3>...Loading</h3>;
  }

  return (
    <div>
      <h2>Restaurants in {`${city[0].toUpperCase() + city.slice(1)}`}</h2>

      {cityRestaurants.map((eachRestaurant) => {
        return (
          <div>
            <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="../images/restaurant.jpeg" />
              
              <Card.Body>
                <Card.Title>
                  {" "}
                  <Link to={`/restaurant/menu/${eachRestaurant._id}`}>
                    <h3>{eachRestaurant.restName}</h3>
                  </Link>
                </Card.Title>
                <Card.Text>
                  <h4>{eachRestaurant.foodType}</h4>
                </Card.Text>
                <Button variant="dark">Add to favorites</Button>
              </Card.Body>
            </Card>
          </div>
        );
      })}
    </div>
  );
}

export default RestaurantList;
