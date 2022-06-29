import {
    Box,
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Flex,
    HStack
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import Logo from '../Logo';
import { useState, useRef, useEffect } from 'react';
import MobileUserNav from './MobileUserNav';
import GlobalSearch from '../GlobalSearch';
import WishListIndicator from '../WishListIndicator';
import LevelOneMobileMenu from './LevelOneMobileMenu';
import { useDisclosure, useOutsideClick } from '@chakra-ui/react';
import MiniCart from '../MiniCart';
import SubMenuFooter from './SubMenuFooter';
import LanguageForm from '../Header/LanguageForm';

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
            <Box as={'header'} background={'brand'} h="65px">
                <Flex alignItems="center" px="15px">
                    <Box as="div" w="50%">
                        {!selectedMenu && (
                            <Box
                                as={'button'}
                                ref={btnRef}
                                onClick={onOpen}
                                color={'white'}
                                background={'none'}
                                border={'none'}
                                _focus={'none'}
                            >
                                <HamburgerIcon w="25px" h="30px" />
                            </Box>
                        )}
                    </Box>

                    <HStack w="50%" spacing="10px">
                        <Box w="30px">
                            <Logo />
                        </Box>

                        <MobileUserNav />
                        <WishListIndicator />
                        <GlobalSearch />
                        <MiniCart boxSize={{ base: '1.2rem', sm: '1.2rem' }} />
                    </HStack>
                </Flex>
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
