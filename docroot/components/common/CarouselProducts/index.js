import { Text, Box } from '@chakra-ui/react';
import Link from 'next/link';
import Container from '../Container';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import FeaturedProduct from '../FeaturedProduct';

const CarouselProducts = ({ title, items, cta }) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 800,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        // autoplay: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    dots: true,
                    arrows: false,
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 350,
                settings: {
                    dots: true,
                    arrows: false,
                    slidesToShow: 1
                }
            }
        ]
    };

    return (
        <Box p="30px 0" bg="lightBg">
            <Container>
                <Text as="h3" textStyle="h4" color="brand" mb={'30px'} align="center">
                    {title}
                </Text>
                <Slider {...settings} className="products-slider">
                    {items?.map((item, index) => {
                        return (
                            <Box p="0 5px" key={`carousel-product-${index}`}>
                                <FeaturedProduct />
                            </Box>
                        );
                    })}
                </Slider>
                <Box
                    align="center"
                    textStyle="caption"
                    mt={{ base: '35px', xl: '25px' }}
                    textDecoration="underline"
                    fontWeight="500"
                >
                    <Link href={cta?.url}>
                        <a>{cta?.title}</a>
                    </Link>
                </Box>
            </Container>
        </Box>
    );
};

export default CarouselProducts;
