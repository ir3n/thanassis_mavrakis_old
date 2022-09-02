import { Box, Image, Text, Link } from '@chakra-ui/react';
import useTranslation from 'next-translate/useTranslation';

export default function CartItem({ item, quantity, handleRemoveItem, handleUpdateQuantity, image, title, price }) {
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

    return (
        <>
            <Box display={'flex'} py={'15px'} mr={{ base: '0', lg: '20px' }} borderBottom={'1px solid #C4C4C4'}>
                <Box w={'20%'}>
                    <Image src={image} w={'100%'} h={'auto'} alt={''} />
                </Box>
                <Box w={'40%'} paddingLeft={'12px'}>
                    <Box textStyle={'caption'} display="flex" flexDirection={'column'}>
                        <Text textStyle={'note'} fontWeight={'700'}>
                            {item?.brand}
                        </Text>
                        <Text noOfLines={1} textStyle={'note'}>
                            {title}
                        </Text>
                        <Text pb={'8px'} color={'darkGrey'} textStyle={'note'} fontWeight={'700'}>
                            {mlOrColor(item?.attribute_type)}
                        </Text>
                        <Text>{price}</Text>
                    </Box>
                </Box>
                <Box w={'40%'}>
                    <Box
                        textStyle={'caption'}
                        display="flex"
                        flexDirection={'row'}
                        h={'100%'}
                        w={'100%'}
                        justifyContent={'center'}
                        alignItems={'center'}
                    >
                        <Box
                            display={'flex'}
                            alignItems={'center'}
                            justifyContent={'space-around'}
                            border={'1px solid #000000'}
                            p={'7px 0'}
                            mr={'12px'}
                            w={'70%'}
                        >
                            <Link
                                onClick={() => {
                                    handleUpdateQuantity(item.order_item_id, Number(item.quantity) - 1, 'descendant');
                                }}
                            >
                                <Image src={'/assets/minus.svg'} w={'10px'} h={'10px'} alt={'remove'} />
                            </Link>
                            <Text>{parseInt(quantity)}</Text>
                            <Link
                                onClick={() => {
                                    handleUpdateQuantity(item.order_item_id, Number(item.quantity) + 1, 'ascendant');
                                }}
                            >
                                <Image src={'/assets/plus.svg'} w={'12px'} h={'12px'} alt={'add'} />
                            </Link>
                        </Box>
                        <Box>
                            <Link onClick={() => handleRemoveItem(item.order_item_id)}>
                                <Image
                                    m={'auto'}
                                    src={'/assets/remove-button.svg'}
                                    w={'12px'}
                                    h={'12px'}
                                    alt={'remove'}
                                />
                            </Link>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    );
}
