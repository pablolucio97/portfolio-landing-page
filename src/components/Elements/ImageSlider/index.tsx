import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import Image from 'next/image'
import { Container, } from './styles';
interface ImageSliderProps {
    images: string[];
    imgWidth: number;
    imgHeight: number;
    showStatus?: boolean;
    autoPlay?: boolean;
    interval?: number;
    infiniteLoop?: boolean;
    showIndicators?: boolean;
}


export function ImageSlider({
    images,
    imgWidth,
    imgHeight,
    autoPlay,
    infiniteLoop,
    interval = 2400,
    showIndicators,
    showStatus
}: ImageSliderProps) {

    return (
        <Container>
            <Carousel
                showStatus={showStatus}
                showArrows={false}
                swipeable
                emulateTouch
                autoPlay={autoPlay}
                interval={interval}
                infiniteLoop={infiniteLoop}
                showIndicators={showIndicators}
            >
                {
                    images.map((image, index) => (
                        <>
                            <Image
                                src={image}
                                alt="image"
                                key={index}
                                width={imgWidth}
                                height={imgHeight}
                                objectFit='cover'
                            />
                        </>
                    ))
                }

            </Carousel>
        </Container >
    )
}