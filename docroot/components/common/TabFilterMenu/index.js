import { useEffect, useState } from 'react';
import { Tabs, TabList, TabPanels, TabPanel, Button, Box, Tab, Link, Image, Text } from '@chakra-ui/react';
import TabItem from '../TabItem';
import NextLink from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import { DESKTOP_SUBMENU_HEIGHT } from 'utils/constants';
import Container from '../Container';

const TabFilterMenu = ({ selectedMenu, thisPath }) => {
    const { t } = useTranslation('common');
    const [tabIndex, setTabIndex] = useState(0);
    const handleTabsChange = (index) => {
        setTabIndex(index);
    };

    useEffect(() => {
        setTabIndex(1);
    }, [selectedMenu]);

    return (
        <>
            <Box display={'flex'}>
                <Box pb="8px" d="flex" w="100%" justifyContent={'space-between'}>
                    <Box
                        display={'flex'}
                        flexDirection={'column'}
                        flexWrap="wrap"
                        borderBottom={'none'}
                        maxH={DESKTOP_SUBMENU_HEIGHT}
                    >
                        {selectedMenu?.submenu?.map(({ title, submenu, cleanUrl }, index) =>
                            submenu && submenu.length > 0 ? (
                                <Link width={'264px'}>{title}</Link>
                            ) : (
                                <Link
                                    width={'264px'}
                                    mb="24px"
                                    _focus={{ boxShadow: 'none' }}
                                    // _hover={{ textDecoration: 'none' }}
                                    textStyle={'sm'}
                                >
                                    <Text textStyle="sm"> {title}</Text>
                                </Link>
                            )
                        )}
                    </Box>
                    <Box>
                        <img src={'/assets/dummyimage.png'} alt="dummy image" />
                        <Text textStyle={'sm'} mt="8px">
                            Ασημένια Αντίγραφα
                        </Text>
                    </Box>
                </Box>
            </Box>

            {selectedMenu && selectedMenu?.submenu[tabIndex - 1] && selectedMenu?.submenu[tabIndex - 1].submenu ? (
                <Box textAlign={'center'}>
                    <NextLink
                        href={selectedMenu.submenu[tabIndex - 1].cleanUrl}
                        passHref
                        prefetch={false}
                        target={selectedMenu.submenu[tabIndex - 1]?.external ? '_blank' : '_self'}
                    >
                        <Button variant={'outline'} color={'brand.900'} width={'250px'} as={'a'}>
                            {t('view_all_menu')}
                        </Button>
                    </NextLink>
                </Box>
            ) : null}
        </>
    );
};

export default TabFilterMenu;
