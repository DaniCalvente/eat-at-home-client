import React from 'react'

function AddMenuItemForm() {


    
  return (
    <div>
    
    <h3>Add New Dish</h3>

    <form action="">

    <label htmlFor="name">Name: </label>
        <input
          type="text"
          name="name"
        //   value={name}
        //   onChange={(e) => setName(e.target.value)}
        />
        <br />
        <label htmlFor="description">Description: </label>
        <input
          type="text"
          name="description"
        //   value={description}
        //   onChange={(e) => setDescription(e.target.value)}
        />
        <br />
        <label htmlFor="price">Price: </label>
        <input
          type="text"
          name="price"
        //   value={price}
        //   onChange={(e) => setPrice(e.target.value)}
        />
        <br />
        <label htmlFor="dishType">Dish Type: </label>
        <input
          type="text"
          name="dishType"
        //   value={dishType}
        //   onChange={(e) => setDishType(e.target.value)}
        />
        <br />
        <label htmlFor="allergens">Allergens: </label>
        <input
          type="text"
          name="allergens"
        //   value={allergens}
        //   onChange={(e) => setAllergens(e.target.value)}
        />

        <button>Submit</button>


    </form>
    
    </div>
  )
}

export default AddMenuItemForm