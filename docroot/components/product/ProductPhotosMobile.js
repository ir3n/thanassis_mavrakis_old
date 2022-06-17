import { useEffect, useRef, useState } from 'react';
import { Image, Box } from '@chakra-ui/react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import LeftArrow from '/public/assets/leftarrow.svg';
import RightArrow from '/public/assets/rightarrow.svg';

const responsive = {
    mobile: {
        breakpoint: { max: 4000, min: 0 },
        items: 1
    }
};
export default function ProductPhotosMobile({ productMedia, productTitle, handleZoom }) {
    function NextArrow(props) {
        const { className, onClick } = props;
        return (
            <Box className={className} zIndex={10} onClick={onClick}>
                <RightArrow />
            </Box>
        );
    }

    function PrevArrow(props) {
        const { className, onClick } = props;
        return (
            <Box className={className} zIndex={10} onClick={onClick}>
                <LeftArrow />
            </Box>
        );
    }

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };

    return (
        <Box w={'100%'} display={'inline-block'} px={'-20px'} className="single-product-carousel">
            <Slider {...settings}>
                {(productMedia || [])?.map(({ url, type }, index) =>
                    type === 'image' ? (
                        <>
                            <Image
                                width={'100%'}
                                height={{ base: '250px', lg: 'auto' }}
                                objectFit="contain"
                                alt={productTitle}
                                src={url}
                                key={`productMedia-${index}`}
                                onClick={() => {
                                    handleZoom(index);
                                }}
                                id={index}
                            />
                            {/* <Box onClick={() => slider?.current?.slickPrev()}>
                                <LeftArrow />
                            </Box>
                            <Box onClick={() => slider?.current?.slickNext()}>
                                <RightArrow />
                            </Box> */}
                        </>
                    ) : (
                        {
                            /* <ReactPlayer width="100%" height="auto" url={url} controls /> */
                        }
                    )
                )}
            </Slider>
        </Box>
    );
}
