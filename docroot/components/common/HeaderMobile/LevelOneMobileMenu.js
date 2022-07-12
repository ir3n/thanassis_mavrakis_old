import { useState, useEffect } from 'react';
import { Link, Box, Button, Text } from '@chakra-ui/react';
import MenuItem from './MenuItem';
import LevelTwoMobileMenu from './LevelTwoMobileMenu';
import Container from '../Container';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';

const LevelOneMobileMenu = ({ menuData, customHeight, thisPath }) => {
    const { t } = useTranslation('header');
    const [secondMenu, setSecondMenu] = useState(null);
    const router = useRouter();

    return (
        <>
            {!secondMenu ? (
                <Box>
                    {menuData?.map(({ title, submenu, entity_id, external, cleanUrl, relative }, index) => {
                        return (
                            <MenuItem
                                title={title}
                                external={external}
                                url={cleanUrl}
                                thisPath={thisPath}
                                entity_id={entity_id}
                                key={`lvl1-exp-${index}`}
                                submenu={submenu ? true : false}
                                renderSubmenu={() => {
                                    setSecondMenu({ submenu: submenu, title: title, relative: relative });
                                }}
                            />
                        );
                    })}
                </Box>
            ) : (
                <LevelTwoMobileMenu
                    menuData={secondMenu}
                    thisPath={thisPath}
                    backToLevelOne={() => setSecondMenu(null)}
                />
            )}
        </>
    );
};
export default LevelOneMobileMenu;
