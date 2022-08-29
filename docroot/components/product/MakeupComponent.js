import useTranslation from 'next-translate/useTranslation';
import { Box, Flex, Image } from '@chakra-ui/react';

const MakeupComponent = ({ data, setSelectedVariation, selectedVariation }) => {
    return (
        <Flex wrap="wrap" mt="15px" mb="15px">
            {data?.map((item, index) => (
                <Box onClick={() => setSelectedVariation(item)} key={`color-${index}`}>
                    <Box
                        w="26px"
                        h="26px"
                        m="2px"
                        cursor="pointer"
                        border={item == selectedVariation ? '1px solid black' : '1px solid transparent'}
                        _hover={{ border: '1px solid black' }}
                    >
                        <Image src={item?.attribute_color_image} />
                    </Box>
                </Box>
            ))}
        </Flex>
    );
};

export default MakeupComponent;
