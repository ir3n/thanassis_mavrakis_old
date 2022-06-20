import Container from 'components/common/Container';
import { Box } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/react';
import { Button } from '@chakra-ui/button';
import { Heading } from '@chakra-ui/layout';
import NextLink from 'next/link';

const BannerImage = ({ section, fullWidth }) => {
    return (
        <Container fullWidth={fullWidth} marginBottom={'48px'}>
            <Box
                d={'flex'}
                h={{ base: '560px', lg: '400px' }}
                flexDir={{ base: 'column', lg: 'row' }}
                justifyContent="center"
                alignItems={'center'}
            >
                <Box
                    d={'flex'}
                    backgroundColor={section?.background_color}
                    flexDirection={'column'}
                    justifyContent={'space-between'}
                    px={{ base: '24px', lg: '100px' }}
                    py={{ base: '24px', lg: '48px' }}
                    w={{ base: '324px', lg: '50%' }}
                    h={{ base: '280px', lg: '100%' }}
                >
                    <Heading textStyle={'h2'} color={section?.text_color}>
                        {section?.text}
                    </Heading>
                    <NextLink href={section?.cta?.url || ''}>
                        <Button size="md" variant={'outline'}>
                            {section?.cta?.title}
                        </Button>
                    </NextLink>
                </Box>
                <Image
                    src={section?.image}
                    w={{ base: '324px', lg: '564px' }}
                    h={{ base: '280px', lg: '100%' }}
                    maxH={'100%'}
                    alt="image"
                />
            </Box>
        </Container>
    );
};

export default BannerImage;
