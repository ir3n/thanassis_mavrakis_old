import React, { useState, useEffect, useRef } from 'react';
import { Box, Text, Link, Image } from '@chakra-ui/react';
import NextLink from 'next/link';

import Tracking from 'utils/tracking';

const FeaturedProduct = ({ title, product_id, image, price, cleanUrl, url, path, mastersku, discount_percentage }) => {
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
            // paddingX={'1rem'}
            id="carousel-box"
            onClick={() => Tracking.selectItem(title, mastersku)}
        >
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
                        <Text textStyle={'md'} maxW="220px" textAlign={'left'} display="-webkit-box" noOfLines={2}>
                            {title}
                        </Text>
                        <Box
                            as={'p'}
                            textStyle={'md'}
                            fontWeight="bold"
                            mb={'20px'}
                            color={'black'}
                            mr="12px"
                            mt="10px"
                        >
                            {price}
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
            {/* <Button isLoading={loadingAddToCart} onClick={() => handleAddToCart()}>
                Add to Cart
            </Button> */}
        </Box>
    );
};

export default FeaturedProduct;
