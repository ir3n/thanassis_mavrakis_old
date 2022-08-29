import { useContext, useEffect, useState } from 'react';
import { Text, Box, Button, Flex, useToast } from '@chakra-ui/react';

export default function ProductFlags({ teaser, webOnly, discount }) {
    return (
        <Box
            display={teaser ? 'block' : 'flex'}
            position={teaser ? 'absolute' : 'relative'}
            mb={{ base: '10px', lg: '30px' }}
        >
            {discount && (
                <Box
                    p="5px"
                    minW="50px"
                    align="center"
                    fontWeight="600"
                    border="1px solid"
                    borderColor="brand"
                    color="brand"
                    textStyle="note"
                    mr="5px"
                >
                    {discount}
                </Box>
            )}
            {webOnly && (
                <Box
                    p="5px"
                    minW="50px"
                    align="center"
                    fontWeight="600"
                    bg="blue"
                    color="white"
                    border="1px solid"
                    borderColor="blue"
                    textStyle="note"
                >
                    WEB ONLY
                </Box>
            )}
        </Box>
    );
}
