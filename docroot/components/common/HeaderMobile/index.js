import { Box, Flex, HStack } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import Logo from '../Logo';
import Burger from '../Burger';
import LanguageForm from '../Header/LanguageForm';
import { useState, useEffect } from 'react';
import Login from '../Login';
import GlobalSearch from '../GlobalSearch';
import WishListIndicator from '../WishListIndicator';
import LevelOneMobileMenu from './LevelOneMobileMenu';
import MiniCart from '../MiniCart';
import useMenu from 'hooks/useMenu';
import useTranslation from 'next-translate/useTranslation';

const HeaderMobile = ({ offset }) => {
    const { menuData, isLoading } = useMenu('main');
    const [isActive, setIsActive] = useState(false);
    const [mobileMenuPosition, setMobileMenuPosition] = useState(0);

    const router = useRouter();

    const { t } = useTranslation('header');

    useEffect(() => {
        setIsActive(false);
    }, [router.asPath]);

    useEffect(() => {
        setMobileMenuPosition(document.querySelector('header').clientHeight);
    }, []);

    const toggleButton = () => {
        !isActive ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = 'auto');
        setIsActive(!isActive);
    };

    const thisPath = router.asPath.substr(router.asPath.lastIndexOf('/') + 1);

    return (
        <>
            <Box as={'header'} background={'brand'} h="65px">
                <Flex alignItems="center" px="15px">
                    <Box as="div" w="50%">
                        <Burger isActive={isActive} toggleButton={toggleButton} />
                    </Box>

                    <HStack w="50%" spacing="10px">
                        <Box w="30px" mr="auto">
                            <Logo />
                        </Box>

                        <Login offset={offset} />
                        <WishListIndicator />
                        <GlobalSearch />
                        <MiniCart boxSize={{ base: '1.2rem', sm: '1.2rem' }} />
                    </HStack>
                </Flex>
            </Box>
            {isActive ? (
                <Flex
                    direction="column"
                    position="fixed"
                    top={mobileMenuPosition}
                    left="0"
                    right="0"
                    bottom="0"
                    overflow="auto"
                    bg="white"
                    p="30px"
                >
                    <LevelOneMobileMenu menuData={menuData} thisPath={thisPath} />
                    <Box as="div" margin="auto auto 0 auto">
                        <LanguageForm color="brand" />
                    </Box>
                </Flex>
            ) : null}
        </>
    );
};

export default HeaderMobile;
