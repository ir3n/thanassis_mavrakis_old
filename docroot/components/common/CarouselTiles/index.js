import Container from 'components/common/Container';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Tile from './Tile';
import { Box } from '@chakra-ui/react';

const CarouselTiles = ({ data }) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 800,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        // autoplay: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
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
        <Box bg="brand" color="white" pt="25px" pb="40px" overflow="hidden" mb="30px">
            <Container>
                <Slider {...settings} className="tiles-slider">
                    {data?.map(({ title, image, description, cta }, index) => (
                        <Box p="0 15px" key={`tile-carousel-item-${index}`}>
                            <Tile
                                key={`carousel-tile-${index}`}
                                title={title}
                                image={image}
                                description={description}
                                cta={cta}
                            />
                        </Box>
                    ))}
                </Slider>
            </Container>
        </Box>
    );
};

export default CarouselTiles;
