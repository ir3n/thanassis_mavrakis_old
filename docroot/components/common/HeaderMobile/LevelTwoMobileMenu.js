import { useState } from 'react';
import { Link, Box, Image } from '@chakra-ui/react';
import NextLink from 'next/link';
import MenuItem from './MenuItem';

const LevelTwoMobileMenu = ({ menuData, backToLevelOne }) => {
    const [thirdMenu, setThirdMenu] = useState(null);

    return (
        <>
            <Box overflowY="hidden" className="scrollAreaContainer">
                <Box as={'div'} className={'level-generic one'} backgroundColor={'white'}>
                    <Box display={'flex'} flexDir={'column'}>
                        <Box display={'flex'} flexDirection={'column'}>
                            {menuData?.submenu?.map(({ title, submenu, cleanUrl, relative, external }, index) =>
                                submenu && submenu.length > 0 ? (
                                    <MenuItem
                                        title={title}
                                        external={external}
                                        key={`menuItem-${index}`}
                                        submenu={submenu ? true : false}
                                        renderSubmenu={() => {}}
                                        mainMenu={false}
                                        ml={'18px'}
                                        pl={'0px'}
                                    />
                                ) : (
                                    <Box>
                                        <NextLink href={cleanUrl || '#'} key={index} passHref>
                                            <MenuItem
                                                title={title}
                                                submenu={false}
                                                key={`menuItem-${index}`}
                                                ml={'18px'}
                                                mainMenu={false}
                                                pl={'0px'}
                                            />
                                        </NextLink>
                                    </Box>
                                )
                            )}
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    );
};
export default LevelTwoMobileMenu;
