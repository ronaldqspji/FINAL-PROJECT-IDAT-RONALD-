import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/custom-bootstrap.scss';
import './styles/global.css'
import CartProvider from './context/CartContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartProvider>
    <Router>
      <App />
    </Router>
    </CartProvider>
  </React.StrictMode>
);



// ReactDOM.render(
//   <React.StrictMode>
//     <CartProvider>
//     <Router>
//       <App />
//     </Router>
//     </CartProvider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );