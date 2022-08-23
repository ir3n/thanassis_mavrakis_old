import { Box, Image } from '@chakra-ui/react';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';

export default function PageTitleImg({ title, bgColor, image }) {
    const router = useRouter();

    return (
        <>
            {image ? (
                <Box h={{ sm: '120px', lg: '320px' }}>
                    <Image src={image} w={'100%'} h={'100%'} objectFit={'cover'} alt={''} />
                </Box>
            ) : (
                <Box
                    as={'h1'}
                    textStyle={'titleMd'}
                    textAlign={'center'}
                    py={'40px'}
                    color={'white'}
                    backgroundColor={bgColor}
                >
                    {title}
                </Box>
            )}
        </>
    );
}
