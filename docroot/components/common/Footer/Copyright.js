import { Box } from '@chakra-ui/react';
import useTranslation from 'next-translate/useTranslation';

export default function Copyright({}) {
    const { t } = useTranslation('footer');

    return (
        <Box color={'black'} padding={'25px 0'}>
            <Box as="p" textStyle={'md'} paddingBottom={'8px'}>
                {t('purchase')}
            </Box>
            <Box as="p" textStyle={'captionSm'}>
                © 2022 Benaki Museum Shop All Rights Reserved
            </Box>
        </Box>
    );
}
