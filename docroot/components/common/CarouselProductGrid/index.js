import { Text, Box, useBreakpointValue } from '@chakra-ui/react';
import Container from '../Container';
import CustomSlider from '../CustomSlider';
import FeaturedProduct from '../FeaturedProduct';

const CarouselProductGrid = ({ title, items, cta }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        // autoplay: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 370,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    };

    const groupedProductsByTwo = items.reduce(function (groupedProductsByTwo, key, index) {
        return (
            (index % 2 == 0
                ? groupedProductsByTwo.push([key])
                : groupedProductsByTwo[groupedProductsByTwo.length - 1].push(key)) && groupedProductsByTwo
        );
    }, []);

    const productsSlider = useBreakpointValue({
        base: (
            <CustomSlider {...settings} className="products-slider">
                {items?.map((item, index) => {
                    return (
                        <Box p="0 5px" key={`grid-product-mobile-${index}`}>
                            <Box bg="lightBg">
                                <FeaturedProduct image={item?.hover_image} />
                            </Box>
                        </Box>
                    );
                })}
            </CustomSlider>
        ),
        md: (
            <CustomSlider {...settings} className="products-slider">
                {groupedProductsByTwo?.map((products, index) => {
                    return (
                        <Box p="0 10px" key={`grid-products-${index}`}>
                            {products?.map((item, index) => (
                                <Box bg="lightBg" mb="20px" key={`grid-product-${index}`}>
                                    <FeaturedProduct image={item?.hover_image} />
                                </Box>
                            ))}
                        </Box>
                    );
                })}
            </CustomSlider>
        )
    });

    return (
        <Box p="30px 0">
            <Container>
                <Text as="h3" textStyle="titleMd" color="brand" mb={'30px'} align="center">
                    {title}
                </Text>
                {productsSlider}
                <Box
                    align="center"
                    textStyle="caption"
                    mt={{ base: '35px', xl: '25px' }}
                    textDecoration="underline"
                    fontWeight="500"
                >
                    {/* <NextLink href={cta?.url} passHref>
                        <Link>{cta?.title}</Link>
                    </NextLink> */}
                </Box>
            </Container>
        </Box>
    );
};

export default CarouselProductGrid;
