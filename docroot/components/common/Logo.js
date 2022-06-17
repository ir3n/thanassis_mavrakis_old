import { Link, Image } from '@chakra-ui/react';
import NextLink from 'next/link';

const Logo = (props) => {
    return (
        <>
            <NextLink href={'/'} passHref prefetch={false}>
                <Link
                    {...props}
                    width={{ base: '172px', sm: '172px', md: '172px' }}
                    display={'flex'}
                    justifyContent={'center'}
                    boxShadow={'none !important'}
                    color="white"
                >
                    <Image
                        src={'/assets/benakilogo.svg'}
                        width={{ base: '172px', sm: '172px', md: '172px' }}
                        height={{ base: '32px', sm: '32px', md: '32px' }}
                        alt={'BENAKISHOP'}
                    />
                </Link>
            </NextLink>
        </>
    );
};

export default Logo;
