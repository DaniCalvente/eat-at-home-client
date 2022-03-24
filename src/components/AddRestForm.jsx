import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { addRestaurantService } from "../services/restaurant.services";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function AddRestForm(props) {
  const [restName, setRestName] = useState("");
  const [foodType, setFoodType] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [postCode, setPostCode] = useState("");

  // const [restImg, setRestImg] = useState("")

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(e);

    try {
      const newRestaurant = { restName, foodType, city, address, postCode };

      const response = await addRestaurantService(newRestaurant);
      console.log(newRestaurant);
      props.getMyRestaurants();
      setRestName("");
      setFoodType("");
      setCity("");
      setAddress("");
      setPostCode("");
    } catch (err) {
      navigate("/error");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>Add Restaurant</p>
        <Form className = "profile-restaurant" >
          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formPlaintextPassword"
          >
            <Form.Label column sm="2">
              Name:
            </Form.Label>
            <Col sm="6">
              <Form.Control
                type="text"
                placeholder="name"
                value={restName}
                onChange={(e) => setRestName(e.target.value)}
              />
            </Col>
          </Form.Group>

          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formPlaintextPassword"
          >
            <Form.Label column sm="2">
            Food Type:
            </Form.Label>
            <Col sm="6">
              <Form.Control type="text" placeholder="food type"
              value={foodType}
              onChange={(e) => setFoodType(e.target.value)} />
            </Col>
          </Form.Group>
          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formPlaintextPassword"
          >
          <Form.Label column sm="2">
          City:
            </Form.Label>
            <Col sm="6">
              <Form.Control type="text" placeholder="city"
              value={city}
              onChange={(e) => setCity(e.target.value)} />
            </Col>
          </Form.Group>


          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formPlaintextPassword"
          >
          <Form.Label column sm="2">
          Address:
            </Form.Label>
            <Col sm="6">
              <Form.Control type="text" placeholder="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)} />
            </Col>
          </Form.Group>


          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formPlaintextPassword"
          >
          <Form.Label column sm="2">
          Post Code:
            </Form.Label>
            <Col sm="6">
              <Form.Control type="text" placeholder="post code"
              value={postCode}
              onChange={(e) => setPostCode(e.target.value)} />
            </Col>
          </Form.Group>


        </Form>


        <br />

        {/* <label htmlFor="restImg">Image:</label>
      <input
        type="text"
        name="restImg"
        value={restImg}
        onChange={handleRestImg}     

      <br />/> */}

        <button>Add</button>
        <br />
      </form>
    </div>
  );
}

export default AddRestForm;
