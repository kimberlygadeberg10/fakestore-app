// pages/Home.jsx

import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Home() {
  return (
    <Container className="text-center mt-5">
      <h1>Welcome to FakeStore</h1>
      <p>Your one-stop shop for everything!</p>

      <Button as={Link} to="/products" variant="primary">
        Browse Products
      </Button>
    </Container>
  );
}

export default Home;
