import { Box, Link, Image } from '@chakra-ui/react';
import NextLink from 'next/link';
import useTranslation from 'next-translate/useTranslation';

export default function SocialIconsSection() {
    const { t } = useTranslation('footer');

    return (
        <Box>
            <Box as="h4" textStyle={'caption'} paddingBottom={'15px'}>
                {t('followUs')}
            </Box>
            <Box d={'flex'}>
                <NextLink href={'https://web.facebook.com/benakishop'} passHref prefetch={false}>
                    <Link mr={'18px'} pos="relative" _hover={{ textDecoration: 'none' }}>
                        <Image src={'/assets/social/Facebook.png'} width={'19px'} height={'19px'} alt={'Facebook'} />
                    </Link>
                </NextLink>
                <NextLink href={'https://www.instagram.com/benakishop/'} passHref prefetch={false}>
                    <Link mr={'18px'} pos="relative" _hover={{ textDecoration: 'none' }}>
                        <Image src={'/assets/social/Instagram.png'} width={'19px'} height={'19px'} alt={'Instagram'} />
                    </Link>
                </NextLink>
                <NextLink href={'https://www.linkedin.com/company/benakishop/'} passHref prefetch={false}>
                    <Link mr={'18px'} pos="relative" _hover={{ textDecoration: 'none' }}>
                        <Image src={'/assets/social/Linkedin.png'} width={'19px'} height={'19px'} alt={'Linkedin'} />
                    </Link>
                </NextLink>
                <NextLink href={'https://gr.pinterest.com/benakishop/'} passHref prefetch={false}>
                    <Link pos="relative" _hover={{ textDecoration: 'none' }}>
                        <Image src={'/assets/social/Pinterest.png'} width={'19px'} height={'19px'} alt={'Pinterest'} />
                    </Link>
                </NextLink>
            </Box>
        </Box>
    );
}
