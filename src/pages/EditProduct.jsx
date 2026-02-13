// React hooks
import { useState, useEffect } from "react";

// Router hooks
import { useParams, useNavigate } from "react-router-dom";

// Bootstrap components
import { Container, Form, Button, Spinner, Alert } from "react-bootstrap";

// Axios for API requests
import axios from "axios";

function EditProduct() {
  const { id } = useParams(); // Get product ID from URL
  const navigate = useNavigate(); // For redirecting after edit

  // Form state
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  // Loading & messages
  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  // Fetch existing product data when page loads
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
        setError("Failed to load product data");
        setLoading(false);
      });
  }, [id]);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    setError(""); // reset previous errors
    setSuccess(""); // reset previous success messages

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
      setError("");

      // Optional: redirect to product details or listing
      // navigate(`/products/${id}`);
    } catch (err) {
      console.error(err);
      setError("Failed to update product. Try again.");
      setSuccess("");
    }
  };

  // Show loading spinner
  if (loading) {
    return (
      <Container className="text-center mt-5">
        <Spinner animation="border" />
      </Container>
    );
  }

  // Show fetch error (only for initial load)
  if (!loading && error && !success) {
    return (
      <Container className="mt-5">
        <Alert variant="danger">{error}</Alert>
      </Container>
    );
  }

  return (
    <Container className="mt-5">
      <h2>Edit Product</h2>

      {/* Show submission messages */}
      {success && <Alert variant="success">{success}</Alert>}
      {error && <Alert variant="danger">{error}</Alert>}

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
