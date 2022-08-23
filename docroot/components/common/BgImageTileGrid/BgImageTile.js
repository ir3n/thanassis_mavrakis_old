import { Image, Flex, Text, Button, Link } from '@chakra-ui/react';
import NextLink from 'next/link';

const BgImageTile = ({ title, image, cta }) => {
    return (
        <Flex direction="column" position="relative" background="brand" overflow="hidden">
            <NextLink href={cta?.url || ''} passHref>
                <Link>
                    <Image
                        src={image}
                        alt="DUST+CREAM"
                        w="full"
                        h="100%"
                        display="block"
                        opacity="0.8"
                        transition="0.4s ease"
                        _hover={{ opacity: '0.6', transform: 'scale(1.05)' }}
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
                        <Text as="h4" textStyle="titleLg" fontWeight="800" mb="25px">
                            {title}
                        </Text>
                        <Button variant={'outlineWhite'} w={{ base: 'full', md: 'auto' }} marginTop="auto">
                            {cta?.title}
                        </Button>
                    </Flex>
                </Link>
            </NextLink>
        </Flex>
    );
};

export default BgImageTile;
