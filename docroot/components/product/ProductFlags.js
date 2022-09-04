import { Box } from '@chakra-ui/react';

export default function ProductFlags({ teaser, webOnly, discount }) {
    return (
        <Box
            display={teaser ? 'block' : 'flex'}
            position={teaser ? 'absolute' : 'relative'}
            top={teaser && '5px'}
            left={teaser && '5px'}
            mb={{ base: '10px', lg: '30px' }}
            zIndex="1"
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
                    mb="3px"
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
                    bg="lightBlue"
                    color="white"
                    border="1px solid"
                    borderColor="lightBlue"
                    textStyle="note"
                    mb="3px"
                >
                    WEB ONLY
                </Box>
            )}
        </Box>
    );
}
