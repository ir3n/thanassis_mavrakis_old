import { Box } from '@chakra-ui/react';
const Container = ({ children, ...props }) => {
    return (
        <Box maxW="1180px" px="20px" m={'auto'} pos="relative" {...props}>
            {children}
        </Box>
    );
};

export default Container;
