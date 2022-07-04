import { useContext } from 'react';
import MainContext from 'context';
import { Box, Checkbox, Text, Button, FormControl, FormLabel, Input } from '@chakra-ui/react';
import useTranslation from 'next-translate/useTranslation';
import useCart from 'hooks/useCart';
import { useRouter } from 'next/router';
import CartItem from './CartItem';
import Container from 'components/common/Container';

export default function Cart() {
    const { t } = useTranslation('cart');
    const {
        cartData,
        remove: removeItemFromCart,
        update: updateItemFromCart,
        removeLoading,
        updateLoading
    } = useCart();
    const router = useRouter();
    const { toggleCart, closeCart, cartState } = useContext(MainContext);

    const handleUpdateQuantity = (id, quantity, type) => {
        if (quantity === 0) {
            handleRemoveItem(id);
            return;
        }

        updateItemFromCart({
            order_id: cartData.order_id,
            order_item_id: id,
            quantity: quantity
        });
    };

    const handleRemoveItem = (order_item_id) => {
        removeItemFromCart({ order_id: cartData.order_id, order_item_id });
    };

    return (
        <>
            <Box>
                <Box as={'h1'} textStyle={'h1'} textAlign={'center'} py={'40px'} backgroundColor={'brand'}>
                    {t('mycartTitle')}
                </Box>
                <Container my={'40px'}>
                    <Box display={'flex'} borderBottom={'2px solid #FF8234'}>
                        <Box w={'40%'} display={'flex'}>
                            <Text textStyle={'md'} pb={'8px'}>
                                {t('item')}
                            </Text>
                        </Box>
                        <Box w={{ base: '30%', lg: '20%' }}>
                            <Text textStyle={'md'} pb={'8px'}>
                                {t('price')}
                            </Text>
                        </Box>
                        <Box w={{ base: '30%', lg: '20%' }} textAlign={{ base: 'right', lg: 'center' }}>
                            <Text textStyle={'md'} pb={'8px'}>
                                {t('quantity')}
                            </Text>
                        </Box>
                        <Box
                            display={{ base: 'none', lg: 'block' }}
                            w={{ base: '25%', lg: '20%' }}
                            textAlign={{ lg: 'right' }}
                        >
                            <Text textStyle={'md'} pb={'8px'}>
                                {t('subtotal')}
                            </Text>
                        </Box>
                    </Box>

                    {cartData?.order_items && cartData?.order_items.length > 0 ? (
                        <Box>
                            {cartData?.order_items.map((i) => {
                                return (
                                    <CartItem
                                        key={i.order_item_id}
                                        order_id={cartData.order_id}
                                        handleRemoveItem={handleRemoveItem}
                                        handleUpdateQuantity={handleUpdateQuantity}
                                        quantity={i.quantity}
                                        item={i}
                                        path={i.path}
                                        image={i.image}
                                        sku={i.sku}
                                        price={i.price}
                                        title={i.product_title}
                                    />
                                );
                            })}
                        </Box>
                    ) : null}

                    <Box display={'flex'} justifyContent={'end'}>
                        <Box w={{ base: '100%', lg: '35%' }}>
                            {!cartData || !cartData.order_items || cartData.order_items.length === 0 ? null : (
                                <Box display={'flex'} justifyContent={'end'} textAlign={'right'} p={'18px 0px 30px 0px'}>
                                    <Text textStyle={'md'} pb={'8px'} pr={'20%'}>
                                        {t('total')}
                                    </Text>
                                    <Text textStyle={'sm'}>{cartData.total_price}</Text>
                                </Box>
                            )}

                            <FormControl>
                                <FormLabel htmlFor="cupon">
                                    <Text textStyle={'sm'}>Κουπόνια</Text>
                                </FormLabel>
                                <Input id="cupon" fontSize={'14px'} placeholder="Κουπόνι Έκπτωσης" />
                            </FormControl>
                            <Button
                                variant="primary"
                                w={'75%'}
                                textTransform={'uppercase'}
                                textStyle={'md'}
                                mt={'12px'}
                            >
                                {'checkout'}
                            </Button>
                            <Checkbox className="checkBoxCart">
                                {`Με την εγγραφή σας αποδέχεστε την Πολιτική Απορρήτου και τους 'Ορους Χρήσης`}
                            </Checkbox>
                        </Box>
                    </Box>
                </Container>

                {/* {cartData?.order_items && cartData?.order_items.length > 0 ? (
                    <Box>
                        {cartData?.order_items.map((i) => {
                            return (
                                <CartItem
                                    key={i.order_item_id}
                                    order_id={cartData.order_id}
                                    handleRemoveItem={handleRemoveItem}
                                    handleUpdateQuantity={handleUpdateQuantity}
                                    quantity={i.quantity}
                                    item={i}
                                    path={i.path}
                                    image={i.image}
                                    sku={i.sku}
                                    price={i.price}
                                    title={i.product_title}
                                />
                            );
                        })}
                    </Box>
                ) : null} */}
            </Box>
        </>
    );
}
