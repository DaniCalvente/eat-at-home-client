import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { getRestaurantMenuService } from "../services/restaurant.services";
import { deleteItemMenuService } from "../services/menu.services";
import AddMenuItemForm from "../components/AddMenuItemForm";
import FoodOrder from "../components/FoodOrder";
import RingLoader from "react-spinners/RingLoader";


function RestaurantMenu(props) {
  const [restMenu, setRestMenu] = useState(null);
  const [isOwner, setIsOwner] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [boughtFood, setBoughtFood] = useState([])
  const [quantity, setQuantity] = useState(0)
  const [fetching, setFetching] = useState(true);

  const { id } = useParams();
  
  const navigate = useNavigate();

  useEffect(() => {
    getRestaurantMenu();
  }, []);

  const getRestaurantMenu = async () => {
    try {
      const response = await getRestaurantMenuService(id);
      // console.log(response);
      setRestMenu(response.data.menuItems);
      console.log(response.data.isOwner); //! este booleano, lo vamos a guardar en un estado, y luego ese estado lo utilizaremos para habilitar determinadas funciones
      setIsOwner(response.data.isOwner);
      setFetching(false);
    } catch (err) {
      navigate("/error");
    }
  };

  const handleEdit = (menuId) => {
    navigate(`/restaurant/menu/edit/${menuId}`);
  };

  const handleDelete = async (menuId) => {
    try {
      await deleteItemMenuService(menuId);
      getRestaurantMenu();
    } catch (err) {
      navigate("/error");
    }
  };

  const handleChange = (event) => {
    setQuantity(event.target.value)
  }

  const addToBoughtFood = (foodToBuy) => {
    console.log("producto a comprar es:", foodToBuy);
  }

  const handleSubmit = (event) => {
    
    event.preventDefault()
    addToBoughtFood()
  }



  //4. Sistema de loading

  if (fetching) {
    return (
      <div>
        <RingLoader />
      </div>
    );
  }

  return (
    <div>
      
      { props.user?.role === "owner" &&
        <div>
     
        <button onClick={() => setShowForm(!showForm)}>
          {showForm ? "Hide Add Form" : "Show Add Form"}
        </button>

        {showForm && <AddMenuItemForm />}
      </div>
       }

      {restMenu.map((eachRestMenu) => {
        return (
          <div className="eachDish">
            {/* <Link to={`/restaurant/${eachRestMenu._id}/menu`}><h3>{eachRestMenu.name}</h3></Link> */}
            <h3>{eachRestMenu.name}</h3>
            <h3>{eachRestMenu.price} $</h3>
            <p>{eachRestMenu.description}</p>
            
            {isOwner && (
              <button onClick={() => handleEdit(eachRestMenu._id)}>Edit</button>
            )}
            {isOwner && (
              <button onClick={() => handleDelete(eachRestMenu._id)}>
                Delete
              </button>
            )}
            
            {props.user?.role !== "owner" &&
             <form onSubmit={() => handleSubmit(eachRestMenu)} >
              <input 
              type="number" 
              name="quantity" 
              value={quantity} 
              onChange = {handleChange}/>
            <button>Order</button>
            </form> 
            }
            
            

          </div>
        );
      })}

      <FoodOrder boughtFood={boughtFood}/>
    </div>
  );
}

export default RestaurantMenu;
