import { Box, Text, Link, Image } from '@chakra-ui/react';

import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import NextLink from 'next/link';

const ContactUs = () => {
    const { t } = useTranslation('common');
    const router = useRouter();
    return (
        <>
            <Box flex={1}>
                <Text as={'span'} d="flex" alignItems="center" color="white">
                    <NextLink href={'tel:210 6848300'} passHref prefetch={false}>
                        <Link>
                            <Image
                                src={'/assets/phone-icon-white.svg'}
                                display={'inline-block'}
                                marginRight={'3px'}
                                marginTop={'3px'}
                                w={'15px'}
                                h={'15px'}
                                alt={'phone: 210 6848300'}
                            />
                        </Link>
                    </NextLink>
                    <NextLink href={'tel:210 6848300'} passHref prefetch={false}>
                        <Link>
                            <Text
                                as={'span'}
                                ml={'8px'}
                                mr={'16px'}
                                fontWeight={'bold'}
                                borderRight={'1px solid #FFFFFF'}
                                paddingRight={'1rem'}
                                fontFamily={'Open sans'}
                            >
                                210 6848300
                            </Text>
                        </Link>
                    </NextLink>
                </Text>
            </Box>
        </>
    );
};

export default ContactUs;
