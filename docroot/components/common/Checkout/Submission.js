import { Box, Button, useToast, Textarea, Checkbox } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import useTranslation from 'next-translate/useTranslation';
import { getErrorMessage } from 'utils/helpers';
import { addOrderComment } from 'services/checkout';
import { useRouter } from 'next/router';
import { paymentComplete } from 'services/checkout';

export default function Submission({ orderComments, checkoutData, checkoutId, onSuccess }) {
    const { t } = useTranslation('checkout');
    const [loading, setLoading] = useState(false);
    const [hasComment, setHasComment] = useState(false);
    const [comment, setComment] = useState('');
    const [checkTerms, setCheckTerms] = useState(false);
    const router = useRouter();
    // const { checkoutData, updateCheckoutData } = useCheckout();

    const toast = useToast();

    useEffect(() => {
        orderComments && setHasComment(true);
        orderComments && setComment(orderComments);
    }, [orderComments]);

    const handleSubmit = async () => {
        try {
            setLoading(true);
            if (hasComment && comment) {
                await addOrderComment(router.locale, checkoutId, comment);
            }

            if (checkoutData?.payment_details?.post_url) {
                setPaymentDetails(checkoutData?.payment_details);
            } else {
                const { data: orderCompletedData } = await paymentComplete(router.locale, checkoutId, {
                    status: 'success'
                });
                setLoading(false);
                router.push({
                    pathname: '/checkout/success',
                    query: { orderNumber: orderCompletedData?.order_number }
                });
            }
            onSuccess();
        } catch (err) {
            console.log(err);
            toast({
                title: t('error'),
                description: getErrorMessage(err),
                position: 'bottom-right',
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
                <Textarea
                    placeholder={t('comment')}
                    maxChars={50}
                    id={'comment'}
                    controlProps={{ mb: '15px' }}
                    inputProps={{
                        value: comment,
                        onChange: (ev) => {
                            const val = ev.target.value;
                            if (val && val.length <= 200) {
                                setComment(val);
                            } else if (val) {
                                setComment(val.slice(0, 200));
                            } else {
                                setComment('');
                            }
                        }
                    }}
                />

                <Box w={'100%'} mb={'18px'}>
                    <Box p={'8px'}>
                        <Checkbox
                            onChange={() => {
                                setCheckTerms(!checkTerms);
                            }}
                        >
                            {t('acceptTerms')}
                        </Checkbox>
                    </Box>
                </Box>

                <Box display="flex" justifyContent={'end'} mb={'18px'}>
                    <Box w={'48%'} mb={'18px'}>
                        <Button variant="green" w={'100%'} onClick={() => handleSubmit()}>
                            {t('continue')}
                        </Button>
                    </Box>
                </Box>
            </Box>
        </>
    );
}
