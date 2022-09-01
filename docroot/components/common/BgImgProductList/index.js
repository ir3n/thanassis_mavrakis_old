import { Text, Box, Link, Image } from '@chakra-ui/react';
import NextLink from 'next/link';
import Container from '../Container';
import CustomSlider from '../CustomSlider';
import ProductTeaserHorizontal from '../ProductTeaserHorizontal';

const BgImgProductList = ({ image, items, cta }) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 800,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        responsive: [
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    };

    return (
        <Box position="relative" pb="30px">
            <Box
                bgImage={image}
                bgAttachment="fixed"
                bgPos="center"
                bgSize="cover"
                minH="380px"
                position="relative"
                bgRepeat="no-repeat"
                mb={{ base: '50px', lg: '90px' }}
            ></Box>
            <Container marginTop={{ base: '-390px', sm: '-350px' }}>
                <NextLink href={cta?.url} passHref>
                    <Link>
                        <Text
                            as="h3"
                            textStyle="titleMd"
                            color="white"
                            mb={{ base: '25px', lg: '40px' }}
                            align="center"
                        >
                            {cta?.title}
                        </Text>
                    </Link>
                </NextLink>

                <CustomSlider {...settings} className="gifts-slider">
                    {items?.map((item, index) => {
                        return (
                            <Box p="0 20px 20px" key={`carousel-gifts-${index}`} h="100%">
                                <Box bg="white" boxShadow="lg" h="100%">
                                    <ProductTeaserHorizontal
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
                ></Box>
            </Container>
        </Box>
    );
};

export default BgImgProductList;
