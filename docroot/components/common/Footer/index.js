import { useBreakpointValue, Box, Link, Flex, ListItem, UnorderedList, Grid, GridItem } from '@chakra-ui/react';
import Container from '../Container';
import Logo from '../Logo';
import useMenu from 'hooks/useMenu';
import NextLink from 'next/link';
import Copyright from './Copyright';
import SocialBlock from './SocialBlock';
import FooterInfo from './FooterInfo';
import FooterIcons from './FooterIcons';

const Footer = () => {
    const { menuData: footerData } = useMenu('footer');

    return (
        <Box as="footer" w="full" id="footer">
            <Box as="div" bg="brand">
                <Container>
                    <Grid
                        p="50px 0 35px 0"
                        borderBottom="1px"
                        borderBottomColor="darkGrey"
                        templateColumns="10% 90%"
                        w="full"
                    >
                        <GridItem>
                            <Logo />
                        </GridItem>
                        <GridItem>
                            <Grid
                                templateColumns={{ base: 'repeat(3, 1fr)', lg: 'repeat(4, 1fr)' }}
                                gap={6}
                                color={'black'}
                            >
                                {footerData?.map(({ title, submenu }, index) => (
                                    <GridItem key={`footerData-${index}`}>
                                        <Box as="h4" pb="15px" textStyle="sm" key={`footer-${index}`} color="grey">
                                            {title}
                                        </Box>
                                        <UnorderedList ml="0">
                                            {submenu?.map(({ title }, index) => (
                                                <ListItem listStyleType="none" key={`${title}${index}`}>
                                                    <NextLink href={'/'} passHref prefetch={false}>
                                                        <Link
                                                            pos="relative"
                                                            textStyle="sm"
                                                            color="lightGrey"
                                                            mb="10px"
                                                            display="inline-block"
                                                        >
                                                            {title}
                                                        </Link>
                                                    </NextLink>
                                                </ListItem>
                                            ))}
                                        </UnorderedList>
                                    </GridItem>
                                ))}
                                <GridItem display={{ base: 'none', lg: 'grid' }}>
                                    <SocialBlock />
                                    <FooterInfo />
                                </GridItem>
                            </Grid>
                        </GridItem>
                    </Grid>
                    <Flex justifyContent="space-between" py="30px">
                        <Copyright />
                        <Box>Render legal menu here</Box>
                    </Flex>
                </Container>
            </Box>
            <Box as="div">
                <Container>
                    <Box p="20px 0 50px 0">
                        <FooterIcons />
                    </Box>
                </Container>
            </Box>
        </Box>
    );
};

export default Footer;
