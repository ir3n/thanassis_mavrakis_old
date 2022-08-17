import { Link, Image } from '@chakra-ui/react';
import NextLink from 'next/link';

const Logo = ({ props, scale }) => {
    return (
        <>
            <NextLink href="/" passHref prefetch={false}>
                <Link {...props} display="block">
                    <Image
                        src="/assets/logo.svg"
                        width={{ base: '31px', md: '55px' }}
                        alt="DUST+CREAM"
                        transition=".5s"
                        transform="scale"
                    />
                </Link>
            </NextLink>
        </>
    );
};

export default Logo;
