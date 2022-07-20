import { useState } from 'react';
import { Box } from '@chakra-ui/react';
import NextLevelMobileMenuHeader from './NextLevelMobileMenuHeader';
import NextLevelMobileMenuItem from './NextLevelMobileMenuItem';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';

const NextLevelMobileMenu = ({ menuData, backLevel }) => {
    const router = useRouter();
    const [nextMenu, setNextMenu] = useState(null);

    return nextMenu ? (
        <NextLevelMobileMenu menuData={nextMenu} backLevel={() => setNextMenu(null)} />
    ) : (
        <Box as={'div'}>
            <NextLevelMobileMenuHeader menuData={menuData} backLevel={backLevel} />
            <NextLevelMobileMenuItem menuData={menuData} setNextMenu={setNextMenu} />
        </Box>
    );
};
export default NextLevelMobileMenu;
