import { Box } from '@chakra-ui/react';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';

export default function PageTitle() {
    const { t } = useTranslation('cart');
    const router = useRouter();

    return (
        <>
            <Box as="h1" textStyle="titleMd" textAlign="center" py="40px">
                {'Έλληνες Σχεδιαστές'}
            </Box>
        </>
    );
}
