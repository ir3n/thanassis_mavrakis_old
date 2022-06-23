import { memo } from 'react';
import NextLink from 'next/link';
import { Box, Text, Link } from '@chakra-ui/react';
import MiniCart from '../MiniCart';
import User from '../../../public/assets/user-outline.svg';
import useTranslation from 'next-translate/useTranslation';

const IconMenu = () => {
    const { t } = useTranslation('header');

    return (
        <Box d="flex" className="icons cart-box-parent" pos="relative" alignItems={'center'} z>
            <NextLink href={'/account/information'} prefetch={false} passHref>
                <Link ml="16px" cursor={'pointer'}>
                    <User />
                </Link>
            </NextLink>
            <Box>
                <MiniCart />
            </Box>
        </Box>
    );
};

export default memo(IconMenu);
