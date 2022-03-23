import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import {
  getRestaurantInfoService,
  editRestaurantService,
  deleteRestaurantService,
} from "../services/restaurant.services.js";

function RestaurantEdit() {
  const { id } = useParams();
  // console.log(id);
  // const [restaurantInfo, setRestaurantInfo] = useState("")
  const [restName, setRestName] = useState("");
  const [foodType, setFoodType] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [postCode, setPostCode] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  const getRestaurantInfo = async () => {
    try {
      const response = await getRestaurantInfoService(id);
      // setRestaurantInfo(response.data)
      setRestName(response.data.restName);
      setFoodType(response.data.foodType);
      setCity(response.data.city);
      setAddress(response.data.address);
      setPostCode(response.data.postCode);
    } catch (err) {
      navigate("/error");
    }
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await editRestaurantService(id, {
        restName,
        foodType,
        city,
        address,
        postCode,
      });
      navigate(`/restaurant/owner`);  
    } catch (err) {
      navigate("/error");
    }
  }

  const handleDelete = async () => {
    try{
     await deleteRestaurantService(id)
      navigate(`/restaurant/owner`); 
    } catch(err) {
      navigate("/error")
    }
  }

    return (
      <div>
        <h3>Editar Restaurante</h3>

        <form onSubmit={handleSubmit}>
          
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
            name="address"
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
          <button>Actualizar</button>
        </form>

        <button onClick={handleDelete}>Eliminar Restaurante</button>

        
      </div>
    );
  
}

export default RestaurantEdit;
