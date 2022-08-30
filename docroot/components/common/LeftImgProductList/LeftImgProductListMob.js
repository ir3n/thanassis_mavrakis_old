import { Text, Box, Image, Link } from '@chakra-ui/react';
import NextLink from 'next/link';
import Container from '../Container';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ProductTeaser from '../ProductTeaser';

const LeftImgProductListMob = ({ title, text, items, image, link }) => {
    const settings = {
        infinite: true,
        speed: 800,
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        autoplay: true,
        responsive: [
            {
                breakpoint: 390,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    };

    return (
        <Box pb="30px" bg="lightBg">
            <NextLink href={link} passHref>
                <Link>
                    <Image src={image} alt={title} display="block" m="0 auto 20px" />
                </Link>
            </NextLink>
            <Container>
                <Text as="h3" textStyle="titleMd" color="brand" mb={'10px'} align="center">
                    {title}
                </Text>
                <Text as="p" maxW="470px" align="center" m="0 auto 15px">
                    {text}
                </Text>
            </Container>

            <Slider {...settings} className="image-products-slider">
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
            </Slider>
        </Box>
    );
};

export default LeftImgProductListMob;
