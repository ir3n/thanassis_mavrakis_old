import { Box, Image, Text, Link } from '@chakra-ui/react';
import useTranslation from 'next-translate/useTranslation';

export default function CartItem({
    item,
    quantity,
    order_id,
    order_item_id,
    handleRemoveItem,
    handleUpdateQuantity,
    path,
    image,
    sku,
    title,
    price
}) {
    const { t } = useTranslation('cart');

    return (
        <>
            <Box d={'flex'} py={'15px'} mr={'20px'} borderBottom={'1px solid #C4C4C4'}>
                <Box w={'20%'}>
                    <Image src={image} w={'100%'} h={'auto'} alt={''} />
                </Box>
                <Box w={'55%'} paddingLeft={'12px'}>
                    <Box textStyle={'caption'} d="flex" flexDirection={'column'}>
                        <Text pb={'8px'}>{title}</Text>
                        <Text pb={'8px'} color={'darkGrey'}>
                            {sku}
                        </Text>
                        <Text>{price}</Text>
                    </Box>
                </Box>
                <Box w={'25%'}>
                    <Box textStyle={'caption'} d="flex" flexDirection={'column'} h={'100%'} justifyContent={'center'}>
                        <Box
                            d={'flex'}
                            alignItems={'center'}
                            justifyContent={'space-around'}
                            border={'1px solid #000000'}
                            p={'20px 0'}
                            mb={'12px'}
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
                        <Link onClick={() => handleRemoveItem(item.order_item_id)}>
                            <Image m={'auto'} src={'/assets/remove-button.svg'} w={'12px'} h={'12px'} alt={'remove'} />
                        </Link>
                    </Box>
                </Box>
            </Box>
        </>
    );
}
