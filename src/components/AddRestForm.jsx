import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {addRestaurantService} from '../services/restaurant.services'

function AddRestForm() {
  const [restName, setRestName] = useState("");
  const [foodType, setFoodType] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [postCode, setPostCode] = useState("");

  // const [restImg, setRestImg] = useState("")

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(e);

    try {
      const newRestaurant = { restName, foodType, city, address, postCode };
      
      const response = await addRestaurantService(newRestaurant)
      console.log(newRestaurant);
      setRestName("")
      setFoodType("")
      setCity("")
      setAddress("")
      setPostCode("")

    } catch (err) {
      navigate("/error");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>Crea tu restaurante</p>
        <label htmlFor="restName">Nombre:</label>
        <input
          type="text"
          name="restName"
          value={restName}
          onChange={(e) => setRestName(e.target.value)}
        />

        <br />

        <label htmlFor="foodType">Cocina:</label>
        <input
          type="text"
          name="foodType"
          value={foodType}
          onChange={(e) => setFoodType(e.target.value)}
        />

        <br />

        <label htmlFor="city">Ciudad:</label>
        <input
          type="text"
          name="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <br />

        <label htmlFor="address">Direccion:</label>
        <input
          type="text"
          name="addreess"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />

        <br />
        <label htmlFor="postCode">Codigo Postal:</label>
        <input
          type="text"
          name="postCode"
          value={postCode}
          onChange={(e) => setPostCode(e.target.value)}
        />
        <br />

        {/* <label htmlFor="restImg">Codigo Postal:</label>
      <input
        type="text"
        name="restImg"
        value={restImg}
        onChange={handleRestImg}     

      <br />/> */}

        <button>Crear</button>
      </form>
    </div>
  );
}

export default AddRestForm;
