import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";


function CarouselHome() {
  return (
    <Carousel>
      <Carousel.Item>

        <Image source= "../../public/images/multiplesCards.jpeg"
       style={{width: 200, height: 200}} />
        <Carousel.Caption>
          <h3>Enter your location</h3>
          <p>Enter your street address or let us find your location.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          
          src="./public/images/Delivery-food.jpeg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Choose your restaurant and food</h3>
          <p>What do you fancy? Browse through countless menus.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          
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
