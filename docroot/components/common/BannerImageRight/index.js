import { Flex, Image, Text, Button, Box, Link } from '@chakra-ui/react';
import Container from '../Container';
import NextLink from 'next/link';

const BannerImageRight = ({ dark, text, image, title, cta, imageTitle, centerAlign }) => {
    const desktopAlign = centerAlign ? 'center' : 'normal';
    return (
        <Container mb={{ base: '45px', xl: '100px' }} mx={{ base: '-20px', md: 'auto' }}>
            <Flex
                overflow="hidden"
                bg={dark ? 'brand' : 'transparent'}
                color={dark ? 'white' : 'brand'}
                justifyContent="space-between"
                align={{ base: 'normal', md: desktopAlign }}
                direction={{ base: 'column-reverse', md: 'row' }}
            >
                <Flex
                    direction="column"
                    align={{ base: 'normal', md: 'start' }}
                    maxW={{ base: '580px', md: '400px' }}
                    p={{ base: '30px 20px 40px', lg: '50px' }}
                >
                    <Text as="h4" textStyle="titleLg" fontWeight="700" mb="30px" maxW={{ base: '220px', md: 'unset' }}>
                        {title}
                    </Text>
                    {imageTitle ? <Image src={imageTitle} mb="30px" maxW={{ base: '200px', xl: 'full' }} /> : ''}
                    <Text as="p" mb="30px" maxW={{ base: '220px', md: 'unset' }}>
                        {text}
                    </Text>
                    <Box mt="auto">
                        <NextLink href={cta?.url || ''} passHref>
                            <Button variant={dark ? 'outlineWhite' : 'outlineBlack'} w={{ base: 'full', lg: 'auto' }}>
                                {cta?.title}
                            </Button>
                        </NextLink>
                    </Box>
                </Flex>
                <NextLink href={cta?.url || ''} passHref>
                    <Link>
                        <Image
                            display="block"
                            src={image}
                            alt={title}
                            opacity="0.9"
                            m="0 auto"
                            transition="0.4s ease"
                            _hover={{ opacity: '1' }}
                        />
                    </Link>
                </NextLink>
            </Flex>
        </Container>
    );
};

export default BannerImageRight;
