import { Box, Link } from '@chakra-ui/react';

import NextLink from 'next/link';
import User from '../../../public/assets/user-outline.svg';

const MobileUserNav = () => {
    return (
        <>
            <Box as="nav" display="flex" justifyContent="end" alignItems="center" position="relative">
                <NextLink href="/user" passHref prefetch={false}>
                    <Link>
                        <User />
                    </Link>
                </NextLink>
            </Box>
        </>
    );
};

export default MobileUserNav;
