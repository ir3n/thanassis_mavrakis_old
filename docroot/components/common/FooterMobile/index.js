import { Accordion, Box, Link, Flex } from '@chakra-ui/react';
import useMenu from 'hooks/useMenu';
import Container from '../Container';
import Logo from '../Logo';
import Copyright from '../Footer/Copyright';
import useTranslation from 'next-translate/useTranslation';
import AccordionItemCustom from './AccordionItemCustom';
import SocialBlock from '../Footer/SocialBlock';
import FooterInfo from '../Footer/FooterInfo';
import FooterIcons from '../Footer/FooterIcons';
import Credits from '../Footer/Credits';
import NextLink from 'next/link';

const FooterMobile = () => {
    const { menuData: footerData } = useMenu('footer');
    const { menuData: legalMenu } = useMenu('legal');
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
                        align="center"
                    >
                        <Copyright />
                        <Flex direction={{ base: 'column', xs: 'row' }}>
                            {legalMenu?.map(({ title, cleanUrl }, index) => (
                                <Box ml="7px" key={`legal-menu-${index}`}>
                                    <NextLink href={cleanUrl} prefetch={false} passHref>
                                        <Link pos="relative" textStyle="caption" color="white" fontWeight="300">
                                            {title}
                                        </Link>
                                    </NextLink>
                                </Box>
                            ))}
                        </Flex>
                    </Flex>
                    <Credits />
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
