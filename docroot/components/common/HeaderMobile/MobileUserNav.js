import { Box, Link, Text } from '@chakra-ui/react';

import WishListIndicator from '../WishListIndicator';
import NextLink from 'next/link';
import { InfoIcon } from '@chakra-ui/icons';
import LanguageForm from '../Header/LanguageForm';
import User from '../../../public/assets/user-outline.svg';

const MobileUserNav = () => {
    return (
        <>
            <Box
                as={'nav'}
                className="cart-box-parent-mobile"
                flex={1}
                display={'flex'}
                justifyContent={'flex-end'}
                alignItems={'center'}
                pos="relative"
            >
                <NextLink href={'/user'} passHref prefetch={false}>
                    <User />
                </NextLink>
            </Box>
        </>
    );
};

export default MobileUserNav;
