import { Box, Link, useDisclosure } from '@chakra-ui/react';
import NextLink from 'next/link';
import Underline from './Underline';
import { useRouter } from 'next/router';
import { useState } from 'react';

const MenuItem = (
    { selectedMenu, setSelectedMenu, title, submenu, relative, external, cleanUrl, handleClose },
    index
) => {
    const [hover, setHover] = useState(false);
    const { isOpen, onClose } = useDisclosure();
    const router = useRouter();

    return (
        <Box color="brand" as="div" textTransform="uppercase" pos="relative" align="center">
            {submenu ? (
                <Link
                    pos="relative"
                    textStyle="caption"
                    p="10px 0"
                    m="0 7px"
                    display="block"
                    textTransform="uppercase"
                    fontWeight={selectedMenu?.cleanUrl === cleanUrl ? 'bold' : 'normal'}
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                    onClick={() => {
                        setSelectedMenu(
                            selectedMenu?.title === title
                                ? null
                                : {
                                      title,
                                      submenu,
                                      relative,
                                      external,
                                      cleanUrl
                                  }
                        );
                    }}
                >
                    {title}
                    <Underline active={selectedMenu?.cleanUrl === cleanUrl || hover} />
                </Link>
            ) : (
                <NextLink href={cleanUrl}>
                    <Link
                        m="0 7px"
                        target={external ? '_blank' : '_self'}
                        onClick={onClose}
                        pos="relative"
                        zIndex={isOpen ? 9999 : 9}
                        color="brand"
                        textStyle="caption"
                        p="10px 0"
                        display="block"
                        textTransform="uppercase"
                        fontWeight={cleanUrl === router.asPath ? 'bold' : 'normal'}
                        onMouseEnter={() => setHover(true)}
                        onMouseLeave={() => setHover(false)}
                    >
                        {title}

                        <Underline active={cleanUrl === router.asPath || hover} />
                    </Link>
                </NextLink>
            )}
        </Box>
    );
};
export default MenuItem;
