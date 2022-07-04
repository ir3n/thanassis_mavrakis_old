import { Box, Text, Link } from '@chakra-ui/react';
import useTranslation from 'next-translate/useTranslation';

const General = () => {
    const { t } = useTranslation('account');

    return (
        <Box>
            <Box
                display={'flex'}
                alignItems={'baseline'}
                justifyContent={'space-between'}
                flexDirection={{ sm: 'column', lg: 'row' }}
                pb={'60px'}
            >
                <Text as={'h3'} textStyle={'h3'}>
                    {'John Doe'}
                </Text>
                <Link href="/account/sign_out" _hover={{ color: 'brand' }} textDecoration={'underline'}>
                    {t('logOut')}
                </Link>
            </Box>

            <Box display={'flex'} flexDirection={{ sm: 'column', lg: 'row' }} pb={'30px'}>
                <Box w={{ sm: '100%', lg: '55%' }}>
                    <Text as={'h3'} textStyle={'h3'} pb={'8px'} mb={'16px'} borderBottom={'1px solid #919191'}>
                        {t('information')}
                    </Text>
                    <Link _hover={{ color: 'brand' }} textDecoration={'underline'}>
                        {t('changeName')}
                    </Link>
                </Box>
                <Box w={{ sm: '100%', lg: '45%' }}>
                    <Text as={'h3'} textStyle={'h3'} pb={'8px'} mb={'16px'} borderBottom={'1px solid #919191'}>
                        {t('addresses')}
                    </Text>
                    <Link _hover={{ color: 'brand' }} textDecoration={'underline'}>
                        {t('addressManagement')}
                    </Link>
                </Box>
            </Box>

            <Box display={'flex'} flexDirection={{ sm: 'column', lg: 'row' }} pb={'30px'}>
                <Box w={{ sm: '100%', lg: '55%' }}>
                    <Text as={'h3'} textStyle={'h3'} pb={'8px'} mb={'16px'} borderBottom={'1px solid #919191'}>
                        {t('payments')}
                    </Text>
                    <Link _hover={{ color: 'brand' }} textDecoration={'underline'}>
                        {t('paymentDetails')}
                    </Link>
                </Box>
                <Box w={{ sm: '100%', lg: '45%' }}>
                    <Text as={'h3'} textStyle={'h3'} pb={'8px'} mb={'16px'} borderBottom={'1px solid #919191'}>
                        {t('orders')}
                    </Text>
                    <Link _hover={{ color: 'brand' }} textDecoration={'underline'}>
                        {t('orderDetails')}
                    </Link>
                </Box>
            </Box>

            <Box display={'flex'} flexDirection={{ sm: 'column', lg: 'row' }} pb={'30px'}>
                <Box w={{ sm: '100%', lg: '55%' }}>
                    <Text as={'h3'} textStyle={'h3'} pb={'8px'} mb={'16px'} borderBottom={'1px solid #919191'}>
                        {t('newsletters')}
                    </Text>
                    <Box>
                        <Link _hover={{ color: 'brand' }}>{t('subscribeToGeneralSubscription')}</Link>
                    </Box>
                    <Box>
                        <Link _hover={{ color: 'brand' }} textDecoration={'underline'}>
                            {t('changeOptions')}
                        </Link>
                    </Box>
                </Box>
                <Box w={{ sm: '100%', lg: '45%' }}>
                    <Text as={'h3'} textStyle={'h3'} pb={'8px'} mb={'16px'} borderBottom={'1px solid #919191'}>
                        {t('subscription')}
                    </Text>
                    <Link _hover={{ color: 'brand' }} textDecoration={'underline'} mt={'16px'}>
                        {t('changeMemberDetails')}
                    </Link>
                </Box>
            </Box>
        </Box>
    );
};

export default General;
