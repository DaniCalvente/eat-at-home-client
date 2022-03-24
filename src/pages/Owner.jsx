import AddRestForm from "../components/AddRestForm";
import OwnerRestaurant from "../components/OwnerRestaurant";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getMyRestaurantsService } from "../services/restaurant.services";




function Owner() {
  
  const [myRestaurants, setMyRestaurants] = useState(null);
  const [showForm, setShowForm] = useState(false);

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
  return (
    <div>
      <h3> OWNER PROFILE</h3>

      <button onClick={() => setShowForm(!showForm)}>
      
      {showForm ? "Hide Add Form" : "Show Add Form"}
    </button>

    {showForm && <AddRestForm getMyRestaurants={getMyRestaurants}/>}


      
      <OwnerRestaurant myRestaurants={myRestaurants}/>
    </div>
  );
}

export default Owner;
