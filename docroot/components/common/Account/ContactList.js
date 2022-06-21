import { Box, Text } from '@chakra-ui/react';
import useTranslation from 'next-translate/useTranslation';

const ContactList = () => {
    const { t } = useTranslation('account');

    return (
        <Box textStyle={'md'}>
            <Text pb={'8px'}>{t('storeSupport')}</Text>
            <Text pb={'8px'}>{'the-shop@benaki.org'}</Text>
            <Text pb={'30px'}>{'+30 210 367 1045'}</Text>
            <Text pb={'8px'}>{t('support')}</Text>
            <Text pb={'8px'}>{'sales-shop@benaki.org'}</Text>
            <Text>{'+30 210 367 1074'}</Text>
        </Box>
    );
};

export default ContactList;
