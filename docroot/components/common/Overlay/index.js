import { Box } from '@chakra-ui/react';

const Overlay = ({ display }) => {
    return (
        <Box
            as="div"
            pos="fixed"
            top="0"
            right="0"
            bottom="0"
            left="0"
            bg="darkGrey"
            opacity="0.7"
            zIndex="skipLink"
            display={display}
        ></Box>
    );
};

export default Overlay;
