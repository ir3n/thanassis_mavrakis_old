import React from 'react';
import { Box, Text, Link, Image } from '@chakra-ui/react';
import NextLink from 'next/link';
//import NextImage from 'next/image';
import { BLUR_DATA_URL } from 'utils/constants';

const SearchedProduct = ({ title, image, price, url, onClose }) => {
    return (
        <Box onClick={onClose}>
            <NextLink href={url || '#'} passHref prefetch={false}>
                <Link pos="relative" as={'a'}>
                    <Box display="flex" borderBottom={'1px solid #eaeaea'} p={'10px'}>
                        <Image width={'50px'} height={'50px'} src={image} placeholder="blur" alt="image" />
                        <Box position="relative" display="flex" flexDir={'column'} width={'100%'}>
                            <Text ml="10px" fontSize={'17px'}>
                                {title}
                            </Text>
                            <Box position={'absolute'} right={'5px'} bottom={'0px'}>
                                <Text fontSize={'16px'} fontWeight={'bold'}>
                                    {price}
                                </Text>
                            </Box>
                        </Box>
                    </Box>
                </Link>
            </NextLink>
        </Box>
    );
};

export default SearchedProduct;
