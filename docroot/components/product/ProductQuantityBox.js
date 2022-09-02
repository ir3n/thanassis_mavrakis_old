import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import { Box, Text, Link } from '@chakra-ui/react';
import { useState } from 'react';

const ProductQuantityBox = ({ setNumber, number }) => {
    // const [number, setNumber] = useState(1);

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
                {/* <Link
                    onClick={() => {
                        handleUpdateQuantity(item.order_item_id, Number(item.quantity) + 1, 'ascendant');
                    }}
                >
                    <Image src={'/assets/plus.svg'} w={'12px'} h={'12px'} alt={'add'} />
                </Link> */}

                <Text textStyle="textLg" fontWeight="600">
                    {number}
                </Text>
                {/* <Link
                    onClick={() => {
                        handleUpdateQuantity(item.order_item_id, Number(item.quantity) - 1, 'descendant');
                    }}
                >
                    <Image src={'/assets/minus.svg'} w={'10px'} h={'10px'} alt={'remove'} />
                </Link> */}
                <AddIcon onClick={increaseHandler} cursor="pointer" color="mediumGrey" />
            </Box>
        </>
    );
};

export default ProductQuantityBox;
