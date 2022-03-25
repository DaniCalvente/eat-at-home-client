import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CarouselHome from "../components/CarouselHome";
import Figure from "react-bootstrap/Figure";
import logo_EAT_Img from "../images/logo_EAT.png";
import Form from "react-bootstrap/Form";

function Home(props) {
  const arrCity = [
    "Atenas",
    "Madrid",
    "Berlín",
    "Viena",
    "Ámsterdam",
    "Praga",
    "Roma",
    "Budapest",
    "Londres",
    "París",
    "Barcelona",
    "Milan",
    "Munich",
    "Liverpool",
    "Helsinki",
    "Copenhague",
    "Zurich",
    "Granada",
    "Sevilla",
  ];

  const [searchCityRestaurant, setSearchCityRestaurant] = useState("");

  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate(`/restaurant/${searchCityRestaurant}`);
  };

  const handleSelect = (event) => {
    setSearchCityRestaurant(event.target.value);
    console.log(event.target.value);
  };
  return (
    <div className="logoHome">
      <img width="500px" src={logo_EAT_Img} alt="delivery" />

      <h3>Hi {props.user?.name}!!. What would you like to eat today? </h3>

      <div className="owner-restaurant-container">
        {props.user?.role !== "owner" && (
          <form className="searchForm" onSubmit={handleSubmit}>
            <Form.Select
              aria-label="Default select example"
              value={searchCityRestaurant}
              onChange={handleSelect}
            >
              <option>Select your city</option>
              {arrCity.map((eachCity) => {
                return <option value={eachCity}>{eachCity}</option>;
              })}
            </Form.Select>

            <button className="buttonHideShow">Enter</button>
          </form>
        )}
      </div>

      <div className="carousel">
        <CarouselHome />
      </div>
    </div>
  );
}

export default Home;
