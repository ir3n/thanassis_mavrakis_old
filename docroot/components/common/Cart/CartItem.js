import { Box, Link, Text, Image, useToast, Flex, Button, useBreakpointValue } from '@chakra-ui/react';
import useTranslation from 'next-translate/useTranslation';
import PriceTitleMobile from './PriceTitleMobile';

export default function CartItem({ item, handleRemoveItem, handleUpdateQuantity, image, sku, unit_price, price }) {
    const toast = useToast();
    const { t } = useTranslation('cart');

    const mlOrColor = () => {
        switch (item?.attribute_type) {
            case 'fragrance':
                return 'Ποσότητα ml ' + item?.attribute_name;
            case 'makeup':
                return 'Απόχρωση ' + item?.attribute_name;
            default:
                return '';
        }
    };

    const priceTitleMobile = useBreakpointValue({
        base: <PriceTitleMobile />,
        sm: <PriceTitleMobile />,
        md: <PriceTitleMobile />,
        lg: <></>,
        xl: <></>,
        xxl: <></>
    });

    return (
        <>
            <Box
                display={{ base: 'block', lg: 'flex' }}
                p={{ base: '18px 0 35px 0', lg: '18px 0' }}
                borderBottom={'0.5px solid #919191'}
            >
                <Flex w={{ base: '100%', lg: '45%' }} direction={'row'}>
                    <Image w={'80px'} src={image} alt={''} />
                    <Box
                        pl={{ base: '0px', lg: '12px' }}
                        pt={{ base: '12px', lg: '0px' }}
                        ml={{ base: '10px', lg: '0' }}
                        mr={{ base: '0', lg: '40px' }}
                        textStyle={'sm'}
                    >
                        <Text pb={'8px'} textStyle={'caption'}>
                            <Box as={'span'} fontWeight={'700'}>
                                {item?.brand}{' '}
                            </Box>
                            {item?.variation_title}
                        </Text>
                        <Text pb={'8px'} color={'darkGrey'} fontWeight={'700'}>
                            {mlOrColor(item?.attribute_type)}
                        </Text>

                        {item?.attribute_type === 'fragrance' && item?.essence_quantity > 0 ? (
                            <Text pb={'8px'} color={'darkGrey'} fontWeight={'700'}>
                                {'Δόσεις ' + item?.essence_quantity}
                            </Text>
                        ) : (
                            ''
                        )}
                    </Box>
                </Flex>
                {priceTitleMobile}
                <Box
                    w={{ base: '100%', lg: '55%' }}
                    display={'flex'}
                    mt={{ base: '10px', lg: '0' }}
                    mb={{ base: '10px', lg: '0' }}
                >
                    <Box
                        w={{ base: '33%', lg: '27%' }}
                        display={'flex'}
                        flexDirection={'column'}
                        alignItems={'left'}
                        justifyContent={{ base: 'center', lg: 'center' }}
                    >
                        <Text textStyle={'sm'}>{unit_price}</Text>
                    </Box>
                    <Box
                        w={{ base: '33%', lg: '27%' }}
                        textAlign={'center'}
                        display={'flex'}
                        justifyContent={{ base: 'center', lg: 'left' }}
                        alignItems={'center'}
                    >
                        <Box
                            display={'inline-flex'}
                            alignItems={'center'}
                            border={'1px solid #000000'}
                            p={'0px 5px'}
                            mb={{ base: '0', lg: '8px' }}
                            mr={'0px'}
                        >
                            <Link
                                onClick={() => {
                                    handleUpdateQuantity(item.order_item_id, Number(item.quantity) - 1, 'descendant');
                                }}
                            >
                                <Image src={'/assets/minus.svg'} w={'10px'} h={'10px'} alt={'remove'} />
                            </Link>
                            <Text p={'0px 15px'}>{item?.quantity}</Text>
                            <Link
                                onClick={() => {
                                    handleUpdateQuantity(item.order_item_id, Number(item.quantity) + 1, 'ascendant');
                                }}
                            >
                                <Image src={'/assets/plus.svg'} w={'12px'} h={'12px'} alt={'remove'} />
                            </Link>
                        </Box>
                    </Box>
                    <Box
                        display={'flex'}
                        alignItems={'center'}
                        justifyContent={{ base: 'right', lg: 'left' }}
                        w={{ base: '33%', lg: '36%' }}
                    >
                        <Text textStyle={'sm'}>{price}</Text>
                    </Box>
                    <Box
                        display={{ base: 'none', lg: 'flex' }}
                        alignItems={'center'}
                        justifyContent={{ base: 'center', lg: 'flex-end' }}
                        w={'10%'}
                    >
                        <Link onClick={() => handleRemoveItem(item.order_item_id)}>
                            <Image
                                ml={'auto'}
                                mr={'30px'}
                                src={'/assets/close.png'}
                                w={'25px'}
                                h={'25px'}
                                alt={'remove'}
                            />
                        </Link>
                    </Box>
                </Box>
                <Link _hover="{ textDecoration: 'none' }" display={{ base: 'block', lg: 'none' }}>
                    <Button
                        variant="outlineBlack"
                        w={'100%'}
                        textTransform={'uppercase'}
                        textStyle={'md'}
                        mt={'12px'}
                        onClick={() => handleRemoveItem(item.order_item_id)}
                    >
                        {'Διαγραφή απο το καλάθι'}
                    </Button>
                </Link>
            </Box>
        </>
    );
}
