import React, { useState, useEffect, useRef } from 'react';
import { Box, Text, Link, Image, Button } from '@chakra-ui/react';
import NextLink from 'next/link';
import DotColor from './DotColor';
import CustomSlider from '../CustomSlider';
import useProductVariation from 'hooks/useProductVariation';

const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 6
            }
        },
        {
            breakpoint: 500,
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
        <Box backgroundColor={'white'} pos={'relative'}>
            <Box pos={'absolute'} textAlign={'center'} top={'8px'} left={'8px'} zIndex={'9999'}>
                {discount_percentage ? (
                    <Box w={'80px'} border={'1px solid black'} p={'5px'} textStyle={'caption'}>
                        {discount_percentage}
                    </Box>
                ) : null}
                {web_only ? (
                    <Box backgroundColor={'blue'} textStyle={'note'} color={'white'} p={'8px'} mt={'4px'}>
                        {'WEB ONLY'}
                    </Box>
                ) : null}
            </Box>

            <Box pos={'absolute'} top={'8px'} right={'8px'} zIndex={'10'}>
                <NextLink href={url || '#'} passHref prefetch={false}>
                    <Link _focus={{}} pos="relative" as={'a'} data-productid={mastersku}>
                        <Image width={'26px'} height={'26px'} alt={title} src={'/assets/heart.png'} />
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
                            width={'100%'}
                            height={'360px'}
                            placeholder="blur"
                            style={{
                                margin: 'auto',
                                objectFit: 'contain',
                                maxWidth: '100%'
                            }}
                            alt={title}
                            src={data ? data?.attribute_color_image : image}
                            display={loaded ? '' : 'none'}
                            onLoad={() => setLoaded(true)}
                            _focus={{}}
                        />
                    </Box>
                </Link>
            </NextLink>

            <Box px="5px" textAlign="center" width={'100%'} pos={'relative'} pt={'30px'}>
                <Box pos={'absolute'} w={'86%'} ml={'7%'} h={'20px'} left={'0'} top={'0'} p={'0 5px'}>
                    <CustomSlider {...settings} className="color-slider">
                        {variation_options?.map(({ attribute_color_image, variation_id, attribute_name }, index) => {
                            return (
                                <Box className="item-color">
                                    <DotColor
                                        image={attribute_color_image}
                                        id={variation_id}
                                        name={attribute_name}
                                        key={`dot-${index}`}
                                        setSelectedVariation={setSelectedVariation}
                                    />
                                </Box>
                            );
                        })}
                    </CustomSlider>
                </Box>
                <Box display={'flex'} justifyContent="flex-start" className="title" mt={{ base: '15px', sm: '0' }}>
                    <Box display="flex" flexDir={'column'} alignItems="flex-start">
                        <Text textStyle={'caption'} minH="36px" textAlign={'left'} display="-webkit-box" noOfLines={2}>
                            <Box as={'span'} fontWeight={'700'}>
                                {brand}
                            </Box>{' '}
                            {data ? data?.name : title}
                        </Text>
                        <Box
                            as={'p'}
                            textStyle={'textLg'}
                            d={'flex'}
                            alignItems={'end'}
                            m={'10px 12px 20px 0'}
                            color={'black'}
                        >
                            {data ? data?.price : price}
                            {list_price ? (
                                <Box as={'span'} ml={'8px'} textStyle={'text'} color={'lightGrey'}>
                                    {price}
                                </Box>
                            ) : null}
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Button
                variant="secondary"
                w={'100%'}
                color={'white'}
                backgroundColor={'black'}
                textTransform={'uppercase'}
                textStyle={'caption'}
            >
                {'Add to Bag'}
            </Button>
        </Box>
    );
};

export default ProductTeaser;
