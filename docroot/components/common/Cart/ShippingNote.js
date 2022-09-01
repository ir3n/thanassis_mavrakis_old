import { Box, Image, Text, Button, FormControl, Link, Input, Checkbox } from '@chakra-ui/react';
import useTranslation from 'next-translate/useTranslation';
import NextLink from 'next/link';
import TotalPriceBox from '../TotalPriceBox';
import Coupon from './Coupon';

export default function ShippingNote({ cartData, cart }) {
    const { t } = useTranslation('cart');

    return (
        <>
            <Box
                backgroundColor={'#F4F4F4'}
                mb={'10px'}
                p={'12px 4px 12px 4px'}
                display={'flex'}
                alignItems={'center'}
                justifyContent={'space-evenly'}
            >
                <Image src={'/assets/shipping.png'} h="23px" w="23px" objectFit={'contain'} alt={'shipping-icon'} />
                <Text textStyle={'note'} color={'red'}>
                    {'Με 10€ ακόμα εξασφαλίζετε ΔΩΡΕΑΝ μεταφορικά'}
                </Text>
            </Box>
        </>
    );
}
