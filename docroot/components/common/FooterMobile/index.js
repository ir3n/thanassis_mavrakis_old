import { useState } from 'react';
import { Box, Link, Image } from '@chakra-ui/react';
import useMenu from 'hooks/useMenu';
import { Accordion, AccordionItem, AccordionButton, AccordionPanel } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import NextLink from 'next/link';
import Copyright from '../Footer/Copyright';
import useTranslation from 'next-translate/useTranslation';
import AccordionItemCustom from './AccordionItemCustom';
import SocialBlock from '../Footer/SocialBlock';

const FooterMobile = () => {
    const { menuData: footerData } = useMenu('footer');
    const { t } = useTranslation('footer');

    return (
        <Box as={'footer'} w={'100%'} backgroundColor={'footer.grey'} overflow={'hidden'}>
            <Box padding={'40px 15px 0 15px'}>
                <NextLink href={'/'} passHref prefetch={false}>
                    <Link mr={'18px'} pos="relative" _hover={{ textDecoration: 'none' }}>
                        <Image src={'/assets/footer_logo.svg'} width={'auto'} height={'auto'} alt={'Benaki Shop'} />
                    </Link>
                </NextLink>
            </Box>
            <Accordion allowToggle m={'0 15px'}>
                <Box d={'flex'} flexDir={'column'} border={'none'}>
                    {footerData?.map(({ title, submenu }, index) => (
                        <AccordionItemCustom
                            title={title}
                            submenu={submenu}
                            index={index}
                            key={`footerMobile-${index}`}
                        />
                    ))}
                </Box>
            </Accordion>

            <Box className="border-full-container" pos={'relative'} margin={'25px 15px 0 15px'}>
                <Box className="gridDesktoo">
                    <SocialBlock />
                </Box>
            </Box>

            <Box margin={'0 15px'}>
                <Copyright />
            </Box>
        </Box>
    );
};

export default FooterMobile;
