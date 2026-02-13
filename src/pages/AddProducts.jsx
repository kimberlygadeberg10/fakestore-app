// React hooks
import { useState } from "react";

// Bootstrap components
import { Container, Form, Alert, Button } from "react-bootstrap";

// Axios for API calls
import axios from "axios";

function AddProduct() {
    // State for form fields
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");

    // State for succedd/error messages
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");

    // Handle for submission
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent page reload

        // Build product object
        const newProduct = {
            title,
            price: parseFloat(price), // Ensure price is a number
            description,
            category,
        };

        try {
            // Send POST request to FakeStoreAPI
            const response = await axios.post (
                "https://fakestoreapi.com/products",
                newProduct
            );

            console.log("API Response:", response.data);

            // Show success message
            setSuccess("Product created successfully!");
            setError("");

            // Clear form fields
            setTitle("");
            setPrice("");
            setDescription("");
            setCategory("");
        } catch (err) {
            console.error(err);
            setError("Faild to create product. Try again.");
            setSuccess("");
        }
    };

    return (
        <Container className="mt-5">
            <h2>Add New Product</h2>

            {/* Success Message */}
            {success && <Alert variant="success">{success}</Alert>}

            {/* Error Message */}
            {error && <Alert variant="danger">{error}</Alert>}

            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="productTitle">
                    <Form.Label>Product Title</Form.Label>
                    <Form.Control
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                    placeholder="Enter product title"
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlID="productPrice">
                    <Form.Label>Price</Form.Label>
                    <Form.Control
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    required
                    placeholder="Enter price"
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="productDescription">
                    <Form.Laberl>Description</Form.Laberl>
                    <Form.Control
                    as="textarea"
                    rows={3}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                    placeholder="Enter description"
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlID="productCategory">
                    <Form.Label>Category</Form.Label>
                    <Form.Control
                    type="text"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    required
                    placeholder="Enter category"
                    />
                </Form.Group>

                <Button type="submit" variant="primary">
                    Add Product
                </Button>
            </Form>
        </Container>
    );
}

export default AddProduct;
