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
                borderColor="darkgrey"
                borderRadius={'2px'}
                width="110px"
                height={'48px'}
                display="flex"
                justifyContent={'space-around'}
                alignItems="center"
                mb="24px"
                userSelect={'none'}
            >
                <MinusIcon onClick={decreaseHandler} cursor="pointer" />
                <Text textStyle="md">{number}</Text>
                <AddIcon onClick={increaseHandler} cursor="pointer" />
            </Box>
        </>
    );
};

export default ProductQuantityBox;
