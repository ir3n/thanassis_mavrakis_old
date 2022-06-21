import { useEffect, useState, memo } from 'react';
import { useBreakpointValue, Box } from '@chakra-ui/react';
import Header from 'components/common/Header';
import HeaderMobile from 'components/common/HeaderMobile';
import FooterMobile from 'components/common/FooterMobile';
import Menu from 'components/common/Menu';
import Footer from 'components/common/Footer';
import MenuSeparator from 'components/common/Header/MenuSeparator';

const MainLayout = ({ children }) => {
    const [mainContentMenuMobile, setMainContentMenuMobile] = useState(90);
    const [screenHeight, setScreenHeight] = useState(0);
    const [menuAndFooterData, setMenuAndFooterData] = useState(null);
    useEffect(() => {
        setScreenHeight(screenHeight - window.innerHeight);
        setScreenHeight(window.innerHeight);
    }, []);

    useEffect(() => {
        // magic number?
        setMainContentMenuMobile(screenHeight - 306);
    }, [screenHeight]);

    useEffect(() => {
        setScreenHeight(window.innerHeight);
    }, []);

    const [iconMenuShow, setIconMenuShow] = useState(false);

    const handleScroll = () => {
        const headerTopMenu = document.getElementById('mainHeader');

        const headerBottomOnScroll = headerTopMenu?.getBoundingClientRect();

        if (headerBottomOnScroll === 0) {
            setIconMenuShow(true);
        } else {
            setIconMenuShow(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const header = useBreakpointValue({
        base: <HeaderMobile customHeight={mainContentMenuMobile} iconMenuShow={!iconMenuShow} size="md" />,
        lg: <HeaderMobile customHeight={mainContentMenuMobile} iconMenuShow={!iconMenuShow} size="md" />,
        xl: <HeaderMobile iconMenuShow={!iconMenuShow} />,
        xxl: <Header iconMenuShow={!iconMenuShow} />
    });

    const footer = useBreakpointValue({
        sm: <FooterMobile />,
        md: <Footer />,
        lg: <Footer />,
        xl: <Footer />
    });

    return (
        <>
            <Box
                // background={'linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 100%)'}
                position={'sticky'}
                color="black"
                zIndex={'99'}
                top={'0'}
                bg="white"
            >
                {header}
                <Menu iconMenuShow={iconMenuShow} menuAndFooterData={menuAndFooterData} />
                <MenuSeparator mb="0px" mt="0px" />
            </Box>
            {/* <Hero />*/}
            <Box as={'main'} minHeight={'calc(100vh - 100px - 385px)'}>
                {children}
            </Box>

            {footer}
        </>
    );
};

export default memo(MainLayout);
