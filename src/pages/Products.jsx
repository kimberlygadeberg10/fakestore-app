// Import React hooks for state and lifecycle
import { useState, useEffect } from "react";

// Import Bootstrap layout & feedback components
import { Container, Row, Col, Spinner, Alert } from "react-bootstrap";

// Import axios for making API requests
import axios from "axios";

// Import reusable ProductCard component
import ProductCard from "../components/ProductCard";

function Products() {
  // Store the list of products from the API
  const [products, setProducts] = useState([]);

  // Track loading state while fetching data
  const [loading, setLoading] = useState(true);

  // Track any API errors
  const [error, setError] = useState(null);

  // Runs once when component mounts
  useEffect(() => {
    // Make GET request to FakeStore API
    axios
      .get("https://fakestoreapi.com/products")

      .then((response) => {
        // Save returned data into state
        setProducts(response.data);

        // Turn off loading spinner
        setLoading(false);
      })

      .catch(() => {
        // Show user-friendly error message
        setError("Failed to fetch products");

        // Stop loading spinner
        setLoading(false);
      });
  }, []); // Empty dependency array means run only once

  // -------------------------
  // CONDITIONAL RENDERING
  // -------------------------

  // Show spinner while loading
  if (loading) {
    return (
      <Container className="text-center mt-5">
        <Spinner animation="border" />
      </Container>
    );
  }

  // Show error message if API fails
  if (error) {
    return (
      <Container className="mt-5">
        <Alert variant="danger">{error}</Alert>
      </Container>
    );
  }

  // -------------------------
  // MAIN RENDER
  // -------------------------

  return (
    <Container className="mt-5">
      <Row>
        {products.map((product) => (
          <Col key={product.id} md={4} className="mb-4">
            {/* Pass each product into reusable card */}
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Products;
