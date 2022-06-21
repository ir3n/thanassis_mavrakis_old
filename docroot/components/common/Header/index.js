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
            <Box as={'header'} id="mainHeader" background={'white'} overflow={'hidden'}>
                <Container py={'8px'}>
                    <Box d="flex" w="100%" justifyContent={'flex-end'}>
                        <Text textStyle={'caption'} mr="40px" whiteSpace={'nowrap'} textTransform="uppercase">
                            {t('member')}
                        </Text>

                        <LanguageForm />
                    </Box>
                </Container>
                <Container className={'borderTopBottom'}>
                    <Box
                        py={iconMenuShow && offset === 0 ? '14px' : '4px'}
                        transition={'.6s'}
                        d="flex"
                        w="100%"
                        justifyContent={'space-between'}
                        alignItems={'center'}
                    >
                        <GlobalSearch />
                        <Box>
                            {iconMenuShow && offset === 0 ? <Logo scale={'scale(1)'} /> : <Logo scale={'scale(.7)'} />}
                        </Box>
                        <Box marginBottom={iconMenuShow && offset === 0 ? '0' : '-10px'} transition={'.6s'}>
                            <UserNav iconMenuShow={iconMenuShow} />
                        </Box>
                    </Box>
                </Container>
            </Box>
        </>
    );
};

export default Header;
