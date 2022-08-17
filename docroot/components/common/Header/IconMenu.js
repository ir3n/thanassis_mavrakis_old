import { memo } from 'react';
import NextLink from 'next/link';
import { Box, Flex, Link } from '@chakra-ui/react';
import MiniCart from '../MiniCart';
import User from '../../../public/assets/user-outline.svg';
import useTranslation from 'next-translate/useTranslation';

const IconMenu = () => {
    const { t } = useTranslation('header');

    return (
        <Flex position="relative" alignItems="center">
            <NextLink href="/account/information" prefetch={false} passHref>
                <Link>
                    <User />
                </Link>
            </NextLink>
            <Box>
                <MiniCart />
            </Box>
        </Flex>
    );
};

export default memo(IconMenu);
