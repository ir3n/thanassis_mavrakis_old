import { Box, Flex, HStack } from '@chakra-ui/react';
import Container from '../Container';
import { useState, useEffect } from 'react';
import Logo from '../Logo';
import UserNav from './UserNav';
import GlobalSearch from '../GlobalSearch';
import WishListIndicator from '../WishListIndicator';
import LanguageForm from './LanguageForm';
import useTranslation from 'next-translate/useTranslation';

const Header = ({ iconMenuShow, fullWidth }) => {
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
                <Container
                    fullWidth
                    maxW="1300px"
                    p={iconMenuShow && offset === 0 ? '17px 10px' : '10px'}
                    transition={'.4s'}
                    pos="relative"
                >
                    <Flex justify="end" w="full">
                        <Box pos="absolute" top="0" left="0" zIndex={'sticky'}>
                            {iconMenuShow && offset === 0 ? <Logo scale={'scale(1)'} /> : <Logo scale={'scale(.75)'} />}
                        </Box>
                        <HStack spacing="15px">
                            <GlobalSearch />
                            <UserNav iconMenuShow={iconMenuShow} />
                            <WishListIndicator />
                            <LanguageForm />
                        </HStack>
                    </Flex>
                </Container>
            </Box>
        </>
    );
};

export default Header;
