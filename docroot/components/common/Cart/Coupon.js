import { Box, Text, Button, FormControl, Link, Input } from '@chakra-ui/react';
import useTranslation from 'next-translate/useTranslation';
import NextLink from 'next/link';

export default function Coupon({ cartData }) {
    const { t } = useTranslation('cart');

    return (
        <>
            <Box>
                {cartData?.coupons || cartData?.coupons?.length === !null ? (
                    <Box mt={'8px'}>
                        <FormControl>
                            <Input id="cupon" h={'40px'} fontSize={'14px'} placeholder="Coupon Code" />
                        </FormControl>
                        <Text textStyle={'captionSm'} color={'grey'}>
                            {'Πληκτρολόγησε τον αριθμό του κουπονιού.'}
                        </Text>
                    </Box>
                ) : null}

                <NextLink href={'/' || '#'} passHref prefetch={false}>
                    <Link _hover="{ textDecoration: 'none' }">
                        <Button
                            variant="outlineBlack"
                            w={'100%'}
                            textTransform={'uppercase'}
                            textStyle={'md'}
                            mt={'15px'}
                        >
                            {'ΠΡΟΣΘΗΚΗ ΚΟΥΠΟΝΙΟΥ'}
                        </Button>
                    </Link>
                </NextLink>
            </Box>
        </>
    );
}
