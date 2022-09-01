import { useContext, memo, useEffect, useState, useRef } from 'react';
import MainContext from 'context';
import NextLink from 'next/link';
import {
    Box,
    Text,
    Link,
    Button,
    Image,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerContent,
    DrawerCloseButton,
    useBreakpointValue
} from '@chakra-ui/react';
import CartSvg from '../../../public/assets/cart-outline.svg';
import CartSvgBlack from '../../../public/assets/CartSvgBlack.svg';
import useTranslation from 'next-translate/useTranslation';
import useCart from 'hooks/useCart';
import CartItem from './CartItem';
import { useRouter } from 'next/router';
import Discount from './Discount';

export const MiniCart = ({ boxSize }) => {
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

    useEffect(() => {
        closeCart();
    }, [router.asPath]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
        // eslint-disable-next-line
    }, []);

    const handleScroll = () => {
        closeCart();
    };

    const goToCart = () => {
        router.push('/cart');
    };
    const goToCheckout = () => {
        router.push('/checkout');
    };

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

    const btnRef = useRef();
    const drawerSize = useBreakpointValue({ base: 'full', sm: 'full', md: 'textLg' });

    return (
        <>
            <Box
                display={'flex'}
                ml="16px"
                _hover={{ cursor: 'pointer' }}
                position={'relative'}
                className={'ammMiniCart__trigger'}
                onClick={toggleCart}
            >
                <CartSvg />

                {cartData?.order_items && cartData?.order_items.length > 0 ? (
                    <Box
                        className={'ammMiniCart__indicator'}
                        display={'flex'}
                        justifyContent={'center'}
                        alignItems={'center'}
                        borderRadius={'50%'}
                        position={'absolute'}
                        top={'-14px'}
                        right={'-8px'}
                        padding={'3px'}
                        w={'18px'}
                        h={'18px'}
                        lineHeight={1}
                    >
                        <Text textStyle={'captionSm'} fontWeight={'bold'} color={'white'} lineHeight={1}>
                            {cartData.order_items.length}
                        </Text>
                    </Box>
                ) : null}
            </Box>
            <Drawer isOpen={cartState} placement="right" onClose={closeCart} finalFocusRef={btnRef} size={drawerSize}>
                <DrawerContent
                    h={{ sm: '100vh', md: 'calc(100vh - 52px)' }}
                    // w={{ sm: '100vw !important', md: '50vw !important', xxxl: '30vw !important' }}
                    w={'25% !important'}
                    bottom={'0'}
                    top={'unset !important'}
                    p={{ sm: '0 30px 0 40px', md: '0 40px 0 40px' }}
                >
                    <DrawerCloseButton _focus={{}} _hover={'none'} right={'30px'} />
                    <DrawerHeader
                        mr={'20px'}
                        borderBottom={'2px solid #000000'}
                        display={'flex'}
                        alignItems={'center'}
                        justifyContent={'center'}
                    >
                        <Image
                            src={'/assets/shopping-cart-icon.png'}
                            width={'45px'}
                            height={'30px'}
                            pr={'12px'}
                            alt={'cart'}
                        />
                        <Text textAlign={'center'} pt={'7px'}>
                            {t('mycart')}{' '}
                            {cartData?.order_items && cartData?.order_items.length > 0 ? (
                                <Text color={'brand.900'} as={'span'} fontWeight={'normal'}>
                                    {` (${cartData.order_items.length})`}
                                </Text>
                            ) : null}
                        </Text>
                    </DrawerHeader>
                    <DrawerBody p={'15px 0'}>
                        {!cartData || !cartData.order_items || cartData.order_items.length === 0 ? (
                            <Box w={'100%'} h={'100%'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                                <Text textStyle={'titleMd'}>{t('empty')}</Text>
                            </Box>
                        ) : null}
                        {cartData?.order_items && cartData?.order_items.length > 0 ? (
                            <Box
                                opacity={removeLoading || updateLoading ? 0.5 : 1}
                                pointerEvents={removeLoading || updateLoading ? 'none' : 'auto'}
                                transition={'all 0.2s ease-in-out'}
                            >
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
                        {cartData?.adjustments && cartData?.adjustments.length > 0 ? (
                            <Box>
                                {cartData?.adjustments.map((i) => {
                                    return (
                                        <Discount
                                            type={i?.type}
                                            amount_formatted={i.amount_formatted}
                                            label={i.label}
                                            key={`discount-${i}`}
                                        />
                                    );
                                })}
                            </Box>
                        ) : null}
                    </DrawerBody>
                    {!cartData || !cartData.order_items || cartData.order_items.length === 0 ? null : (
                        <DrawerFooter
                            justifyContent={'center'}
                            p={'15px 0px'}
                            mr={'20px'}
                            borderTop={'2px solid #000000'}
                        >
                            <Box display={'flex'} flexDirection={'column'} w={'100%'}>
                                <Box display={'flex'} flexDirection={'row'} justifyContent={'space-between'}>
                                    <Text textStyle={'titleMd'}>{t('total')}</Text>
                                    <Text textStyle={'titleMd'}>{cartData.total_price}</Text>
                                </Box>
                                <Box display={'flex'} flexDirection={'column'}>
                                    <NextLink href={'/cart' || '#'} passHref prefetch={false}>
                                        <Link>
                                            <Button
                                                variant="outline"
                                                w={'100%'}
                                                textTransform={'uppercase'}
                                                textStyle={'text'}
                                                my={'10px'}
                                            >
                                                {t('mycart')}
                                            </Button>
                                        </Link>
                                    </NextLink>

                                    <Button variant="primary" w={'100%'} textTransform={'uppercase'} textStyle={'text'}>
                                        {t('checkout')}
                                    </Button>
                                </Box>
                            </Box>
                        </DrawerFooter>
                    )}
                </DrawerContent>
            </Drawer>
        </>
    );
};

export default memo(MiniCart);
