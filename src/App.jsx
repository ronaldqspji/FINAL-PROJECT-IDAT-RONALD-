import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Header from './components/Header';
import Cart from './pages/Cart';
import ProductPage from './pages/ProductPage';



const App = () => {
  return (
    <div>
      <Header />
      <div className="container mt-3">
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<ProductPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
