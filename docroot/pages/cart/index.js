import { useContext } from 'react';
import MainContext from 'context';
import { Box, Flex, Link, Button, FormControl, FormLabel, Input, useBreakpointValue } from '@chakra-ui/react';
import useTranslation from 'next-translate/useTranslation';
import useCart from 'hooks/useCart';
import { useRouter } from 'next/router';
import CartItem from 'components/common/Cart/CartItem';
import CartSum from 'components/common/Cart/CartSum';
import Container from 'components/common/Container';
import TableTitle from 'components/common/Cart/TableTitle';
import ShippingNote from 'components/common/Cart/ShippingNote';
import ClearAll from 'components/common/Cart/ClearAll';

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

    const cartTableTitle = useBreakpointValue({
        base: <></>,
        sm: <></>,
        md: <></>,
        lg: <TableTitle />,
        xl: <TableTitle />,
        xxl: <TableTitle />
    });

    const shippingNoteBox = useBreakpointValue({
        base: <></>,
        sm: <></>,
        md: <></>,
        lg: <ShippingNote />,
        xl: <ShippingNote />,
        xxl: <ShippingNote />
    });

    const shippingNoteBoxMobile = useBreakpointValue({
        base: <ShippingNote />,
        sm: <ShippingNote />,
        md: <ShippingNote />,
        lg: <></>,
        xl: <></>,
        xxl: <></>
    });

    const clearAllMobile = useBreakpointValue({
        base: <ClearAll />,
        sm: <ClearAll />,
        md: <ClearAll />,
        lg: <></>,
        xl: <></>,
        xxl: <></>
    });

    const clearAll = useBreakpointValue({
        base: <></>,
        sm: <></>,
        md: <></>,
        lg: <ClearAll />,
        xl: <ClearAll />,
        xxl: <ClearAll />
    });

    return (
        <>
            <Box>
                <Container my={'40px'}>
                    <Box
                        textStyle={'subtitle'}
                        textAlign={{ base: 'center', lg: 'left' }}
                        textTransform={'uppercase'}
                        p={{ base: '0 0 25px 0', lg: '40px 0 25px 0' }}
                        fontWeight={'700'}
                    >
                        {'ΚΑΛΑΘΙ'}
                    </Box>
                    {shippingNoteBoxMobile}

                    <Flex
                        direction={{ base: 'column', lg: 'row' }}
                        borderTop={{ base: '1px solid #000000', lg: 'none' }}
                    >
                        <Box w={{ base: '100%', lg: '70%' }} marginRight={'10px'}>
                            {cartTableTitle}
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
                        </Box>
                        {clearAllMobile}
                        <Box
                            w={{ base: '100%', lg: '30%' }}
                            mt={{ base: '45px', lg: '0' }}
                            marginLeft={{ base: '0', lg: '10px' }}
                        >
                            <CartSum cartData={cartData} shippingNoteBox={shippingNoteBox} cart />
                        </Box>
                    </Flex>
                    {clearAll}
                </Container>
            </Box>
        </>
    );
}
