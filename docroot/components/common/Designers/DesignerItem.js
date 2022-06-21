import { Box, Image, Link, Text, AspectRatio } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import NextLink from 'next/link';

export default function DesignerItem() {
    const router = useRouter();

    return (
        <>
            <Box mb={'22px'}>
                <NextLink href={'/'} passHref prefetch={false}>
                    <Link>
                        <AspectRatio maxW="400px" ratio={1 / 1}>
                            <Image src={'/assets/designers-item.jpg'} objectFit="cover" alt={''} />
                        </AspectRatio>
                        <Text as={'h4'} textStyle={'h4'} pt={'12px'}>
                            {'Acrotectstudio'}
                        </Text>
                    </Link>
                </NextLink>
            </Box>
        </>
    );
}
