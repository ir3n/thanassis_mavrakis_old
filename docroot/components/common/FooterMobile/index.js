import { Accordion, Box, Link, Flex } from '@chakra-ui/react';
import useMenu from 'hooks/useMenu';
import NextLink from 'next/link';
import Container from '../Container';
import Logo from '../Logo';
import Copyright from '../Footer/Copyright';
import useTranslation from 'next-translate/useTranslation';
import AccordionItemCustom from './AccordionItemCustom';
import SocialBlock from '../Footer/SocialBlock';
import FooterInfo from '../Footer/FooterInfo';
import FooterIcons from '../Footer/FooterIcons';

const FooterMobile = () => {
    const { menuData: footerData } = useMenu('footer');
    const { t } = useTranslation('footer');

    return (
        <Box as="footer" w="full" backgroundColor="brand">
            <Box as="div" bg="brand">
                <Container py="20px">
                    <Flex justify="space-between" align="center" mb="25px">
                        <Logo />
                        <SocialBlock />
                    </Flex>

                    <Accordion allowToggle m="0">
                        <Box>
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

                    <FooterInfo />

                    <Flex
                        pt="15px"
                        mt="35px"
                        justifyContent="space-between"
                        borderTopWidth="1px"
                        borderTopColor="darkGrey"
                    >
                        <Copyright />
                        <Box>Legal menu</Box>
                    </Flex>
                </Container>
            </Box>
            <Box as="div" bg="white">
                <Container>
                    <Box py="20px">
                        <FooterIcons />
                    </Box>
                </Container>
            </Box>
        </Box>
    );
};

export default FooterMobile;
