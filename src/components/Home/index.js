import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  return (
    <>
    <Carousel>
      <Carousel.Item>
    <div className="d-flex justify-center items-center bg-light" style={{ height: "400px" }}>
        {/* Inline SVG */}
        <svg width="200" height="200" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="40" stroke="blue" strokeWidth="4" fill="lightblue" />
            <text x="50%" y="50%" textAnchor="middle" stroke="#000" strokeWidth="1px" dy=".3em">SVG</text>
        </svg>  
    </div>
    <Carousel.Caption>
        <h3>SVG Banner</h3>
        <p>Custom vector design inside carousel</p>
    </Carousel.Caption>
    </Carousel.Item>


      <Carousel.Item>
        <img className="d-block w-100" src="/images/banner2.jpg" alt="Second slide" />
        <Carousel.Caption>
          <h3>Exclusive Offers</h3>
          <p>Get discounts up to 50%</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src="/images/banner3.jpg" alt="Third slide" />
        <Carousel.Caption>
          <h3>New Arrivals</h3>
          <p>Fresh styles just landed</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    
</>
  );
};

export default Home;
