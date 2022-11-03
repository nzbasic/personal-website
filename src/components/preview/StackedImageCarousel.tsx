import { memo, useRef } from "react";
import { ResponsiveContainer, StackedCarousel } from "react-stacked-center-carousel";
import { ImagePreviewContent } from "../../types/project";
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/20/solid';

interface PropTypes {
  data: ImagePreviewContent[];
}

export const StackedImageCarousel = ({ data }: PropTypes) => {
  const ref = useRef<StackedCarousel>()

  return (
    <div className="w-full relative">
      <ResponsiveContainer
        carouselRef={ref}
        render={(parentWidth, carouselRef) => {
          let currentVisibleSlide = 3;
          return (
            <StackedCarousel
              ref={carouselRef}
              slideComponent={Card}
              slideWidth={parentWidth < 800 ? parentWidth - 40 : 750}
              carouselWidth={parentWidth}
              data={data}
              customScales={[1, 0.95, 0.9]}
              currentVisibleSlide={currentVisibleSlide}
              maxVisibleSlide={3}
              fadeDistance={0.2}
              useGrabCursor
            />
          );
        }}
      />
      <>
        <div className="flex justify-center absolute h-full top-0 left-4 z-10">
          <ArrowLeftIcon
            className="w-8 cursor-pointer rounded-full hover:bg-gray-200 transition-colors"
            onClick={() => {
              ref.current?.goBack();
            }}
          >
            Back
          </ArrowLeftIcon>
        </div>
        
        <div className="flex justify-center absolute h-full top-0 right-4 z-10">
          <ArrowRightIcon
            className="w-8 cursor-pointer rounded-full hover:bg-gray-200 transition-colors"
            onClick={() => {
              ref.current?.goNext();
            }}
          >
            Forward
          </ArrowRightIcon>
        </div>
      </>
    </div>
  )
};

interface CardProps {
  data: ImagePreviewContent[];
  dataIndex: number;
  swipeTo: (index: number) => void;
  slideIndex: number;
}

const Card = memo(({ data, dataIndex, slideIndex, swipeTo }: CardProps) => {

  return (
    <div className="select-none">
      {/* <img
        className="card"
        src={data[dataIndex].desktop[mode]}
        alt={data[dataIndex].title}
        onClick={() => swipeTo(slideIndex)}
        draggable={false}
      />  */}
    </div>
  );
});
