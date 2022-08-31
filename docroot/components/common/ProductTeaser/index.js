import React, { useState, useEffect, useRef } from 'react';
import { Box, Text, Link, Image, Button, Flex } from '@chakra-ui/react';
import NextLink from 'next/link';
import DotColor from './DotColor';
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

const ProductTeaser = ({
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
    variation_options,
    largeTeaser
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
        <Flex backgroundColor={'white'} pos={'relative'} direction="column" h="100%">
            <ProductFlags teaser={true} webOnly={web_only} discount={discount_percentage} />
            <Box pos={'absolute'} top={'8px'} right={'8px'} zIndex={'10'}>
                <NextLink href={url || '#'} passHref prefetch={false}>
                    <Link _focus={{}} pos="relative" as={'a'} data-productid={mastersku}>
                        <Image width={'16px'} height={'16px'} alt={title} src={'/assets/heart-outline.svg'} />
                    </Link>
                </NextLink>
            </Box>
            <NextLink href={url || '#'} passHref prefetch={false} w={'100%'}>
                <Link _focus={{}} pos="relative" as={'a'} w={'100%'} data-productid={mastersku}>
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
            <Flex direction="column" p="10px 15px" width={'100%'} pos={'relative'} flex="1">
                <Box pos="relative" overflow={'hidden'} mb="10px">
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

                {!largeTeaser ? (
                    <>
                        <Text textStyle={'caption'} mb="10px">
                            <Box as={'span'} fontWeight={'700'}>
                                {brand}
                            </Box>{' '}
                            {data ? data?.name : title}
                        </Text>
                        <Flex alignItems={'end'} mt="auto">
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

                            {/* {list_price ? (
                                <Text ml={'8px'} textStyle={'text'} color={'lightGrey'}>
                                    {price}
                                </Text>
                            ) : null} */}
                        </Flex>
                    </>
                ) : (
                    <Flex justifyContent="space-between" direction={{ base: 'column', xl: 'row' }} flex="1">
                        <Text textStyle={'caption'} mb={{ base: '10px', xl: '0' }}>
                            <Box as={'span'} fontWeight={'700'}>
                                {brand}
                            </Box>{' '}
                            {data ? data?.name : title}
                        </Text>
                        <Flex alignItems={'end'} pl={{ base: '0', xl: '30px' }} mt={{ base: 'auto', xl: '0' }}>
                            <Text textStyle={'subtitle'} color={'black'} lineHeight="1.1">
                                {data ? data?.price : price}
                            </Text>

                            {list_price ? (
                                <Text ml={'8px'} textStyle={'text'} color={'lightGrey'}>
                                    {price}
                                </Text>
                            ) : null}
                        </Flex>
                    </Flex>
                )}
            </Flex>
            <Button variant="primary" minW="unset">
                {'Add to Bag'}
            </Button>
        </Flex>
    );
};

export default ProductTeaser;
