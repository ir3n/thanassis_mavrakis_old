import { Box, Text, Button, Link } from '@chakra-ui/react';
import useTranslation from 'next-translate/useTranslation';
import NextLink from 'next/link';
import TotalPriceBox from '../TotalPriceBox';
import Coupon from './Coupon';

export default function CartSum({ cartData, shippingNoteBox, cart }) {
    const { t } = useTranslation('cart');

    return (
        <>
            <Box>
                {shippingNoteBox}
                <Box>
                    <Box p={'25px'} backgroundColor={'#F4F4F4'}>
                        <Text
                            borderBottom={'1px solid #000000'}
                            pb={'8px'}
                            mb={'8px'}
                            textStyle={'caption'}
                            color={'gray'}
                            fontWeight={'bold'}
                        >
                            {'ΠΕΡΙΛΗΨΗ'}
                        </Text>

                        <TotalPriceBox data={cartData} />
                    </Box>
                    {cartData?.adjustments?.map((i) => {
                        switch (i?.type) {
                            case 'shipping':
                                return (
                                    <Box
                                        display="flex"
                                        textAlign={'right'}
                                        justifyContent={'space-between'}
                                        py={'10px'}
                                        borderBottom={'1px solid #CDCDCD'}
                                    >
                                        <Text>{i?.label}</Text>
                                        <Text>{i?.amount_formatted}</Text>
                                    </Box>
                                );
                            case 'custom':
                                return (
                                    <Box
                                        display="flex"
                                        textAlign={'right'}
                                        justifyContent={'space-between'}
                                        py={'10px'}
                                        borderBottom={'1px solid #CDCDCD'}
                                    >
                                        <Text>{i?.label}</Text>
                                        <Text>{i?.amount_formatted}</Text>
                                    </Box>
                                );
                        }
                    })}

                    <Coupon cartData={cartData} />

                    {cart ? (
                        <NextLink href={'/checkout' || '#'} passHref prefetch={false}>
                            <Link _hover="{ textDecoration: 'none' }">
                                <Button
                                    variant="green"
                                    w={'100%'}
                                    textTransform={'uppercase'}
                                    textStyle={'md'}
                                    mt={'12px'}
                                >
                                    {'ΑΓΟΡΑ'}
                                </Button>
                            </Link>
                        </NextLink>
                    ) : (
                        ''
                    )}
                </Box>
            </Box>
        </>
    );
}
