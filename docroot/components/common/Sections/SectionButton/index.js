import { Box } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';
import NextLink from 'next/link';

const SectionButton = ({ cta, backgroundColor, text }) => {
    return (
        <Box
            display={'flex'}
            w={{ base: '324px', lg: '360px' }}
            maxW={{ base: '100%', lg: '32%' }}
            h={{ base: '192px', lg: '256px' }}
            p={'20px'}
            mb="1rem"
            backgroundColor={backgroundColor}
            flexDirection={'column'}
            justifyContent={'space-between'}
            alignItems={'center'}
            textAlign={'center'}
        >
            <Box as={'h3'} textStyle="h3">
                {text}
            </Box>
            <NextLink href={cta?.url || ''}>
                <Button variant={'outline'} size={'md'}>
                    {cta?.title}
                </Button>
            </NextLink>
        </Box>
    );
};

export default SectionButton;
