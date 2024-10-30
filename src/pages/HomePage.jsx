import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import Slider from "../components/Slider";
import { CartContext } from "../context/CartContext";
import CustomButton from "../components/CustomButton";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => setProducts(data))
      .catch((error) => setError(error.message));
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (products.length === 0) {
    return <div> Please Wait this is Loading...</div>;
  }

  return (
    <div className="container mt-4">
      <Slider />
      <div className="row">
        {products.map((product) => (
          <div className="col-md-4 mb-4" key={product.id}>
            <div className="card h-100">
              <img
                src={product.image}
                className="card-img-top"
                alt={product.title}
                style={{
                  width: "100%",
                  height: "300px",
                  objectFit: "contain",
                  objectPosition: "center",
                  backgroundColor: "#f0f0f0",
                }}
              />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">${product.price}</p>
                <p className="card-text">{product.category}</p>
                <Link to={`/product/${product.id}`} className="btn btn-primary">
                  ver Detalles
                </Link>
                <CustomButton
                  onClick={() => {
                    addToCart(product);
                    alert(`${product.title} FUE AGREGADO AL CARRITO!`);
                  }}
                >
                  Agregar al Carrito
                </CustomButton>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
