import { Box } from '@chakra-ui/react';

const Underline = () => {
    return (
        <Box
            as="div"
            className="underline"
            pos="absolute"
            bg="brand"
            bottom="0"
            left="0"
            right="0"
            m="auto"
            h="2px"
            w="0"
            opacity="0"
            transition="0.4s ease"
        ></Box>
    );
};

export default Underline;
