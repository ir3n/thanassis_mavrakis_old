import { Text, Box, Link, Image } from '@chakra-ui/react';
import NextLink from 'next/link';
import Container from '../Container';
import CustomSlider from '../CustomSlider';
import FeaturedProduct from '../FeaturedProduct';

const BgImgProductList = ({ image, items, cta }) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 800,
        slidesToShow: 2,
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
            <Container marginTop="-390px">
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
                            <Box p="0 20px 20px" key={`carousel-gifts-${index}`}>
                                <Box bg="white" boxShadow="lg">
                                    <FeaturedProduct image={item?.hover_image} />
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
