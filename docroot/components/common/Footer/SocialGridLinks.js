import { useRouter } from 'next/router';
import { Box, Link, Image } from '@chakra-ui/react';
import useTranslation from 'next-translate/useTranslation';
import NextLink from 'next/link';

export default function SocialGridLinks({}) {
    const router = useRouter();
    const { t } = useTranslation('footer');

    return (
        <Box>
            <Box as="h4" fontFamily={'Open sans'} paddingTop={'8px'}>
                <NextLink href={'/'} passHref prefetch={false}>
                    <Link
                        textStyle={'caption'}
                        textTransform={'uppercase'}
                        pos="relative"
                        _hover={{ textDecoration: 'none' }}
                    >
                        {t('catalogue')}
                    </Link>
                </NextLink>
            </Box>
            <Box as="h4" paddingBottom="15px" fontFamily={'Open sans'}>
                <NextLink href={'/'} passHref prefetch={false}>
                    <Link
                        textStyle={'caption'}
                        textTransform={'uppercase'}
                        pos="relative"
                        _hover={{ textDecoration: 'none' }}
                    >
                        {t('press_kit')}
                    </Link>
                </NextLink>
            </Box>
        </Box>
    );
}
