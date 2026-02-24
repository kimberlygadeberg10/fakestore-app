// pages/ProductDetails.jsx

import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Container, Button, Spinner, Alert } from "react-bootstrap";
import DeleteModal from "../components/DeleteModal";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`).then((res) => {
      setProduct(res.data);
      setLoading(false);
    });
  }, [id]);

  const handleDelete = () => {
    axios.delete(`https://fakestoreapi.com/products/${id}`).then(() => {
      navigate("/products");
    });
  };

  if (loading) return <Spinner className="m-5" />;

  return (
    <Container className="mt-4">
      <h2>{product.title}</h2>
      <img src={product.image} height="200" />
      <p>{product.description}</p>
      <h4>${product.price}</h4>

      <Button variant="warning" onClick={() => navigate(`/edit-product/${id}`)}>
        Edit
      </Button>

      <Button
        variant="danger"
        className="ms-2"
        onClick={() => setShowModal(true)}
      >
        Delete
      </Button>

      <DeleteModal
        show={showModal}
        handleClose={() => setShowModal(false)}
        handleDelete={handleDelete}
      />
    </Container>
  );
}

export default ProductDetails;
