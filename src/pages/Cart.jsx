import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import '../Styles/Cart.css'; // Asegúrate de que la ruta sea correcta según la ubicación de tu archivo


const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <div className="container mt-4">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="row">
          {cart.map(product => (
            <div className="col-md-4" key={product.id}>
              <div className="card mb-4">
                <img src={product.image} className="card-img-top" alt={product.title} style={{
                  width: '100%', 
                  height: '300px',
                  objectFit: 'contain',
                  objectPosition: 'center',
                  backgroundColor: '#f0f0f0'
                }}
                 />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">${product.price}</p>
                  <button className="btn btn-danger" onClick={() => removeFromCart(product.id)}>Remove</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
 