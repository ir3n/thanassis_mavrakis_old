import { Text, Box, Link } from '@chakra-ui/react';
import NextLink from 'next/link';
import Container from '../Container';
import CustomSlider from '../CustomSlider';
import ProductTeaser from '../ProductTeaser';

const CarouselProducts = ({ title, items, cta }) => {
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
                    dots: true,
                    arrows: false,
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 370,
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
                <Text as="h3" textStyle="titleMd" color="brand" mb={'30px'} align="center">
                    {title}
                </Text>
                <CustomSlider {...settings} className="products-slider">
                    {items?.map((item, index) => {
                        return (
                            <Box p="0 5px" key={`carousel-product-${index}`}>
                                <Box bg="white">
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
                            </Box>
                        );
                    })}
                </CustomSlider>
                <Box
                    align="center"
                    textStyle="caption"
                    mt={{ base: '35px', xl: '25px' }}
                    textDecoration="underline"
                    fontWeight="500"
                >
                    {cta && (
                        <NextLink href={cta?.url} passHref>
                            <Link>{cta?.title}</Link>
                        </NextLink>
                    )}
                </Box>
            </Container>
        </Box>
    );
};

export default CarouselProducts;
