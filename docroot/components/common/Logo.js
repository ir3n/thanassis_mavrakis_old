import { Link, Image } from '@chakra-ui/react';
import NextLink from 'next/link';

const Logo = ({ props }) => {
    return (
        <>
            <NextLink href={'/'} passHref prefetch={false}>
                <Link {...props} display={'block'}>
                    <Image src={'/assets/logo.svg'} width={{ base: '30px', md: '47px' }} alt={'DUST+CREAM'} />
                </Link>
            </NextLink>
        </>
    );
};

export default Logo;
