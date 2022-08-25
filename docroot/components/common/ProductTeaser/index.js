import React, { useState, useEffect, useRef } from 'react';
import { Box, Text, Link, Image, Button } from '@chakra-ui/react';
import NextLink from 'next/link';

import Tracking from 'utils/tracking';

const ProductTeaser = ({ title, product_id, key, image, price, url, brand, mastersku, discount_percentage }) => {
    const imageRef = useRef(null);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        if (!loaded && imageRef.current?.complete) {
            setLoaded(true);
        }
    }, []);

    return (
        <Box
            display="flex"
            flexDir={'column'}
            alignItems="center"
            backgroundColor={'white'}
            onClick={() => Tracking.selectItem(title, mastersku)}
            pos={'relative'}
        >
            <Box pos={'absolute'} textAlign={'center'} top={'8px'} left={'8px'} zIndex={'9999'}>
                <Box w={'60px'} border={'1px solid black'} p={'8px'} textStyle={'caption'}>
                    {'-20%'}
                </Box>
                <Box backgroundColor={'blue'} textStyle={'note'} color={'white'} p={'8px'} mt={'4px'}>
                    {'WEB ONLY'}
                </Box>
            </Box>
            <Box pos={'absolute'} top={'8px'} right={'8px'} zIndex={'9999'}>
                <NextLink href={url || '#'} passHref prefetch={false}>
                    <Link _focus={{}} pos="relative" as={'a'} data-productid={mastersku}>
                        <Image width={'26px'} height={'26px'} alt={title} src={'/assets/heart.png'} />
                    </Link>
                </NextLink>
            </Box>
            <NextLink href={url || '#'} passHref prefetch={false}>
                <Link _focus={{}} pos="relative" as={'a'} data-productid={mastersku}>
                    <Box
                        _focus={{}}
                        display="flex"
                        flexDir={'column'}
                        alignItems="center"
                        textAlign="center"
                        position={'relative'}
                    >
                        {loaded ? null : <Box className="spinner" />}

                        <Image
                            ref={imageRef}
                            width={'264px'}
                            maxWidth="100%"
                            maxH={'100%'}
                            height={'360px'}
                            placeholder="blur"
                            style={{
                                margin: 'auto',
                                boxSize: '300px',
                                objectFit: 'contain',
                                maxWidth: '100%'
                            }}
                            alt={title}
                            src={image}
                            display={loaded ? '' : 'none'}
                            onLoad={() => setLoaded(true)}
                            _focus={{}}
                        />
                    </Box>
                </Link>
            </NextLink>
            <Box ml="10px" textAlign="center" width={'100%'}>
                <Box display={'flex'} justifyContent="flex-start" className="title" mt={{ base: '15px', sm: '0' }}>
                    <Box display="flex" flexDir={'column'} alignItems="flex-start">
                        <Text textStyle={'caption'} maxW="220px" textAlign={'left'} display="-webkit-box" noOfLines={2}>
                            <Box as={'span'} fontWeight={'700'}>
                                {brand}
                            </Box>
                            {': '}
                            {title}
                        </Text>
                        <Box
                            as={'p'}
                            textStyle={'textLg'}
                            d={'flex'}
                            alignItems={'end'}
                            m={'10px 12px 20px 0'}
                            color={'black'}
                        >
                            {price}
                            <Box as={'span'} ml={'8px'} textStyle={'text'} color={'lightGrey'}>
                                {price}
                            </Box>
                        </Box>
                        {discount_percentage ? (
                            <Box
                                as={'p'}
                                fontWeight={700}
                                fontSize={{ base: '16px', sm: '20px', lg: '22px' }}
                                mb={'20px'}
                                color={'brand.900'}
                            >
                                {discount_percentage}
                            </Box>
                        ) : (
                            ''
                        )}
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
