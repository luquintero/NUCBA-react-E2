
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Hero from './components/hero';
import FeaturedProducts from './components/featuredproducts';
import Footer from './components/footer';
import About from './pages/about';
import Products from './pages/products';
import Contact from './pages/contact';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<><Hero /><FeaturedProducts /></>} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

