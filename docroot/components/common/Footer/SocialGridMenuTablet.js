import { useRouter } from 'next/router';
import { Box, Link, Image, Grid, GridItem } from '@chakra-ui/react';
import useTranslation from 'next-translate/useTranslation';
import NextLink from 'next/link';
import SocialIconsSection from './SocialIconsSection';
import SocialGridLinks from './SocialGridLinks';

export default function SocialGridMenuTablet({}) {
    const router = useRouter();
    const { t } = useTranslation('footer');

    return (
        <Grid templateColumns={{ base: 'repeat(3, 1fr)', lg: 'repeat(1, 1fr)' }} gap={6} color={'black'}>
            <GridItem>
                <SocialIconsSection />
            </GridItem>
            <GridItem>
                <SocialGridLinks />
            </GridItem>
        </Grid>
    );
}
