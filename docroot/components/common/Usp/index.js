import { Flex, Box } from '@chakra-ui/react';
import InfoIcon from './InfoIcon';

const Usp = ({ items }) => {
    return (
        <Box bgColor="red" p={{ base: '20px 20px 0 20px', md: '20px' }}>
            <Flex
                align={{ base: 'left', md: 'center' }}
                justifyContent="center"
                direction={{ base: 'column', md: 'row' }}
                maxW={{ base: '220px', md: '100%' }}
                m="auto"
            >
                {items?.map((item, index) => (
                    <Box m={{ base: '0 0 20px 0', md: '0 12px' }} key={`usp-${index}`}>
                        <InfoIcon image={item?.icon} text={item?.text} />
                    </Box>
                ))}
            </Flex>
        </Box>
    );
};

export default Usp;
