import { Box, UnorderedList, ListItem, Link, Text } from '@chakra-ui/react';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import TitleSidebar from 'components/common/Account/TitleSidebar';
import Container from 'components/common/Container';
import MenuItemSidebar from 'components/common/MenuItemSidebar';
import SecureList from 'components/common/Account/SecureList';
import ContactList from 'components/common/Account/ContactList';
import General from 'components/common/Account/General';
import Information from 'components/common/Account/Information';
import Addresses from 'components/common/Account/Addresses';
import Orders from 'components/common/Account/Orders';
import Newsletters from 'components/common/Account/Newsletters';
import PrivacySettings from 'components/common/Account/PrivacySettings';
import Subscription from 'components/common/Account/Subscription';
import ResetPass from 'components/common/Account/ResetPass';
import SignOut from 'components/common/Account/SignOut';

export default function Account() {
    const { t } = useTranslation('account');
    const router = useRouter();

    const pageID = router.query.id;

    const renderAccountSection = () => {
        switch (router.asPath) {
            case '/account/general':
                return <General />;
            case '/account/information':
                return <Information />;
            case '/account/addresses':
                return <Addresses />;
            case '/account/orders':
                return <Orders />;
            case '/account/newsletters':
                return <Newsletters />;
            case '/account/privacy_settings':
                return <PrivacySettings />;
            case '/account/subscription':
                return <Subscription />;
            case '/account/reset_pass':
                return <ResetPass />;
            case '/account/sign_out':
                return <SignOut />;
        }
    };

    const renderSectionTitle = () => {
        switch (router.asPath) {
            case '/account/general':
                return (
                    <Box
                        as={'h1'}
                        textStyle={'titleMd'}
                        textAlign={'center'}
                        py={'45px'}
                        borderBottom={'1px solid #919191'}
                    >
                        {t('myAccount')}
                    </Box>
                );
            case '/account/information':
                return (
                    <Box
                        as={'h1'}
                        textStyle={'titleMd'}
                        textAlign={'center'}
                        py={'45px'}
                        borderBottom={'1px solid #919191'}
                    >
                        {t('myAccount')}
                    </Box>
                );
            case '/account/addresses':
                return (
                    <Box
                        as={'h1'}
                        textStyle={'titleMd'}
                        textAlign={'center'}
                        py={'45px'}
                        borderBottom={'1px solid #919191'}
                    >
                        {t('addresses')}
                    </Box>
                );
            case '/account/orders':
                return (
                    <Box
                        as={'h1'}
                        textStyle={'titleMd'}
                        textAlign={'center'}
                        py={'45px'}
                        borderBottom={'1px solid #919191'}
                    >
                        {t('myOrders')}
                    </Box>
                );
            case '/account/newsletters':
                return (
                    <Box
                        as={'h1'}
                        textStyle={'titleMd'}
                        textAlign={'center'}
                        py={'45px'}
                        borderBottom={'1px solid #919191'}
                    >
                        {t('subscribeNewsletter')}
                    </Box>
                );
            case '/account/privacy_settings':
                return (
                    <Box
                        as={'h1'}
                        textStyle={'titleMd'}
                        textAlign={'center'}
                        py={'45px'}
                        borderBottom={'1px solid #919191'}
                    >
                        {t('privacySettings')}
                    </Box>
                );
            case '/account/subscription':
                return (
                    <Box
                        as={'h1'}
                        textStyle={'titleMd'}
                        textAlign={'center'}
                        py={'45px'}
                        borderBottom={'1px solid #919191'}
                    >
                        {t('memberInformation')}
                    </Box>
                );
            case '/account/reset_pass':
                return (
                    <Box
                        as={'h1'}
                        textStyle={'titleMd'}
                        textAlign={'center'}
                        py={'45px'}
                        borderBottom={'1px solid #919191'}
                    >
                        {t('resetPass')}
                    </Box>
                );
            case '/account/sign_out':
                return (
                    <Box
                        as={'h1'}
                        textStyle={'titleMd'}
                        textAlign={'center'}
                        py={'45px'}
                        borderBottom={'1px solid #919191'}
                    >
                        {t('successfullyLoggedOut')}
                    </Box>
                );
        }
    };

    const MENU_ITEMS = [
        {
            title: t('myAccount'),
            cleanUrl: '/account/general'
        },
        {
            title: t('information'),
            cleanUrl: '/account/information'
        },
        {
            title: t('addresses'),
            cleanUrl: '/account/addresses'
        },
        {
            title: t('orders'),
            cleanUrl: '/account/orders'
        },
        {
            title: t('newsletters'),
            cleanUrl: '/account/newsletters'
        },
        {
            title: t('privacySettings'),
            cleanUrl: '/account/privacy_settings'
        },
        {
            title: t('subscription'),
            cleanUrl: '/account/subscription'
        },
        {
            title: t('resetPass'),
            cleanUrl: '/account/reset_pass'
        }
    ];

    return (
        <>
            <Container>
                {renderSectionTitle()}
                <Box display={'flex'} py={'70px'}>
                    {pageID === 'sign_out' ? (
                        ''
                    ) : (
                        <Box w={pageID === 'orders' ? '25%' : '35%'} pr={'7%'}>
                            <MenuItemSidebar data={MENU_ITEMS} borderLine />
                            <TitleSidebar title={'secure'} />
                            <SecureList />

                            <TitleSidebar title={'contact'} />
                            <ContactList />
                        </Box>
                    )}

                    <Box w={pageID === 'orders' ? '76%' : '65%'}>{renderAccountSection()}</Box>
                </Box>
            </Container>
        </>
    );
}
