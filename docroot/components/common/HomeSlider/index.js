import { Image, Box, Text } from '@chakra-ui/react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import LeftArrow from '/public/assets/ArrowLeftWhite.svg';
import RightArrow from '/public/assets/ArrowRightWhite.svg';
import NextLink from 'next/link';

const HomeSlider = ({ slides, width, height }) => {
    function SampleNextArrow(props) {
        const { className, onClick } = props;
        return (
            <Box className={className} zIndex={10} id="home-slider-nextarrow" onClick={onClick}>
                <RightArrow />
            </Box>
        );
    }

    function SamplePrevArrow(props) {
        const { className, onClick } = props;
        return (
            <Box className={className} id="home-slider-prevarrow" zIndex={10} onClick={onClick}>
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
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    return (
        <Slider {...settings}>
            {slides.map((slide) => {
                return (
                    <Box
                        position={'relative'}
                        textAlign={'center'}
                        key={slide.text}
                        mb="48px"
                        background={`url(${slide.image})`}
                        backgroundSize="cover"
                        height={{ base: '560px', md: '944px', lg: '648px' }}
                        maxH={'100%'}
                    >
                        <Box
                            display="flex"
                            justifyContent={'center'}
                            alignItems="center"
                            flexDir={'column'}
                            height="100%"
                        >
                            <Text maxW={'552px'} textStyle={'h1'} color="white" textAlign={'center'}>
                                {slide.text}
                            </Text>
                            <Box mt="1rem" color={'white'} textStyle="md" textDecor={'underline'}>
                                <NextLink href={slide.cta?.url}>{slide.cta.title}</NextLink>
                            </Box>
                        </Box>
                    </Box>
                );
            })}
        </Slider>
    );
};

export default HomeSlider;
