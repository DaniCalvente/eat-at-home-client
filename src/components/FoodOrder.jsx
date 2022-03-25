

function FoodOrder(props) {

    console.log(props.boughtFood);

  return (
    <div className="foodOrder">
    
    <h4>Food Order</h4>

    {props.boughtFood.map((eachItemToBuy) => {
      return(
        <div className="foodToPay">
          <p>{eachItemToBuy.quantity} x</p>
        <p>{eachItemToBuy.name} </p>
        <p>{eachItemToBuy.price = (eachItemToBuy.price * eachItemToBuy.quantity) / 2 } $</p>
        </div>
  

      )

    })}
    
    </div>
  )
}

export default FoodOrder