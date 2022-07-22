import { Image, Text, VStack, Box, Flex } from '@chakra-ui/react';
import Link from 'next/link';
import Youtube from '../../icons/Youtube';

const VideoTeaser = ({ image, link, text }) => {
    return (
        <VStack spacing={{ base: '15px', lg: '25px' }} maxW="350px" m={{ base: '0 auto 20px', sm: 'auto' }}>
            <Box bg="brand" position="relative">
                <Link href={link} passHref>
                    <a target="_blank">
                        <Image src={image} alt={text} opacity="0.7" />
                        <Flex
                            position="absolute"
                            top="0"
                            bottom="0"
                            left="0"
                            right="0"
                            justifyContent="center"
                            align="center"
                            bg="rgba(0, 0, 0, 0.5)"
                            opacity={{ base: '1', xl: '0' }}
                            transition="0.4s ease"
                            _hover={{ opacity: '1' }}
                        >
                            <Youtube />
                        </Flex>
                    </a>
                </Link>
            </Box>

            <Text fontWeight="600" fontSize={{ base: '14px', lg: '18px' }} lineHeight="1.1">
                {text}
            </Text>
        </VStack>
    );
};

export default VideoTeaser;
