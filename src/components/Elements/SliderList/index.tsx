import { CSSProperties, ReactElement } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import { Container } from './styles';

interface SliderListProps {
    children: ReactElement[];
    slidesToShow: number;
    slidesToScroll: number;
    showArrows?: boolean;
    autoPlay?: boolean;
    showIndicators?: boolean;
    transitionSpeed?: number;
    infiniteLoop?: boolean;
    sliderContainerStyle?: CSSProperties;
    sliderContainerClassName?: string;
}

export function SliderList({
    children,
    autoPlay = true,
    infiniteLoop = true,
    transitionSpeed = 400,
    showIndicators,
    showArrows,
    sliderContainerClassName,
    sliderContainerStyle,
    slidesToScroll,
    slidesToShow,
}: SliderListProps) {

    var settings = {
        dots: showIndicators,
        arrows: showArrows,
        infinite: infiniteLoop,
        autoplay: autoPlay,
        speed: transitionSpeed,
        slidesToShow: slidesToShow,
        slidesToScroll: slidesToScroll,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };


    return (
        <Container
            className={sliderContainerClassName}
            style={sliderContainerStyle}
        >
            <Slider {...settings}>
                {children}
            </Slider>
        </Container>
    )
}