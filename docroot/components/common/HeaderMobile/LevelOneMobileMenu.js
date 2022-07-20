import { useState } from 'react';
import { Box } from '@chakra-ui/react';
import MenuItem from './MenuItem';
import NextLevelMobileMenu from './NextLevelMobileMenu';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';

const LevelOneMobileMenu = ({ menuData, thisPath }) => {
    const { t } = useTranslation('header');
    const [nextMenu, setNextMenu] = useState(null);
    const router = useRouter();

    return (
        <>
            {!nextMenu ? (
                <Box>
                    {menuData?.map(({ title, submenu, entity_id, external, cleanUrl, relative }, index) => {
                        return (
                            <MenuItem
                                title={title}
                                external={external}
                                url={cleanUrl}
                                thisPath={thisPath}
                                entity_id={entity_id}
                                key={`level-1-link-${index}`}
                                submenu={submenu}
                                renderSubmenu={() => {
                                    setNextMenu({ submenu: submenu, title: title, relative: relative });
                                }}
                            />
                        );
                    })}
                </Box>
            ) : (
                <NextLevelMobileMenu menuData={nextMenu} thisPath={thisPath} backLevel={() => setNextMenu(null)} />
            )}
        </>
    );
};
export default LevelOneMobileMenu;
