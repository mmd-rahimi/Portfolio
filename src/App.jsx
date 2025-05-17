import { Route, BrowserRouter as Router, Routes } from "react-router";
import Home from "./pages/Home";
import Navbar from "./Components/Navbar";
import Contact from "./pages/Contact";
import About from "./pages/About";

function App() {
  return (
    <div className="">
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/about" element={<About/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
