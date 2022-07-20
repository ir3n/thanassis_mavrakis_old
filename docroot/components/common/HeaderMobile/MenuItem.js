import { Link, Image } from '@chakra-ui/react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';

const MenuItem = ({ title, external, url, submenu, renderSubmenu }, index) => {
    const router = useRouter();

    return submenu ? (
        <Link
            onClick={renderSubmenu}
            position="relative"
            paddingRight={'5px'}
            marginBottom={'25px'}
            textStyle="caption"
            textTransform="uppercase"
            color="brand"
            display="flex"
            align="center"
            justifyContent="space-between"
        >
            {title}

            <Image src="/assets/mobile-menu-arrow.svg" w="5px" alt="Previous" />
        </Link>
    ) : (
        <NextLink href={url || '#'} passHref prefetch={false}>
            <Link
                target={external ? '_blank' : '_self'}
                position="relative"
                paddingRight={'5px'}
                marginBottom={'25px'}
                textStyle="caption"
                textTransform="uppercase"
                display="block"
                color="brand"
                className={url === router.pathname ? 'mobile-link-active' : ''}
            >
                {title}
            </Link>
        </NextLink>
    );
};
export default MenuItem;
