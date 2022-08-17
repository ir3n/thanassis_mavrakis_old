import { Box, Text, Image, Flex } from '@chakra-ui/react';

const InfoIcon = ({ image, text }) => {
    return (
        <>
            <Flex alignItems={'center'}>
                <Image src={image} h="23px" w="23px" alt={text} mr="20px" />
                <Text fontSize={{ base: '12px', lg: '14px' }} color="white">
                    {text}
                </Text>
            </Flex>
        </>
    );
};

export default InfoIcon;
