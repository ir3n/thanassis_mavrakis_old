import { Box, Link, Text } from '@chakra-ui/react';
import MiniCart from '../MiniCart';
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
                mt={'8px'}
                pos="relative"
            >
                <NextLink href={'/user'} passHref prefetch={false}>
                    <Box ml="16px">
                        <User />
                    </Box>
                </NextLink>
                <MiniCart boxSize={{ base: '1.2rem', sm: '1.2rem' }} />
            </Box>
        </>
    );
};

export default MobileUserNav;
