import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Index from "./pages/Index.jsx";
import Login from "./pages/Login.jsx"; // Import the Login page

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Index />} />
      <Route path="/login" element={<Login />} /> {/* Add the Login route */}
      </Routes>
    </Router>
  );
}

export default App;
