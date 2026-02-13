import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
    return (
        <Card>
            <Card.Img variant="top" src={product.image} style={{ height: "250px", objectFit: "contain" }} />
            <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Title>${product.price}</Card.Title>

                <Button as={Link} to={`/products/${product.id}`}>
                View Details
                </Button>
            </Card.Body>
        </Card>
    );
}

export default ProductCard;