import AddRestForm from "../components/AddRestForm";
import OwnerRestaurant from "../components/OwnerRestaurant";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getMyRestaurantsService } from "../services/restaurant.services";
import RingLoader from "react-spinners/RingLoader";


function Owner() {
  const [myRestaurants, setMyRestaurants] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [fetching, setFetching] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    getMyRestaurants();
  }, []);

  const getMyRestaurants = async () => {
    try {
      const response = await getMyRestaurantsService();
      console.log(response);
      setMyRestaurants(response.data);
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

  return (
    <div>
      <h3> OWNER PROFILE</h3>
      <div className="buttonHideShow">
        <button
          className="buttonHideShow"
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? "Hide Add Form" : "Show Add Form"}
        </button>
      </div>

      {showForm && <AddRestForm getMyRestaurants={getMyRestaurants} />}

      <OwnerRestaurant myRestaurants={myRestaurants} />
    </div>
  );
}

export default Owner;
