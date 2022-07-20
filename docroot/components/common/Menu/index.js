import { useState, useEffect, memo } from 'react';
import { useRouter } from 'next/router';
import { Box, Link, Flex, useOutsideClick } from '@chakra-ui/react';
import DropdownMenu from './DropdownMenu';

import MenuItem from './MenuItem';
import Overlay from '../Overlay';
import useMenu from 'hooks/useMenu';
import { useRef } from 'react';
import FadeIn from 'components/transitions/FadeIn';

const Menu = () => {
    const router = useRouter();
    const ref = useRef();

    const [selectedMenu, setSelectedMenu] = useState(null);
    const { menuData, isLoading } = useMenu('main');

    useOutsideClick({
        ref: ref,
        handler: () => setSelectedMenu(null)
    });

    useEffect(() => {
        setSelectedMenu(null);
    }, [router.asPath]);

    const handleOnClose = () => {
        setSelectedMenu(null);
        onClose();
    };

    const thisPath = router.asPath.substr(router.asPath.lastIndexOf('/') + 1);

    return (
        <>
            <FadeIn>
                <Overlay display={selectedMenu ? 'block' : 'none'} />
            </FadeIn>

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
                    {menuData?.map(({ title, submenu, relative, external, cleanUrl }, index) => (
                        <MenuItem
                            key={`menuItem-${index}`}
                            selectedMenu={selectedMenu}
                            setSelectedMenu={setSelectedMenu}
                            title={title}
                            submenu={submenu}
                            relative={relative}
                            external={external}
                            cleanUrl={cleanUrl}
                            handleClose={handleOnClose}
                        />
                    ))}
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
