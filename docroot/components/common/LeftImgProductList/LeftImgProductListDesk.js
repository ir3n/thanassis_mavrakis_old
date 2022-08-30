import { Text, Box, Grid, GridItem, Image, Link } from '@chakra-ui/react';
import NextLink from 'next/link';
import Container from '../Container';
import CustomSlider from '../CustomSlider';
import ProductTeaser from '../ProductTeaser';

const LeftImgProductListDesk = ({ title, text, items, image, link }) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 800,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true
    };

    return (
        <Box p="25px 0 40px" bg="lightBg">
            <Container>
                <Text as="h3" textStyle="titleMd" color="brand" mb={'10px'} align="center">
                    {title}
                </Text>
                <Text as="p" maxW="470px" align="center" m="0 auto">
                    {text}
                </Text>
                <Grid mt="25px" templateColumns="repeat(2, 1fr)" gap={{ base: '10px', xl: '20px' }} alignItems="center">
                    <GridItem>
                        <NextLink href={link} passHref>
                            <Link>
                                <Image
                                    src={image}
                                    alt={title}
                                    transition="0.4s ease"
                                    _hover={{ transform: 'scale(1.02)' }}
                                />
                            </Link>
                        </NextLink>
                    </GridItem>
                    <GridItem overflow="hidden" position="relative">
                        <CustomSlider {...settings} className="image-products-slider">
                            {items?.map((item, index) => {
                                return (
                                    <Box p="0 5px" key={`image-carousel-product-${index}`}>
                                        <ProductTeaser
                                            title={item?.title}
                                            product_id={item?.product_id}
                                            image={item?.teaser_image}
                                            listPrice={item?.list_price}
                                            price={item?.price}
                                            url={item?.url}
                                            brand={item?.brand}
                                            mastersku={item?.mastersku}
                                            discount_percentage={item?.max_discount_percentage}
                                            webOnly={item?.web_only}
                                        />
                                    </Box>
                                );
                            })}
                        </CustomSlider>
                    </GridItem>
                </Grid>
            </Container>
        </Box>
    );
};

export default LeftImgProductListDesk;
