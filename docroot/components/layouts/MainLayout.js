import { memo } from 'react';
import { useBreakpointValue, Box } from '@chakra-ui/react';
import Header from 'components/common/Header';
import HeaderMobile from 'components/common/HeaderMobile';
import FooterMobile from 'components/common/FooterMobile';
import Menu from 'components/common/Menu';
import Stripe from 'components/common/Stripe';
import Newsletter from 'components/common/Newsletter';
import Usp from 'components/common/Usp';
import Footer from 'components/common/Footer';
import useGlobalSections from 'hooks/useGlobalSections';
import { useRouter } from 'next/router';

const MainLayout = ({ children }) => {
    const router = useRouter();

    const { globalSections } = useGlobalSections(router.locale);

    const header = useBreakpointValue({
        base: <HeaderMobile />,
        xl: <Header />
    });

    const menu = useBreakpointValue({
        base: '',
        xl: <Menu />
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
            <Box as={'main'}>
                {globalSections?.map(
                    (section, index) =>
                        section?.type == 'stripe_with_text' && (
                            <Stripe color={section?.color} text={section?.text} key={`${section?.type}-${index}`} />
                        )
                )}
                {children}
            </Box>

            <Newsletter />

            {globalSections?.map(
                (section, index) =>
                    section?.type == 'usp' && <Usp items={section?.items} key={`${section?.type}-${index}`} />
            )}

            {footer}
        </>
    );
};

export default memo(MainLayout);
