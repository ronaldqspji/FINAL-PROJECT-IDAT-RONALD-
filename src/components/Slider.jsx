import React from 'react';
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
          <h3>First Slide</h3>
          <p>First slide description.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://fakeshop-neeraj.netlify.app/banners/4.png"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second Slide</h3>
          <p>Second slide description.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/psd-premium/efecto-texto-terror_23-2149378901.jpg?w=740"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third Slide</h3>
          <p>Third slide description.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
