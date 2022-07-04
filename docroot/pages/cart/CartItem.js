import { Box, Link, Text, Image, useToast } from '@chakra-ui/react';
import useTranslation from 'next-translate/useTranslation';
import useCart from 'hooks/useCart';
import { useRouter } from 'next/router';
import NextLink from 'next/link';

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
    const toast = useToast();
    const { t } = useTranslation('cart');

    return (
        <>
            <Box display={'flex'} p={'18px 0'} borderBottom={'0.5px solid #919191'}>
                <Box w={{ base: '40%', lg: '40%' }} display={'flex'} flexDirection={{ base: 'column', lg: 'row' }}>
                    <Image w={'80px'} src={image} alt={''} />
                    <Box pl={{ base: '0px', lg: '12px' }} pt={{ base: '12px', lg: '0px' }} textStyle={'sm'}>
                        <Text pb={'8px'}>{title}</Text>
                        <Text pb={'8px'} color={'darkGrey'}>
                            {t('code')}
                            {sku}
                        </Text>
                    </Box>
                </Box>
                <Box w={{ base: '30%', lg: '20%' }}>
                    <Text textStyle={'sm'}>{price}</Text>
                </Box>
                <Box
                    w={{ base: '30%', lg: '20%' }}
                    textAlign={'center'}
                    display={{ base: 'flex', lg: 'block' }}
                    justifyContent={'flex-end'}
                    alignItems={'baseline'}
                >
                    <Box
                        display={'inline-flex'}
                        alignItems={'center'}
                        border={'1px solid #000000'}
                        p={'0px 5px'}
                        mb={'8px'}
                        mr={{ base: '8px', lg: '0px' }}
                    >
                        <Link
                            onClick={() => {
                                handleUpdateQuantity(item.order_item_id, Number(item.quantity) - 1, 'descendant');
                            }}
                        >
                            <Image src={'/assets/minus.svg'} w={'10px'} h={'10px'} alt={'remove'} />
                        </Link>
                        <Text p={'0px 15px'}>{'1'}</Text>
                        <Link
                            onClick={() => {
                                handleUpdateQuantity(item.order_item_id, Number(item.quantity) + 1, 'ascendant');
                            }}
                        >
                            <Image src={'/assets/plus.svg'} w={'12px'} h={'12px'} alt={'remove'} />
                        </Link>
                    </Box>
                    <Link onClick={() => handleRemoveItem(item.order_item_id)}>
                        <Image m={'auto'} src={'/assets/remove-button.svg'} w={'12px'} h={'12px'} alt={'remove'} />
                    </Link>
                </Box>
                <Box display={{ base: 'none', lg: 'block' }} w="20%" textAlign={'right'}>
                    <Text textStyle={'sm'}>{price}</Text>
                </Box>
            </Box>
        </>
    );
}
