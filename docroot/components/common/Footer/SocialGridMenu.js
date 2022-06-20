import { useRouter } from 'next/router';
import { Box, Link, Image } from '@chakra-ui/react';
import useTranslation from 'next-translate/useTranslation';
import NextLink from 'next/link';
import SocialIconsSection from './SocialIconsSection';
import SocialGridLinks from './SocialGridLinks';

export default function SocialGridMenu({}) {
    const router = useRouter();
    const { t } = useTranslation('footer');

    return (
        <Box>
            <SocialIconsSection />
            <SocialGridLinks />
        </Box>
    );
}
