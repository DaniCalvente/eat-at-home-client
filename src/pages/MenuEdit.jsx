import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  getMenuItemInfoService,
  editmenuItemService,
} from "../services/menu.services.js";

function MenuEdit() {
  const { id } = useParams();
  console.log(id);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [dishType, setDishType] = useState("");
  const [allergens, setAllergens] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    getMenuItemInfo();
  }, []);

  const getMenuItemInfo = async () => {
    try {
      const response = await getMenuItemInfoService(id);
      setName(response.data.name);
      setDescription(response.data.description);
      setPrice(response.data.price);
      setDishType(response.data.dishType);
      setAllergens(response.data.allergens);
    } catch (err) {
      navigate("/error");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await editmenuItemService(id, {
        name,
        description,
        price,
        dishType,
        allergens,
      });
      navigate(`/restaurant/owner`);
    } catch (err) {
      navigate("/error");
    }
  };

  return (
    <div>
      <h3>Edit Menu Item</h3>
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
  );
}

export default MenuEdit;
