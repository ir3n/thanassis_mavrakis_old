import { Image, Flex, Text, Button, Box } from '@chakra-ui/react';
import NextLink from 'next/link';

const Tile = ({ title, image, cta }) => {
    return (
        <Flex direction="column" position="relative" background="brand" overflow="hidden">
            <NextLink href={cta?.url || ''}>
                <a>
                    <Image
                        src={image}
                        alt="DUST+CREAM"
                        w="full"
                        transition="0.4s ease"
                        _hover={{ opacity: '0.7', transform: 'scale(1.05)' }}
                    />
                    <Flex
                        direction="column"
                        position="absolute"
                        align="start"
                        top={{ base: '40px', md: 'auto' }}
                        bottom="40px"
                        left="40px"
                        right="40px"
                        color="white"
                    >
                        <Text as="h4" fontSize="30px" fontWeight="800" mb="25px">
                            {title}
                        </Text>
                        <Button variant={'outlineWhite'} w={{ base: 'full', md: 'auto' }} marginTop="auto">
                            {cta?.title}
                        </Button>
                    </Flex>
                </a>
            </NextLink>
        </Flex>
    );
};

export default Tile;
