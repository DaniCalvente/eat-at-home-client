import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";

import deliveryFoodImg from "../images/deliveryFood.jpeg"
import payCardImg from "../images/payCard.png"
import searchImg from "../images/search.jpeg"


function CarouselHome() {
  return (
    <Carousel className="carousel">
      <Carousel.Item>

        <Image src={deliveryFoodImg}
       style={{width: 400}} />
        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{width: 400}} 
          src={payCardImg}
          alt="Second slide"
        />

        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{width: 300}}           
          src={searchImg}
          alt="Third slide"
        />

        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselHome;
