import { Box, Text } from '@chakra-ui/react';
import MenuSeparator from 'components/common/Header/MenuSeparator';
import { useState, useEffect } from 'react';
import Container from '../Container';
import Logo from '../Logo';
import StretchedLogo from '../StretchedLogo';
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
            <Box as={'header'} id="mainHeader" background={'white'}>
                <Container>
                    <Box d="flex" w="100%" justifyContent={'flex-end'}>
                        <Text textStyle={'caption'} mr="10px" whiteSpace={'nowrap'} textTransform="capitalize">
                            {t('member')}
                        </Text>

                        <LanguageForm />
                    </Box>
                </Container>

                <MenuSeparator />

                <Container>
                    <Box d="flex" w="100%" justifyContent={'space-between'} alignItems={'flex-end'}>
                        <GlobalSearch />
                        <Box>{iconMenuShow && offset === 0 ? <Logo /> : <StretchedLogo />}</Box>
                        <UserNav iconMenuShow={iconMenuShow} />
                    </Box>
                </Container>
                <MenuSeparator mb="8px" mt="16px" />
            </Box>
        </>
    );
};

export default Header;
