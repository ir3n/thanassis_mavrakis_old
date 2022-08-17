import { Box, Flex, HStack } from '@chakra-ui/react';
import Container from '../Container';
import { useState, useEffect } from 'react';
import Logo from '../Logo';
import UserNav from './UserNav';
import GlobalSearch from '../GlobalSearch';
import WishListIndicator from '../WishListIndicator';
import LanguageForm from './LanguageForm';
import useTranslation from 'next-translate/useTranslation';

const Header = () => {
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const onScroll = () => setOffset(window.pageYOffset);
        // clean up code
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const { t } = useTranslation('header');

    return (
        <>
            <Box as="header" id="mainHeader" background="brand">
                <Container maxW="1300px" p={offset === 0 ? '17px 10px' : '10px'} transition=".4s" pos="relative">
                    <Flex justify="end" w="full">
                        <Box pos="absolute" top="0" left="0" zIndex="tooltip">
                            <Box transition=".4s" transform={offset === 0 ? 'scale(1)' : 'scale(0.75)'}>
                                <Logo />
                            </Box>
                        </Box>
                        <HStack spacing="15px">
                            <GlobalSearch />
                            <UserNav />
                            <WishListIndicator />
                            <LanguageForm color="white" />
                        </HStack>
                    </Flex>
                </Container>
            </Box>
        </>
    );
};

export default Header;
