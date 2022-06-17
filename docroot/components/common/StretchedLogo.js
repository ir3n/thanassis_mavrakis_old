import { Link, Image } from '@chakra-ui/react';
import NextLink from 'next/link';

const StretchedLogo = (props) => {
    return (
        <>
            <NextLink href={'/'} passHref prefetch={false}>
                <Link
                    {...props}
                    mt={'-20px'}
                    display={'block'}
                    width={{ base: '225px', sm: '225px', md: '225px' }}
                    height={{ base: '15px', sm: '15px', md: '15px' }}
                    justifyContent={'center'}
                    boxShadow={'none !important'}
                    color="white"
                >
                    <Image
                        src={'/assets/stretchedlogo.svg'}
                        width={{ base: '225px', sm: '225px', md: '225px' }}
                        height={{ base: '15px', sm: '15px', md: '15px' }}
                        alt={'BENAKISHOP'}
                    />
                </Link>
            </NextLink>
        </>
    );
};

export default StretchedLogo;
