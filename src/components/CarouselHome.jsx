import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";


function CarouselHome() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=First slide&bg=373940"
          alt="Enter your location"
        />
        <Carousel.Caption>
          <h3>Enter your location</h3>
          <p>Enter your street address or let us find your location.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Second slide&bg=282c34"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Choose your restaurant and food</h3>
          <p>What do you fancy? Browse through countless menus.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../../public/images/multiplesCards2.png"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Pay and get your food delivered</h3>
          <p>
          Pay cash or online with Creditcard, Klarna, Paypal or Bitcoin. Bon appetit!
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselHome;
