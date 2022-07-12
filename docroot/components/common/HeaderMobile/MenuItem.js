import { Link, Image } from '@chakra-ui/react';
import NextLink from 'next/link';

const MenuItem = ({ title, external, entity_id, url, submenu, renderSubmenu }, index) => {
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
        <NextLink href={url || '#'} key={index}>
            <Link
                target={external ? '_blank' : '_self'}
                position="relative"
                paddingRight={'5px'}
                marginBottom={'25px'}
                textStyle="caption"
                textTransform="uppercase"
                display="block"
                color="brand"
            >
                {title}
            </Link>
        </NextLink>
    );
};
export default MenuItem;
