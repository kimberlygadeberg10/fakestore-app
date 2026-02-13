import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import CustomNavbar from "./components/CustomNavbar"
import Home from "./pages/Home"

function App() {
  return (
    <Router>
      {/* Navbar must be **inside** Router*/}
      <CustomNavbar />

      {/* Define Routes*/}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App;