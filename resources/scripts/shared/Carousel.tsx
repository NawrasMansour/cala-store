import React from 'react';
import {
    CarouselProvider,
    Slider,
    Slide,
    ButtonBack,
    ButtonNext,
    DotGroup,
} from 'pure-react-carousel';

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export interface ICarousel{
    aspectRatio?: number;
    align?: 'left' | 'center';
    title?: string;
    autoPlay?: boolean;
    interval?: number;
}

const Carousel: React.FC<ICarousel> = ({
    title,
    aspectRatio = 3,
    align = 'center',
    autoPlay = true,
    interval = 7000,
    children,
} : any) => {
    const defaultStyle: any = {

    };

    const slides = React.Children.map(children, (child, index) => (
        <Slide
            innerClassName={`flex ${
                align === 'center' ? 'justify-center' : 'justify-start'
            }`}
            index={index}
        >
            {child}
        </Slide>
    ));

    return (
        <CarouselProvider
            className="w-full"
            naturalSlideWidth={aspectRatio}
            naturalSlideHeight={1}
            totalSlides={React.Children.count(children)}
            isIntrinsicHeight={true}
            isPlaying={autoPlay}
            interval={interval}
        >
            <div className="w-full justify-center items-center bg-white p-5 rounded-lg">
                <div className="w-full flex items-center justify-between mb-3">
                    {title && (
                        <h5 className="text-base font-semibold uppercase text-[#b5b5c3]">
                            {title}
                        </h5>
                    )}
                    <div className="flex items-center space-x-1">
                        <ButtonBack className="w-full justify-center items-center text-[#7e8299] bg-[#f3f6f9] p-2 rounded-lg disabled:opacity-30 disabled:cursor-not-allowed focus:outline-none">
                            <ChevronLeftIcon />
                        </ButtonBack>

                        <ButtonNext className="w-full justify-center items-center text-[#7e8299] bg-[#f3f6f9] p-2 rounded-lg disabled:opacity-30 disabled:cursor-not-allowed focus:outline-none">
                            <ChevronRightIcon />
                        </ButtonNext>
                    </div>
                </div>
                <Slider className="w-full">{slides}</Slider>
            </div>
        </CarouselProvider>
    );
};

export default Carousel;
