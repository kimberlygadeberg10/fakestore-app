// React hooks
import { useState, useEffect } from "react";

// Router tools
import { useParams, useNavigate } from "react-router-dom";

// Bootstrap components
import { Container, Row, Col, Spinner, Alert, Button } from "react-bootstrap";

// Axios for API calls
import axios from "axios";

function ProductDetails() {
    // Get the product ID from the URL
    const { id } = useParams();

    // For redirecting after delete
    const navigate = useNavigate();

    // Store product data
    const [product, setProduct] = useState(null);

    // Loading state
    const [loading, setLoading] = useState(true);

    // Error state
    const [error, setError] = useState(null);

    // Fetch product when component loads
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

    //Delete handler
    const handleDelete = () => {
        axios
        .delete(`https://fakestoreapi.com/products/${id}`)
        .then(() => {
            alert("Product deleted successfully (mock API");
            navigate("/products");
        })
        .catch(() => {
            alert("Failed to delete product");
        });
    };

    // Continual rendering

    if (loading) {
        return (
            <Container className="text-center mt-5">
                <Spinner animation="border" />
            </Container>
        );
    }

    if (error) {
        return (
            <Container className="mt-5">
                <Alert variant="danger">{error}</Alert>
            </Container>
        );
    }

    return (
        <Container className="mt-5">
            <Row>
                <Col md={6}>
                <img src={product.image} alt={product.title} className="img-fluid" />
                </Col>

                <Col md={6}>
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <h4>${product.price}</h4>
                <p><strong>Category:</strong> {product.category}</p>

                <Button variant="danger" onClick={handleDelete}>
                    Delete Product
                </Button>
                </Col>
            </Row>
        </Container>
    );
    }

    export default ProductDetails;