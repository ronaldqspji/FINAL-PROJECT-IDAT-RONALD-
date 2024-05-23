import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setProducts(data))
      .catch(error => setError(error.message));
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (products.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mt-4">
      <div className="row">
        {products.map(product => (
          <div className="col-md-4 mb-4" key={product.id}>
            <div className="card h-100">
              <img src={product.image} className="card-img-top" alt={product.title} />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">${product.price}</p>
                <Link to={`/product/${product.id}`} className="btn btn-primary">View Details</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;



// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';

// const HomePage = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     fetch('https://fakestoreapi.com/products')
//       .then(res => res.json())
//       .then(data => setProducts(data));
//       //.catch(error => console.error('Error fetching products:', error));
//   }, []);

//   return (
//     <div className="container mt-4">
//       <div className="row">
//         {products.map(product => (
//           <div className="col-md-4" key={product.id}>
//             <div className="card mb-4">
//               <img src={product.image} className="card-img-top" alt={product.title} />
//               <div className="card-body">
//                 <h5 className="card-title">{product.title}</h5>
//                 <p className="card-text">${product.price}</p>
//                 <Link to={`/product/${product.id}`} className="btn btn-primary">View Details</Link>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default HomePage;
