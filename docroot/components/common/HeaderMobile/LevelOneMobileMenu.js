import { Box, Text } from '@chakra-ui/react';
import useTranslation from 'next-translate/useTranslation';
import MenuItem from './MenuItem';
import useMenu from 'hooks/useMenu';
import { useState } from 'react';
import LevelTwoMobileMenu from './LevelTwoMobileMenu';
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from '@chakra-ui/react';
import CloseIcon from '../../../public/assets/exitbutton-light.svg';
import MenuSeparator from '../Header/MenuSeparator';

const LevelOneMobileMenu = ({ onClose }) => {
    const { t } = useTranslation('common');
    const { menuData, isLoading } = useMenu('main');
    const [secondMenu, setSecondMenu] = useState(null);

    return (
        <Box zIndex={'1000'} className={'test'}>
            <Box
                position={'relative'}
                // w={{ sm: '100vw', md: '50vw', lg: '50vw' }}
                w="100%"
                left={'0'}
                overflowX={'hidden'}
                overflowY={'hidden'}
                zIndex={'1001'}
                backgroundColor="white"
            >
                <Box overflowX="hidden" overflowY="hidden" className="scrollAreaContainer">
                    <Box
                        as={'div'}
                        className={'level-generic one'}
                        backgroundColor={'white'}
                        d={'flex'}
                        flexDir={'column'}
                    >
                        {menuData?.map(
                            ({ title, submenu, entity_id, relative, external, cleanUrl, ...menuItemProps }, index) => {
                                return (
                                    <>
                                        <Accordion allowMultiple>
                                            <AccordionItem>
                                                <AccordionButton padding="0px">
                                                    <Box flex="1" textAlign="left">
                                                        <MenuItem
                                                            title={title}
                                                            external={external}
                                                            mainMenu={true}
                                                            pl={'18px'}
                                                            ml={'34px'}
                                                            url={cleanUrl}
                                                            entity_id={entity_id}
                                                            key={`menuItem-${index}`}
                                                            submenu={!!submenu}
                                                            renderSubmenu={() => {
                                                                setSecondMenu({
                                                                    submenu: submenu,
                                                                    title: title,
                                                                    relative: relative
                                                                });
                                                            }}
                                                        />
                                                    </Box>
                                                </AccordionButton>
                                                <AccordionPanel padding={'0px'}>
                                                    <LevelTwoMobileMenu
                                                        menuData={secondMenu}
                                                        backToLevelOne={() => setSecondMenu(null)}
                                                    />
                                                </AccordionPanel>
                                            </AccordionItem>
                                        </Accordion>
                                    </>
                                );
                            }
                        )}
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default LevelOneMobileMenu;
