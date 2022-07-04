import { Box, Image, ListItem, UnorderedList, Text } from '@chakra-ui/react';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import TitleSidebar from 'components/common/Account/TitleSidebar';
import Container from 'components/common/Container';
import MenuItemSidebar from 'components/common/MenuItemSidebar';
import useShops from 'hooks/useShops';
import useShop from 'hooks/useShop';
import PageTitleImg from 'components/common/PageTitleImg';

export default function Shops() {
    const { t } = useTranslation('shops');
    const router = useRouter();

    var title = t('title');

    const { allShopsData: shopsData } = useShops('shops');

    const { shopData } = useShop(router.query.id);

    const pageID = router.query.id;

    function createBodyShops() {
        return { __html: shopData?.body };
    }

    function createShopsHours() {
        return { __html: shopData?.shop_hours };
    }

    function createShopsContact() {
        return { __html: shopData?.shop_contact };
    }

    return (
        <>
            <Box>
                <PageTitleImg title={title} bgColor={'#4F815A'} />
                <Container>
                    <Box display={'flex'} py={'70px'}>
                        <Box w={'35%'} pr={'7%'}>
                            <MenuItemSidebar data={shopsData} shops />
                        </Box>
                        <Box w={'65%'} display={'flex'} flexDirection={'column'}>
                            <Box as={'h3'} textStyle={'h3'} borderBottom={'1px solid #919191'} pb={'8px'} mb={'30px'}>
                                {shopData?.title}
                            </Box>
                            {shopData?.image ? <Image src={shopData?.image} /> : ''}
                            {shopData?.body ? (
                                <Text
                                    textStyle={'md'}
                                    lineHeight={'24px'}
                                    borderBottom={'1px solid #919191'}
                                    py={'20px'}
                                    dangerouslySetInnerHTML={createBodyShops()}
                                />
                            ) : (
                                ''
                            )}

                            <Box pt={'20px'} display={'flex'} flexDirection={{ sm: 'column', lg: 'row' }}>
                                {shopData?.shop_hours ? (
                                    <Box w={{ sm: '100%', lg: '50%' }}>
                                        <Text textStyle={'md'} dangerouslySetInnerHTML={createShopsHours()} />
                                    </Box>
                                ) : (
                                    ''
                                )}
                                {shopData?.shop_contact ? (
                                    <Box w={{ sm: '100%', lg: '50%' }}>
                                        <Text textStyle={'md'} dangerouslySetInnerHTML={createShopsContact()} />
                                    </Box>
                                ) : (
                                    ''
                                )}
                            </Box>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </>
    );
}
