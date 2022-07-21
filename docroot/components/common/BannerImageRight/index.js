import { Flex, Image, Text, Button, Box } from '@chakra-ui/react';
import Container from '../Container';
import NextLink from 'next/link';

const BannerImageRight = ({ dark, text, image, title, cta }) => {
    return (
        <Container mb={{ base: '45px', xl: '100px' }} mx={{ base: '-20px', md: 'auto' }}>
            <Flex
                overflow="hidden"
                bg={dark ? 'brand' : 'transparent'}
                color={dark ? 'white' : 'brand'}
                justifyContent="space-between"
                align="normal"
                direction={{ base: 'column-reverse', md: 'row' }}
            >
                <Flex
                    direction="column"
                    align={{ base: 'normal', md: 'start' }}
                    maxW={{ base: '580px', md: '400px' }}
                    p={{ base: '30px 20px 40px', lg: '50px' }}
                >
                    <Text
                        as="h4"
                        fontSize={{ base: '20px', xl: '30px' }}
                        lineHeight="1.2"
                        fontWeight="700"
                        mb="30px"
                        maxW={{ base: '220px', md: 'unset' }}
                    >
                        {title}
                    </Text>
                    <Text as="p" mb="30px" maxW={{ base: '220px', md: 'unset' }}>
                        {text}
                    </Text>
                    <Box mt="auto">
                        <NextLink href={cta?.url || ''}>
                            <Button variant={'outlineWhite'} w={{ base: 'full', lg: 'auto' }}>
                                {cta?.title}
                            </Button>
                        </NextLink>
                    </Box>
                </Flex>
                <NextLink href={cta?.url || ''}>
                    <a>
                        <Image
                            display="block"
                            src={image}
                            alt={title}
                            opacity="0.9"
                            m="0 auto"
                            transform={{ base: 'none', xl: 'scale(1.02)' }}
                            transition="0.4s ease"
                            _hover={{ transform: 'none', opacity: '1' }}
                        />
                    </a>
                </NextLink>
            </Flex>
        </Container>
    );
};

export default BannerImageRight;
