import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// components
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

// pages
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";

function App() {
  return (
    <div className='h-screen'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
