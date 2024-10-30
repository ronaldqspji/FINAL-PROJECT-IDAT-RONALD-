//import React from 'react';
import { Carousel } from 'react-bootstrap';
import '../styles/Slider.css';

const Slider = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/vector-premium/diseno-portada-pagina-facebook-venta-moda-viernes-negro_595212-134.jpg?w=740"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Ropa</h3>
          <p>Descripciones</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://fakeshop-neeraj.netlify.app/banners/4.png"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Accesorios</h3>
          <p>descripcion de accesrios</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/psd-premium/efecto-texto-terror_23-2149378901.jpg?w=740"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Mas accesorios</h3>
          <p>y mas descripciones.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
