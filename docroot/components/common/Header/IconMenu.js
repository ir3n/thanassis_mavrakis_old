import { memo } from 'react';
import NextLink from 'next/link';
import { Box, Flex, Link } from '@chakra-ui/react';
import MiniCart from '../MiniCart';
import Login from '../Login';
import useTranslation from 'next-translate/useTranslation';

const IconMenu = ({ offset }) => {
    const { t } = useTranslation('header');

    return (
        <Flex position="relative" alignItems="center">
            <Login offset={offset} />
            <MiniCart />
        </Flex>
    );
};

export default memo(IconMenu);
