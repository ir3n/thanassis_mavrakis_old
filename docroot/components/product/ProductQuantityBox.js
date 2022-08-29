import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import { Box, Text } from '@chakra-ui/react';
import { useState } from 'react';

const ProductQuantityBox = () => {
    const [number, setNumber] = useState(1);

    const decreaseHandler = () => {
        number === 0 ? setNumber(number) : setNumber(number - 1);
    };

    const increaseHandler = () => {
        setNumber(number + 1);
    };

    return (
        <>
            <Box
                borderWidth="1px"
                borderStyle="solid"
                borderColor="border"
                borderRadius="0"
                width="100px"
                height="40px"
                display="flex"
                justifyContent="space-around"
                alignItems="center"
                mb="10px"
                userSelect="none"
                transition="all 0.3s ease"
                _hover={{ borderColor: 'gray.300' }}
            >
                <MinusIcon onClick={decreaseHandler} cursor="pointer" color="mediumGrey" />
                <Text textStyle="textLg" fontWeight="600">
                    {number}
                </Text>
                <AddIcon onClick={increaseHandler} cursor="pointer" color="mediumGrey" />
            </Box>
        </>
    );
};

export default ProductQuantityBox;
