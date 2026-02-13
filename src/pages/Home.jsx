import { Container, Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

function Home() {
    const navigate = useNavigate()

    return(
        <Container className="text-center mt-5">
            <h1>Welcome to FakeStore</h1>
            <p>Your modern e-commerce experience built with React</p>

            <Button onClick={() => navigate("/products")}>
                Browse Products
            </Button>
        </Container>
    )
}

export default Home