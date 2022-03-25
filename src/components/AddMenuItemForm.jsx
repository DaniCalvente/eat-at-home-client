import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { addMenuItemService } from "../services/restaurant.services";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function AddMenuItemForm() {
  const { id } = useParams();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [dishType, setDishType] = useState("");
  const [allergens, setAllergens] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(e);

    try {
      const newMenuItem = { name, description, price, dishType, allergens };

      const response = await addMenuItemService(id, newMenuItem);
      console.log(response);
      setName("");
      setDescription("");
      setPrice("");
      setDishType("");
      setAllergens("");
    } catch (err) {
      navigate("/error");
    }
  };

  return (
    <div className="editMenu">
      <h3>Add New Dish</h3>

      <Form onSubmit={handleSubmit} className="formSign">
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label className="formLabelSize">Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridAddress2">
            <Form.Label className="formLabelSize">Price</Form.Label>
            <Form.Control
              type="number"
              name="price"
              placeholder="food price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridPassword">
          <Form.Label className="formLabelSize">Description</Form.Label>
          <Form.Control
            type="text"
            placeholder="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridPassword">
          <Form.Label className="formLabelSize">Dish Type</Form.Label>
          <Form.Control
            type="text"
            placeholder="dish type"
            value={dishType}
            onChange={(e) => setDishType(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label className="formLabelSize">Allergens</Form.Label>
          <Form.Control
            type="text"
            placeholder="allergens"
            value={allergens}
            onChange={(e) => setAllergens(e.target.value)}
          />
        </Form.Group>

        <Button className="buttonUpdate" variant="outline-dark" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default AddMenuItemForm;
