import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";



function RestaurantEdit() {
  return (
    <div>
        <h3>Editar Restaurante</h3>

        <form >
     {/* onSubmit={handleSubmit} */}
        <label htmlFor="restName">Nombre:</label>
        <input
          type="text"
          name="restName"
        //   value={restName}
        //   onChange={(e) => setRestName(e.target.value)}
        />

        <br />

        <label htmlFor="foodType">Cocina:</label>
        <input
          type="text"
          name="foodType"
        //   value={foodType}
        //   onChange={(e) => setFoodType(e.target.value)}
        />

        <br />

        <label htmlFor="city">Ciudad:</label>
        <input
          type="text"
          name="city"
        //   value={city}
        //   onChange={(e) => setCity(e.target.value)}
        />
        <br />

        <label htmlFor="address">Direccion:</label>
        <input
          type="text"
          name="addreess"
        //   value={address}
        //   onChange={(e) => setAddress(e.target.value)}
        />

        <br />
        <label htmlFor="postCode">Codigo Postal:</label>
        <input
          type="text"
          name="postCode"
        //   value={postCode}
        //   onChange={(e) => setPostCode(e.target.value)}
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

      <button>Eliminar Restaurante</button>

      <button>Crear Plato</button>


    </div>
  )
}

export default RestaurantEdit;