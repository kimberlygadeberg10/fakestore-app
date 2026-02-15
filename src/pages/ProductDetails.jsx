// React hooks
import { useState, useEffect } from "react";

// Router hooks
import { useParams, useNavigate } from "react-router-dom";

// Bootstrap components
import {
  Container,
  Row,
  Col,
  Spinner,
  Alert,
  Button,
  Modal,
} from "react-bootstrap";

// Axios for API calls
import axios from "axios";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  // State
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Fetch product on mount
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        setProduct(response.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch product details");
        setLoading(false);
      });
  }, [id]);

  // Delete product
  const handleDelete = () => {
    axios
      .delete(`https://fakestoreapi.com/products/${id}`)
      .then(() => {
        setShowModal(false);
        alert("Product deleted successfully (mock API)");
        navigate("/products");
      })
      .catch(() => {
        alert("Failed to delete product");
      });
  };

  // --------------------
  // Loading State
  // --------------------
  if (loading) {
    return (
      <Container className="text-center mt-5">
        <Spinner animation="border" />
      </Container>
    );
  }

  // --------------------
  // Error State
  // --------------------
  if (error) {
    return (
      <Container className="mt-5">
        <Alert variant="danger">{error}</Alert>
      </Container>
    );
  }

  // --------------------
  // Main Render
  // --------------------
  return (
    <Container className="mt-5">
      <Row>
        <Col md={6}>
          <img
            src={product.image}
            alt={product.title}
            className="img-fluid"
            style={{ maxHeight: "400px", objectFit: "contain" }}
          />
        </Col>

        <Col md={6}>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <h4>${product.price}</h4>
          <p>
            <strong>Category:</strong> {product.category}
          </p>

          {/* Edit Button */}
          <Button
            variant="warning"
            className="me-2"
            onClick={() => navigate(`/edit-product/${product.id}`)}
          >
            Edit Product
          </Button>

          {/* Delete Button */}
          <Button variant="danger" onClick={() => setShowModal(true)}>
            Delete Product
          </Button>
        </Col>
      </Row>

      {/* Delete Confirmation Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Deletion</Modal.Title>
        </Modal.Header>

        <Modal.Body>Are you sure you want to delete this product?</Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>

          <Button variant="danger" onClick={handleDelete}>
            Yes, Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default ProductDetails;
