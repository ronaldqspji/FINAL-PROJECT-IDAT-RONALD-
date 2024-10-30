//import React, { createContext, useState } from 'react';
import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(product => product.id !== productId));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};


// Validación de props
CartProvider.propTypes = {
  children: PropTypes.node.isRequired, 
};

export default CartProvider;
