import { Link, Image } from '@chakra-ui/react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';

const NextLevelMobileMenuItem = ({ menuData, setNextMenu }) => {
    const router = useRouter();

    return menuData?.submenu?.map(({ title, submenu, cleanUrl, relative }, index) =>
        submenu && submenu.length ? (
            <Link
                onClick={() => setNextMenu({ submenu: submenu, title: title, relative: relative })}
                position="relative"
                className="menu-item"
                key={`expanded-link-${index}`}
                marginBottom={'25px'}
                textStyle="caption"
                color="brand"
                textTransform="uppercase"
                display="flex"
                align="center"
                justifyContent="space-between"
            >
                {title}
                <Image src="/assets/mobile-menu-arrow.svg" w="5px" alt="Previous" />
            </Link>
        ) : (
            <NextLink href={cleanUrl || '#'} key={`inner-link-${index}`} passHref prefetch={false}>
                <Link
                    display="block"
                    position="relative"
                    mb="25px"
                    textStyle="caption"
                    textTransform="uppercase"
                    color="brand"
                >
                    {title}
                </Link>
            </NextLink>
        )
    );
};
export default NextLevelMobileMenuItem;
