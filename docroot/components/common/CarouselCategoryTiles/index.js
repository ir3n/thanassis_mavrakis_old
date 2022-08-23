import Container from 'components/common/Container';
import CustomSlider from '../CustomSlider';
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
                <Text as="h2" textStyle="titleMd" align="center" mb="25px">
                    {title}
                </Text>
                <CustomSlider {...settings} className="catetory-tiles-slider">
                    {data?.map(({ image, cta }, index) => (
                        <Box p="0 10px" key={`category-tile-carousel-item-${index}`}>
                            <CategoryTile image={image} cta={cta} />
                        </Box>
                    ))}
                </CustomSlider>
            </Container>
        </Box>
    );
};

export default CarouselTiles;
