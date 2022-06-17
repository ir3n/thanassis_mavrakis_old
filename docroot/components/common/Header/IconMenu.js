import { memo } from 'react';
import NextLink from 'next/link';
import { Link, Box, Text } from '@chakra-ui/react';
import MiniCart from '../MiniCart';
import WishListIndicator from '../WishListIndicator';
import User from '../../../public/assets/user-outline.svg';
import Cart from '../../../public/assets/cart-outline.svg';
import useTranslation from 'next-translate/useTranslation';

const IconMenu = ({ theColor }) => {
    const { t } = useTranslation('header');

    return (
        <Box d="flex" className="icons cart-box-parent" pos="relative" alignItems={'center'}>
            <NextLink href={'info'} passHref prefetch={false}>
                <Text textStyle={'sm'}>{t('info')}</Text>
            </NextLink>
            <NextLink href={'/user'} passHref prefetch={false}>
                <Box ml="16px" cursor={'pointer'}>
                    <User />
                </Box>
            </NextLink>
            <Box>
                <MiniCart />
            </Box>
        </Box>
    );
};

export default memo(IconMenu);
