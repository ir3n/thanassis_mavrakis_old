import { Text, Box, Grid, GridItem, Image } from '@chakra-ui/react';
import NextLink from 'next/link';
import Container from '../Container';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import FeaturedProduct from '../FeaturedProduct';

const LeftImgProductListDesk = ({ title, text, items, image, link }) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 800,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true
        // autoplay: true,
    };

    return (
        <Box p="25px 0 40px" bg="lightBg">
            <Container>
                <Text as="h3" textStyle="h4" color="brand" mb={'10px'} align="center">
                    {title}
                </Text>
                <Text as="p" maxW="470px" align="center" m="0 auto">
                    {text}
                </Text>
                <Grid mt="25px" templateColumns="repeat(2, 1fr)" gap={{ base: '10px', xl: '20px' }} alignItems="center">
                    <GridItem>
                        <NextLink href={link}>
                            <a>
                                <Image
                                    src={image}
                                    alt={title}
                                    transition="0.4s ease"
                                    _hover={{ transform: 'scale(1.02)' }}
                                />
                            </a>
                        </NextLink>
                    </GridItem>
                    <GridItem overflow="hidden" position="relative">
                        <Slider {...settings} className="image-products-slider">
                            {items?.map((item, index) => {
                                return (
                                    <Box p="0 5px" key={`image-carousel-product-${index}`}>
                                        <FeaturedProduct />
                                    </Box>
                                );
                            })}
                        </Slider>
                    </GridItem>
                </Grid>
            </Container>
        </Box>
    );
};

export default LeftImgProductListDesk;
