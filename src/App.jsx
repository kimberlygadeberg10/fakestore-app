import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import CustomNavbar from "./components/CustomNavbar"
import Home from "./pages/Home"
import Products from "./pages/Products"
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <Router>
      {/* Navbar must be **inside** Router*/}
      <CustomNavbar />

      {/* Define Routes*/}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
    </Router>
  )
}

export default App;