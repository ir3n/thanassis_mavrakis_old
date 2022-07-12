import { useEffect, useState, memo } from 'react';
import { useBreakpointValue, Box } from '@chakra-ui/react';
import Header from 'components/common/Header';
import HeaderMobile from 'components/common/HeaderMobile';
import FooterMobile from 'components/common/FooterMobile';
import Menu from 'components/common/Menu';
import Footer from 'components/common/Footer';

const MainLayout = ({ children }) => {
    const [scrolled, setScrolled] = useState(false);

    const handleScroll = () => {
        const headerTopMenu = document.getElementById('mainHeader');

        const headerBottomOnScroll = headerTopMenu?.getBoundingClientRect();

        if (headerBottomOnScroll === 0) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const header = useBreakpointValue({
        base: <HeaderMobile scrolled={!scrolled} />,
        xl: <Header scrolled={!scrolled} />
    });

    const menu = useBreakpointValue({
        base: '',
        xl: <Menu scrolled={!scrolled} />
    });

    const footer = useBreakpointValue({
        base: <FooterMobile />,
        xl: <Footer />
    });

    return (
        <>
            <Box position={'sticky'} color="white" zIndex={'99'} top={'0'} bg="white">
                {header}
                {menu}
            </Box>
            <Box as={'main'}>{children}</Box>

            {footer}
        </>
    );
};

export default memo(MainLayout);
