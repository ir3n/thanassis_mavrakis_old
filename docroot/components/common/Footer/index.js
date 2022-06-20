import { useBreakpointValue, Box, Link, Image, ListItem, UnorderedList, Grid, GridItem } from '@chakra-ui/react';
import Container from '../Container';

import useMenu from 'hooks/useMenu';
import NextLink from 'next/link';
import Copyright from './Copyright';
import SocialGridMenu from './SocialGridMenu';
import SocialGridMenuTablet from './SocialGridMenuTablet';

export default function Footer({}) {
    const { menuData: footerData } = useMenu('footer');

    const social = useBreakpointValue({
        md: <SocialGridMenuTablet />,
        lg: <SocialGridMenu />
    });

    return (
        <Box
            as={'footer'}
            w="100%"
            d="inline-block"
            color={'white'}
            backgroundColor={'footer.grey'}
            id="footer"
            overflow={'hidden'}
        >
            <Container>
                <Box paddingTop={'55px'} paddingBottom={'15px'}>
                    <NextLink href={'/'} passHref prefetch={false}>
                        <Link mr={'18px'} pos="relative" _hover={{ textDecoration: 'none' }}>
                            <Image src={'/assets/footer_logo.svg'} width={'auto'} height={'auto'} alt={'Benaki Shop'} />
                        </Link>
                    </NextLink>
                </Box>
                <Box paddingBottom={'25px'} position={'relative'} className={'border-full-container'}>
                    <Grid templateColumns={{ base: 'repeat(3, 1fr)', lg: 'repeat(4, 1fr)' }} gap={6} color={'black'}>
                        {footerData?.map(({ title, submenu }, index) => (
                            <GridItem key={`footerData-${index}`}>
                                <Box as="h4" paddingBottom="15px" textStyle={'caption'} key={`footer-${index}`}>
                                    {title}
                                </Box>
                                <UnorderedList marginLeft={'0'}>
                                    {submenu?.map(({ title }, index) => (
                                        <ListItem listStyleType={'none'} key={`${title}${index}`}>
                                            <NextLink href={'/'} passHref prefetch={false}>
                                                <Link
                                                    pos="relative"
                                                    textStyle={'caption'}
                                                    _hover={{ textDecoration: 'none' }}
                                                >
                                                    {title}
                                                </Link>
                                            </NextLink>
                                        </ListItem>
                                    ))}
                                </UnorderedList>
                            </GridItem>
                        ))}
                        <GridItem d={{ md: 'none', lg: 'grid' }}>{social}</GridItem>
                    </Grid>
                    <Box d={{ md: 'block', lg: 'none' }} paddingTop={'35px'}>
                        {social}
                    </Box>
                </Box>
                <Copyright />
            </Container>
        </Box>
    );
}
