import { Box, Button, Checkbox, useToast } from '@chakra-ui/react';
import useTranslation from 'next-translate/useTranslation';
import { checkoutShippingMethod } from 'services/checkout';
import { useState, useEffect } from 'react';
import { getErrorMessage } from 'utils/helpers';
import useCheckout from 'hooks/useCheckout';
import { useRouter } from 'next/router';

export default function Shipping({
    checkoutId,
    availableShippingMethods,
    onSuccess,
    shipping_method,
    shipping_extra_options,
    orderComments,
    giftMessage,
    giftVariations
}) {
    const { t } = useTranslation('checkout');
    const [loading, setLoading] = useState(false);
    const [shippingExtraOptions, setShippingExtraOptions] = useState(null);
    const [value, setValue] = useState(null);
    const [hasComment, setHasComment] = useState(false);
    const [hasGiftWrap, setHasGiftWrap] = useState(false);
    const [comment, setComment] = useState('');
    const [giftComment, setGiftComment] = useState('');
    const [orderItemIds, setOrderItemsIds] = useState([]);
    const [pickUpList, setPickUpList] = useState([]);
    const [flatRateList, setFlatRateList] = useState([]);
    const [showPickUpList, setShowPickUpList] = useState(false);
    const { checkoutData, updateCheckoutData } = useCheckout();

    const toast = useToast();
    const router = useRouter();

    useEffect(() => {
        orderComments && setHasComment(true);
        orderComments && setComment(orderComments);
        giftVariations && giftVariations.length > 0 && setHasGiftWrap(true);
        giftVariations && giftVariations.length > 0 && setGiftComment(giftMessage);
    }, [orderComments, giftVariations, giftMessage]);

    useEffect(() => {
        if (giftVariations && giftVariations.length > 0) {
            setOrderItemsIds(giftVariations.map((i) => Number(i)));
        }
    }, [giftVariations]);

    useEffect(() => {
        if (shipping_method) {
            setShowPickUpList(Boolean(shipping_method.type === 'pickup'));
        }
    }, [shipping_method]);

    useEffect(() => {
        if (shipping_extra_options) {
            setShippingExtraOptions(shipping_extra_options);
        }
    }, [shipping_extra_options]);

    useEffect(() => {
        if (availableShippingMethods && availableShippingMethods.length > 0) {
            setFlatRateList(availableShippingMethods.filter((i) => i.type !== 'pickup'));
            setPickUpList(availableShippingMethods.filter((i) => i.type === 'pickup'));
        }
    }, [availableShippingMethods]);

    useEffect(() => {
        if (shipping_method?.key) {
            setValue({ ...shipping_method });
        }
    }, [shipping_method]);

    const handleSubmit = async () => {
        try {
            setLoading(true);
            const { data: newCheckoutData } = await checkoutShippingMethod(
                router.locale,
                checkoutId,
                value.key,
                shippingExtraOptions
            );
            updateCheckoutData(newCheckoutData);
            onSuccess();
        } catch (err) {
            console.log(err);
            toast({
                description: getErrorMessage(err),
                position: 'top',
                status: 'error',
                duration: 5000,
                isClosable: true
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Box mt={'18px'}>
                <Box display="flex" flexDirection={{ sm: 'column', lg: 'row' }} justifyContent={'space-between'}>
                    {availableShippingMethods && availableShippingMethods.length > 0 ? (
                        <>
                            {availableShippingMethods.map((i) => {
                                return (
                                    <Box w={{ sm: '100%', lg: '48%' }} mb={'18px'} key={i.key}>
                                        <Box border={'0.5px solid #000000'} p={'15px 13px 13px 13px'} h={'48px'}>
                                            <Checkbox
                                                onChange={() => {
                                                    setValue(i);
                                                }}
                                                isChecked={i.key === value?.key}
                                            >
                                                {i.label}
                                            </Checkbox>
                                        </Box>
                                    </Box>
                                );
                            })}
                        </>
                    ) : (
                        t('noAvailableMethods')
                    )}
                </Box>

                <Box display="flex" flexDirection={{ sm: 'column', lg: 'row' }} justifyContent={'end'} mb={'18px'}>
                    <Box w={{ sm: '100%', lg: '48%' }} mb={'18px'}>
                        <Button isLoading={loading} variant="green" w={'100%'} onClick={() => handleSubmit()}>
                            {t('continue')}
                        </Button>
                    </Box>
                </Box>
            </Box>
        </>
    );
}
