import {
    Box,
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Text
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import Logo from '../Logo';
import { useState, useRef, useEffect } from 'react';
import MobileUserNav from './MobileUserNav';
import GlobalSearch from '../GlobalSearch';
import LevelOneMobileMenu from './LevelOneMobileMenu';
import { useDisclosure, useOutsideClick } from '@chakra-ui/react';
import SubMenuFooter from './SubMenuFooter';
import LanguageForm from '../Header/LanguageForm';
import MenuSeparator from '../Header/MenuSeparator';

const HeaderMobile = ({ customHeight, size }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const router = useRouter();
    const ref = useRef();
    const [isActive, setIsActive] = useState(false);
    const [selectedMenu, setSelectedMenu] = useState(false);
    const btnRef = useRef();

    // useEffect(() => {
    //     setSelectedMenu(false);
    // }, [router.asPath]);

    // useOutsideClick({
    //     ref: ref,
    //     handler: () => setSelectedMenu(false)
    // });

    return (
        <>
            <Box as={'header'} background={'white'} h="95px">
                <Box d="flex" w="100%" justifyContent={'flex-end'}>
                    <Box d="flex" alignItems={'center'} px="12px">
                        <Text textStyle={'caption'} mr="10px" whiteSpace={'nowrap'}>
                            Be a member
                        </Text>
                        <LanguageForm />
                    </Box>
                </Box>
                <MenuSeparator />
                <Box
                    alignItems={'center'}
                    justifyContent="center"
                    display={'flex'}
                    flexDir="row"
                    height={'48px'}
                    px="12px"
                >
                    <Box
                        textAlign={'left'}
                        flex={1}
                        display={'flex'}
                        justifyContent={'flex-start'}
                        alignItems={'center'}
                    >
                        {!selectedMenu && (
                            <Box
                                as={'button'}
                                ref={btnRef}
                                onClick={onOpen}
                                color={'black'}
                                background={'none'}
                                border={'none'}
                                mr={'20px'}
                                _focus={'none'}
                            >
                                <HamburgerIcon />
                            </Box>
                        )}

                        <GlobalSearch />
                    </Box>
                    <Logo />
                    <MobileUserNav />
                </Box>
            </Box>

            <Drawer
                isOpen={isOpen}
                placement="left"
                onClose={onClose}
                finalFocusRef={btnRef}
                size={size}
                id={'drawerMenu'}
            >
                <DrawerContent>
                    <DrawerCloseButton
                        position={'absolute'}
                        left={'32px'}
                        top={'48px'}
                        _focus={'none'}
                        justifyContent={'flex-start'}
                        _hover={'none'}
                    />

                    <DrawerBody padding={'0'} overflowY={'hidden'} boxShadow={'15px 0px 10px -15px rgba(0,0,0,0.63)'}>
                        <LevelOneMobileMenu onClose={onClose} />
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    );
};

export default HeaderMobile;
