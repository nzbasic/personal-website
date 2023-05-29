import React, { useState } from 'react';
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import classNames from 'classnames';
import { Glass } from '../layout/Glass';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';

interface ImageSliderProps {
  images: string[];
}

const imageToTitle = (image: string) => {
  const removeExtension = image.substring(0, image.lastIndexOf('.')) || image;
  const split = removeExtension.split('/');
  return split[split.length - 1].replace('-', ' ');
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
    <div className="relative w-full aspect-video">
      <div ref={sliderRef} className="keen-slider h-full">
        {images.map((image, index) => (
          <div key={image} className={`relative rounded-xl flex flex-col keen-slider__slide number-slide${index}`}>
            <div className="rounded-xl w-full h-full">
              <img loading="lazy" src={image} alt={imageToTitle(image)} className="w-auto bg-monokai-dark text-white" width={1280} height={720} />
            </div>
            <Glass className="text-sm absolute bottom-10 p-2">{imageToTitle(image)}</Glass>
          </div>
        ))}

        {loaded && instanceRef.current && (
          <>
            <Arrow left onClick={() => instanceRef.current?.prev()}/>
            <Arrow onClick={() => instanceRef.current?.next()} />
          </>
        )}
      </div>  
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
