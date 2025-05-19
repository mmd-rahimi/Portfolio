import { Route, BrowserRouter as Router, Routes } from "react-router";
import Home from "./pages/Home";
import Navbar from "./Components/Navbar";
import ContactP from "./pages/ContactP";
import AboutP from "./pages/AboutP";

function App() {
  return (
    <div className="bg-[#222831]">
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/contact" element={<ContactP/>} />
          <Route path="/about" element={<AboutP/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
