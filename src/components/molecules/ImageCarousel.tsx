import { Screenshot } from "../../types/project"
import Carousel from "react-material-ui-carousel"
import React from "react"
import { CarouselItem } from "../atoms/CarouselItem"

export const ImageCarousel = ({ images }: { images: Screenshot[] }) => { 
  return (
    <Carousel>
      {images && images.map((item, index) => <CarouselItem key={index} data={item} />)}
    </Carousel>
  )
};
