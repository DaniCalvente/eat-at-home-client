import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CarouselHome from "../components/CarouselHome";



function Home() {
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
    <div>
      <h1>Eat at Home</h1>

      <div>
        
        <form className="searchForm" onSubmit={handleSubmit}>
          <label htmlFor="city">Select your city </label>
          <select
            name="city"
            value={searchCityRestaurant}
            onChange={handleSelect}
          >
            {arrCity.map((eachCity) => {
              return <option value={eachCity}>{eachCity}</option>;
            })}
          </select>

          <button>Enter</button>
        </form>
      </div>
      <CarouselHome/>
    </div>
  );
}

export default Home;
