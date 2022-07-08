import { useState, useEffect, memo } from 'react';
import { useRouter } from 'next/router';
import { Box, Link, useDisclosure, Flex, useOutsideClick } from '@chakra-ui/react';

import DropdownMenu from './DropdownMenu';
import Underline from './Underline';
import Overlay from '../Overlay';
import NextLink from 'next/link';
import useMenu from 'hooks/useMenu';
import { useRef } from 'react';
import FadeIn from 'components/transitions/FadeIn';

const Menu = () => {
    const router = useRouter();
    const ref = useRef();
    const { isOpen, onClose } = useDisclosure();

    const [selectedMenu, setSelectedMenu] = useState(null);
    const { menuData, isLoading } = useMenu('main');

    const handleOnClose = () => {
        setSelectedMenu(null);
        onClose();
    };

    useOutsideClick({
        ref: ref,
        handler: () => setSelectedMenu(null)
    });

    useEffect(() => {
        setSelectedMenu(null);
    }, [router.asPath]);

    const thisPath = router.asPath.slice(router.asPath.lastIndexOf('/') + 1);

    return (
        <>
            <Overlay display={selectedMenu ? 'block' : 'none'} />

            <Box
                id="mainMenu"
                as="nav"
                height="auto"
                background="white"
                position="relative"
                p="13px 0"
                zIndex="toast"
                ref={ref}
            >
                <Flex maxW="1250px" pl="60px" margin="auto" justifyContent="space-between" width="full">
                    {menuData?.map(
                        ({ title, submenu, entity_id, relative, external, cleanUrl, ...menuItemProps }, index) => (
                            <Box
                                color="brand"
                                as="div"
                                className="menu_items"
                                key={`menuItem-${index}`}
                                textTransform="uppercase"
                                pos="relative"
                                align="center"
                            >
                                {submenu ? (
                                    <Link
                                        pos="relative"
                                        textStyle="caption"
                                        p="10px 0"
                                        m="0 7px"
                                        display="block"
                                        textTransform="uppercase"
                                        className={selectedMenu?.cleanUrl === cleanUrl ? 'active' : ''}
                                        onClick={() => {
                                            setSelectedMenu(
                                                selectedMenu?.title === title
                                                    ? null
                                                    : {
                                                          title,
                                                          submenu,
                                                          relative,
                                                          external,
                                                          cleanUrl,
                                                          ...menuItemProps
                                                      }
                                            );
                                        }}
                                    >
                                        {title}
                                        <Underline />
                                    </Link>
                                ) : (
                                    <NextLink href={cleanUrl} passHref prefetch={false}>
                                        <Link
                                            m="0 7px"
                                            target={external ? '_blank' : '_self'}
                                            onClick={handleOnClose}
                                            pos="relative"
                                            zIndex={isOpen ? 9999 : 9}
                                            color="brand"
                                            textStyle="caption"
                                            p="10px 0"
                                            display="block"
                                            textTransform="uppercase"
                                            className={selectedMenu?.cleanUrl === cleanUrl ? 'active' : ''}
                                        >
                                            {title}

                                            <Underline />
                                        </Link>
                                    </NextLink>
                                )}
                            </Box>
                        )
                    )}
                </Flex>

                {selectedMenu?.submenu ? (
                    <FadeIn>
                        <DropdownMenu selectedMenu={selectedMenu} onClose={handleOnClose} thisPath={thisPath} />
                    </FadeIn>
                ) : null}
            </Box>
        </>
    );
};

export default memo(Menu);
