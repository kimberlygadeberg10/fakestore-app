import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Form, Button, Spinner, Alert } from "react-bootstrap";
import axios from "axios";

function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState("");
  const [fetchError, setFetchError] = useState("");
  const [submitError, setSubmitError] = useState("");

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        const product = res.data;
        setTitle(product.title);
        setPrice(product.price);
        setDescription(product.description);
        setCategory(product.category);
        setLoading(false);
      })
      .catch(() => {
        setFetchError("Failed to load product data.");
        setLoading(false);
      });
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSubmitError("");
    setSuccess("");

    const updatedProduct = {
      title,
      price: parseFloat(price),
      description,
      category,
    };

    try {
      const response = await axios.put(
        `https://fakestoreapi.com/products/${id}`,
        updatedProduct,
      );

      console.log("API Response:", response.data);

      setSuccess("Product updated successfully!");

      // 🔥 Redirect after 1.5 seconds
      setTimeout(() => {
        navigate(`/products/${id}`);
      }, 1500);

    } catch (err) {
      console.error(err);
      setSubmitError("Failed to update product. Try again.");
    }
  };

  if (loading) {
    return (
      <Container className="text-center mt-5">
        <Spinner animation="border" />
      </Container>
    );
  }

  if (fetchError) {
    return (
      <Container className="mt-5">
        <Alert variant="danger">{fetchError}</Alert>
      </Container>
    );
  }

  return (
    <Container className="mt-5">
      <h2>Edit Product</h2>

      {success && <Alert variant="success">{success}</Alert>}
      {submitError && <Alert variant="danger">{submitError}</Alert>}

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="productTitle">
          <Form.Label>Product Title</Form.Label>
          <Form.Control
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="productPrice">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="productDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="productCategory">
          <Form.Label>Category</Form.Label>
          <Form.Control
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
        </Form.Group>

        <Button type="submit" variant="primary">
          Update Product
        </Button>
      </Form>
    </Container>
  );
}

export default EditProduct;
