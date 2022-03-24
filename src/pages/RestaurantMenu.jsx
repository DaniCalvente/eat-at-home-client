import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { getRestaurantMenuService } from "../services/restaurant.services";
import { deleteItemMenuService } from "../services/menu.services";
import AddMenuItemForm from "../components/AddMenuItemForm";

function RestaurantMenu(props) {
  const [restMenu, setRestMenu] = useState(null);
  const [isOwner, setIsOwner] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams();
  const [showForm, setShowForm] = useState(false);

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

  //4. Sistema de loading

  if (!restMenu) {
    return <h3>...Loading</h3>;
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
            <p>{eachRestMenu.price} $</p>
            {isOwner && (
              <button onClick={() => handleEdit(eachRestMenu._id)}>Edit</button>
            )}
            {isOwner && (
              <button onClick={() => handleDelete(eachRestMenu._id)}>
                Delete
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default RestaurantMenu;
