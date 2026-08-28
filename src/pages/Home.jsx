import { useEffect, useState } from "react";
import { Container, Button, Card, Row, Col, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

function Home() {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getFeaturedProducts = async () => {
      try {
        const response = await axios.get(
          "https://fakestoreapi.com/products?limit=4",
        );

        setFeaturedProducts(response.data);
      } catch (error) {
        console.error("Error loading featured products:", error);
      } finally {
        setLoading(false);
      }
    };

    getFeaturedProducts();
  }, []);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <Container>
          <div className="home-hero">
            <div className="home-hero-text">
              <p className="home-eyebrow">WELCOME TO FAKESTORE</p>

              <h1>Find Something You’ll Love</h1>

              <p className="home-subtitle">
                Discover clothing, electronics, jewelry, and everyday favorites
                all in one place.
              </p>

              <div className="hero-buttons">
                <Button as={Link} to="/products" variant="dark" size="lg">
                  Shop Products
                </Button>
              </div>
            </div>

            <div className="home-hero-image">
              <img
                src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
                alt="Featured backpack"
                className="hero-product-image"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Featured Products */}
      <section className="featured-section">
        <Container>
          <div className="section-heading">
            <div>
              <p className="section-eyebrow">FEATURED PRODUCTS</p>

              <h2>Popular Picks</h2>

              <p>Take a look at a few popular products from our collection.</p>
            </div>

            <Button as={Link} to="/products" variant="outline-dark">
              View All Products
            </Button>
          </div>

          {loading ? (
            <div className="featured-loading">
              <Spinner animation="border" />
            </div>
          ) : (
            <Row className="g-4">
              {featuredProducts.map((product) => (
                <Col key={product.id} xs={12} sm={6} lg={3}>
                  <Card className="featured-card h-100">
                    <div className="featured-image-container">
                      <Card.Img
                        variant="top"
                        src={product.image}
                        alt={product.title}
                        className="featured-product-image"
                      />
                    </div>

                    <Card.Body className="d-flex flex-column">
                      <p className="featured-category">{product.category}</p>

                      <Card.Title className="featured-title">
                        {product.title}
                      </Card.Title>

                      <div className="mt-auto">
                        <p className="featured-price">
                          ${product.price.toFixed(2)}
                        </p>

                        <Button
                          as={Link}
                          to={`/products/${product.id}`}
                          variant="dark"
                          className="w-100"
                        >
                          View Product
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          )}
        </Container>
      </section>

      {/* Store Benefits */}
      <section className="benefits-section">
        <Container>
          <div className="home-features">
            <div>
              <div className="feature-icon">🛍️</div>
              <h3>Easy Shopping</h3>
              <p>Browse products and view details in just a few clicks.</p>
            </div>

            <div>
              <div className="feature-icon">✨</div>
              <h3>Wide Selection</h3>
              <p>Explore products across a variety of categories.</p>
            </div>

            <div>
              <div className="feature-icon">💻</div>
              <h3>Simple Experience</h3>
              <p>Enjoy a clean and easy-to-use shopping experience.</p>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

export default Home;
