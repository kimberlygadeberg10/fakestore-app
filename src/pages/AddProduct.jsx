// pages/AddProduct.jsx

import { useState } from "react";
import axios from "axios";
import { Container, Form, Button, Alert } from "react-bootstrap";

function AddProduct() {
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    description: "",
    category: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("https://fakestoreapi.com/products", formData).then(() => {
      setSuccess(true);
    });
  };

  return (
    <Container className="mt-4">
      <h2>Add Product</h2>

      {success && (
        <Alert variant="success">
          Product created successfully! (FakeStoreAPI does not persist data.)
        </Alert>
      )}

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control name="title" onChange={handleChange} required />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Price</Form.Label>
          <Form.Control
            name="price"
            type="number"
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control name="description" onChange={handleChange} required />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Category</Form.Label>
          <Form.Control name="category" onChange={handleChange} required />
        </Form.Group>

        <Button type="submit">Create Product</Button>
      </Form>
    </Container>
  );
}

export default AddProduct;
