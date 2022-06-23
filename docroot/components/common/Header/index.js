import { Box, Flex, Container, HStack } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import Logo from '../Logo';
import UserNav from './UserNav';
import GlobalSearch from '../GlobalSearch';
import LanguageForm from './LanguageForm';
import useTranslation from 'next-translate/useTranslation';

const Header = ({ iconMenuShow }) => {
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
            <Box as={'header'} id="mainHeader" background={'brand'}>
                <Container maxW={1300} p={4} pos="relative">
                    <Flex justify="end" w="full">
                        <Box pos="absolute" top="0" left="0" zIndex={'sticky'}>
                            <Logo />
                        </Box>
                        <HStack spacing="15px">
                            <GlobalSearch />
                            <UserNav iconMenuShow={iconMenuShow} />
                            <LanguageForm />
                        </HStack>
                    </Flex>
                </Container>
            </Box>
        </>
    );
};

export default Header;
