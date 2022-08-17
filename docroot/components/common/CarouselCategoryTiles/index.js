import Container from 'components/common/Container';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CategoryTile from './CategoryTile';
import { Box, Text } from '@chakra-ui/react';

const CarouselTiles = ({ title, data }) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 800,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    };
    return (
        <Box bg="darkGrey" color="white" py="35px" overflow="hidden" mb="50px">
            <Container>
                <Text as="h2" textStyle="h4" align="center" mb="25px">
                    {title}
                </Text>
                <Slider {...settings} className="catetory-tiles-slider">
                    {data?.map(({ image, cta }, index) => (
                        <Box p="0 10px" key={`category-tile-carousel-item-${index}`}>
                            <CategoryTile image={image} cta={cta} />
                        </Box>
                    ))}
                </Slider>
            </Container>
        </Box>
    );
};

export default CarouselTiles;
