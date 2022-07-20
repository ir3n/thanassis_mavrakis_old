import { Box } from '@chakra-ui/react';

const Underline = ({ active }) => {
    return (
        <Box
            as="div"
            pos="absolute"
            bg="brand"
            bottom="0"
            left="0"
            right="0"
            m="auto"
            h="2px"
            w={active ? 'full' : '0'}
            opacity={active ? '1' : '0'}
            transition="0.4s ease"
        ></Box>
    );
};

export default Underline;
