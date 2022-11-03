import React, { useState } from 'react';
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import classNames from 'classnames';
import { ImagePreviewContent } from '../../types/project';
import { Glass } from '../layout/Glass';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';

interface ImageSliderProps {
  images: ImagePreviewContent[];
}

export const ImageSlider = ({ images }: ImageSliderProps) => {
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    initial: 0,
    created(e) {
      setLoaded(true)
    },
  })

  return (
    <div className="relative w-full h-full">
      <div ref={sliderRef} className="keen-slider">
        {images.map((image, index) => (
          <picture key={image.title} className={`keen-slider__slide number-slide${index} rounded-xl`}>
            {image.light.map(data => (
              <source key={data.src} media="" srcSet={data.src} />
            ))}
            <img src={image.light[0].src} alt={image.title} className="w-auto" />
          </picture>
        ))}
      </div>  
      {loaded && instanceRef.current && (
        <>
          <Arrow
            left
            onClick={() => instanceRef.current?.prev()}
          />
          <Arrow
            onClick={() => instanceRef.current?.next()}
          />
        </>
      )}
    </div>
  )
};

interface ArrowProps {
  left?: true;
  onClick: React.MouseEventHandler
}

const Arrow = ({ onClick, left }: ArrowProps) => {
  const handleClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    onClick(event);
  };

  return (
    <Glass 
      onClick={handleClick}
      className={classNames(
        "flex items-center justify-center absolute top-1/2 -translate-y-1/2 cursor-pointer p-1 !rounded-full w-10 h-10",
        { 'left-[5px]': left },
        { 'left-auto right-[5px]': !left },
    )}>
      {left ? <ChevronLeftIcon className="-ml-0.5" /> : <ChevronRightIcon className="-mr-0.5" />}
    </Glass>
  )
};
