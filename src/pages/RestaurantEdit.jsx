import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import {
  getRestaurantInfoService,
  editRestaurantService,
  deleteRestaurantService,
} from "../services/restaurant.services.js";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function RestaurantEdit() {
  const { id } = useParams();
  // console.log(id);
  // const [restaurantInfo, setRestaurantInfo] = useState("")
  const [restName, setRestName] = useState("");
  const [foodType, setFoodType] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [postCode, setPostCode] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  const getRestaurantInfo = async () => {
    try {
      const response = await getRestaurantInfoService(id);
      // setRestaurantInfo(response.data)
      setRestName(response.data.restName);
      setFoodType(response.data.foodType);
      setCity(response.data.city);
      setAddress(response.data.address);
      setPostCode(response.data.postCode);
    } catch (err) {
      navigate("/error");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await editRestaurantService(id, {
        restName,
        foodType,
        city,
        address,
        postCode,
      });
      navigate(`/restaurant/owner`);
    } catch (err) {
      navigate("/error");
    }
  };

  const handleDelete = async () => {
    try {
      await deleteRestaurantService(id);
      navigate(`/restaurant/owner`);
    } catch (err) {
      navigate("/error");
    }
  };

  return (
    <div className="editRestaurant">
      <h3>Edit Restaurant</h3>
      {/* <label htmlFor="restImg">Codigo Postal:</label>
      <input
        type="text"
        name="restImg"
        value={restImg}
        onChange={handleRestImg}     

      <br />/> */}
      <Form onSubmit={handleSubmit} className="formSign">
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              placeholder="name"
              type="text"
              value={restName}
              onChange={(e) => setRestName(e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Food Type</Form.Label>
            <Form.Control
              type="text"
              placeholder="food type"
              value={foodType}
              onChange={(e) => setFoodType(e.target.value)}
            />
          </Form.Group>
        </Row>
        <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Label>City</Form.Label>
          <Form.Control
            placeholder="Enter your name"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </Form.Group>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Address</Form.Label>
            <Form.Control
              placeholder="Enter your address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Post Code</Form.Label>
            <Form.Control
              value={postCode}
              onChange={(e) => setPostCode(e.target.value)}
            />
          </Form.Group>
        </Row>{" "}
        <div>
          <Button
          className="button" variant="dark" type="submit">
            Update Restaurant
          </Button>
        </div>
      </Form>{" "}
      <div>
        <span>
          <Button
            className="buttonDelete"
            onClick={handleDelete}
            variant="dark"
            type="submit"
          >
            Delete Restaurant
          </Button>
        </span>
      </div>
    </div>
  );
}

export default RestaurantEdit;
