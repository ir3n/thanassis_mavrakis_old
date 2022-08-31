import React, { useState, useEffect, useRef } from 'react';
import { Box, Link, Image } from '@chakra-ui/react';

const DotColor = ({ image, id, name, setSelectedVariation }) => {
    return (
        <Box w={'22px'} h={'22px'} m="auto" p="2px">
            <Link
                id={id}
                display="block"
                w={'100%'}
                h={'100%'}
                onClick={() => {
                    setSelectedVariation(id);
                }}
            >
                <Image src={image} w={'100%'} h={'100%'} objectFit={'cover'} borderRadius={'50%'} alt={name} />
            </Link>
        </Box>
    );
};

export default DotColor;
