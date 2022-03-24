import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { addMenuItemService } from "../services/restaurant.services";

function AddMenuItemForm() {
 const {id} = useParams()

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [dishType, setDishType] = useState("");
  const [allergens, setAllergens] = useState("");

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(e);

    try {
      const newMenuItem = { name, description, price, dishType, allergens };

      const response = await addMenuItemService( id, newMenuItem)
      console.log(response);
      setName("");
      setDescription("");
      setPrice("");
      setDishType("");
      setAllergens("");
    } catch (err) {
      navigate("/error");
    }
  };


  return (
    <div>
    
    <h3>Add New Dish</h3>

    <form onSubmit={handleSubmit}>

    <label htmlFor="name">Name: </label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <label htmlFor="description">Description: </label>
        <input
          type="text"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <br />
        <label htmlFor="price">Price: </label>
        <input
          type="text"
          name="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <br />
        <label htmlFor="dishType">Dish Type: </label>
        <input
          type="text"
          name="dishType"
          value={dishType}
          onChange={(e) => setDishType(e.target.value)}
        />
        <br />
        <label htmlFor="allergens">Allergens: </label>
        <input
          type="text"
          name="allergens"
          value={allergens}
          onChange={(e) => setAllergens(e.target.value)}
        />

        <button>Submit</button>


    </form>
    
    </div>
  )
}

export default AddMenuItemForm