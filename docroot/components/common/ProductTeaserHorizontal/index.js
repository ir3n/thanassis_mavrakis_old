import React, { useState, useEffect, useRef } from 'react';
import { Box, Text, Link, Image, Button, Flex } from '@chakra-ui/react';
import NextLink from 'next/link';
import DotColor from '../ProductTeaser/DotColor';
import CustomSlider from '../CustomSlider';
import useProductVariation from 'hooks/useProductVariation';
import ProductFlags from 'components/product/ProductFlags';

const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 6,
    arrows: true,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 4
            }
        },
        {
            breakpoint: 360,
            settings: {
                slidesToShow: 6
            }
        }
    ]
};

const ProductTeaserHorizontal = ({
    title,
    product_id,
    key,
    list_price,
    image,
    price,
    url,
    brand,
    mastersku,
    discount_percentage,
    web_only,
    variation_options
}) => {
    const imageRef = useRef(null);
    const [loaded, setLoaded] = useState(false);
    const [selectedVariation, setSelectedVariation] = useState();

    const { data } = useProductVariation(product_id, selectedVariation);

    useEffect(() => {
        if (!loaded && imageRef.current?.complete) {
            setLoaded(true);
        }
    }, []);

    return (
        <Flex
            backgroundColor={'white'}
            pos={'relative'}
            direction={{ base: 'column', sm: 'row' }}
            h="100%"
            p={{ base: '15px 0 0', sm: '15px 25px 25px 15px' }}
            maxW="500px"
            m="auto"
        >
            <ProductFlags teaser={true} webOnly={web_only} discount={discount_percentage} />
            <Box display={{ base: 'block', sm: 'none' }} position="absolute" top="15px" right="15px" zIndex="1">
                <NextLink href={url || '#'} passHref prefetch={false}>
                    <Link _focus={{}} pos="relative" as={'a'} ml="auto" data-productid={mastersku}>
                        <Image width={'16px'} height={'16px'} alt={title} src={'/assets/heart-outline.svg'} />
                    </Link>
                </NextLink>
            </Box>

            <NextLink href={url || '#'} passHref prefetch={false} w={'100%'} flex="1">
                <Link _focus={{}} pos="relative" as={'a'} w={'100%'} flex="1" data-productid={mastersku}>
                    <Box
                        _focus={{}}
                        display="flex"
                        flexDir={'column'}
                        alignItems="center"
                        textAlign="center"
                        position={'relative'}
                        w={'100%'}
                    >
                        {loaded ? null : <Box className="spinner" />}

                        <Image
                            ref={imageRef}
                            width={'320px'}
                            maxW="100%"
                            placeholder="blur"
                            alt={title}
                            src={data ? data?.variation_media[0]?.url : image}
                            display={loaded ? '' : 'none'}
                            onLoad={() => setLoaded(true)}
                            _focus={{}}
                        />
                    </Box>
                </Link>
            </NextLink>
            <Flex direction="column" p={{ base: '0', sm: '20px 0 0 20px' }} width={'100%'} pos={'relative'} flex="1">
                <Text textStyle={'caption'} mb="10px" p={{ base: '0 20px', sm: '0' }}>
                    <Box as={'span'} fontWeight={'700'}>
                        {brand}
                    </Box>{' '}
                    {data ? data?.name : title}
                </Text>

                <Box pos="relative" overflow={'hidden'} mb="10px" p={{ base: '0 20px', sm: '0' }}>
                    {variation_options?.length > 6 ? (
                        <CustomSlider {...settings} className="color-slider">
                            {variation_options?.map(
                                ({ attribute_color_image, variation_id, attribute_name }, index) => {
                                    return (
                                        <Box className="item-color" key={`dot-${index}`}>
                                            <DotColor
                                                image={attribute_color_image}
                                                id={variation_id}
                                                name={attribute_name}
                                                setSelectedVariation={setSelectedVariation}
                                            />
                                        </Box>
                                    );
                                }
                            )}
                        </CustomSlider>
                    ) : (
                        <Flex>
                            {variation_options?.map(
                                ({ attribute_color_image, variation_id, attribute_name }, index) => {
                                    return (
                                        <Box className="item-color" key={`dot-${index}`}>
                                            <DotColor
                                                image={attribute_color_image}
                                                id={variation_id}
                                                name={attribute_name}
                                                setSelectedVariation={setSelectedVariation}
                                            />
                                        </Box>
                                    );
                                }
                            )}
                        </Flex>
                    )}
                </Box>

                <Flex alignItems={'end'} mt="auto" mb="20px" p={{ base: '0 20px', sm: '0' }}>
                    <Text textStyle={'subtitle'} color={'black'} lineHeight="1.1">
                        {data ? data?.price : price}
                        {data ? (
                            <Box as={'span'} ml={'8px'} textStyle={'text'} color={'lightGrey'}>
                                {data?.list_price}
                            </Box>
                        ) : (
                            <Box as={'span'} ml={'8px'} textStyle={'text'} color={'lightGrey'}>
                                {list_price}
                            </Box>
                        )}
                    </Text>
                    <Box display={{ base: 'none', sm: 'block' }} ml="auto">
                        <NextLink href={url || '#'} passHref prefetch={false}>
                            <Link _focus={{}} pos="relative" as={'a'} data-productid={mastersku}>
                                <Image width={'16px'} height={'16px'} alt={title} src={'/assets/heart-outline.svg'} />
                            </Link>
                        </NextLink>
                    </Box>
                </Flex>
                <Button variant="primary" minW="unset">
                    {'Add to Bag'}
                </Button>
            </Flex>
        </Flex>
    );
};

export default ProductTeaserHorizontal;
