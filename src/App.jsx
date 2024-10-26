import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import FeaturedProducts from './Pages/FeaturedProducts';
import './App.css';
import AboutUsPage from './Pages/AboutUsPage';
import ContactUs from './Pages/Contact';

function App() {
  return (
    <Router>
      <div className='app-container'>
        <Navbar />
        <main className='main-content' >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<FeaturedProducts />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
