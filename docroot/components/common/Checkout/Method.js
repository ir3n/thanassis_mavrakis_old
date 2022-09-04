import { Box, Button, Text, useToast, Checkbox } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import useTranslation from 'next-translate/useTranslation';
import { getErrorMessage } from 'utils/helpers';
import { useForm } from 'react-hook-form';
import { addPaymentMethod } from 'services/checkout';
import useCheckout from 'hooks/useCheckout';
import { useRouter } from 'next/router';
import AddressInput from './AddressInput';

export default function Method({ onSuccess, availablePaymentMethods, billingProfile, payment_method, checkoutId }) {
    const { t } = useTranslation('checkout');
    const [loading, setLoading] = useState(false);
    const [value, setValue] = useState(null);
    const toast = useToast();
    const router = useRouter();
    const [sameAsShipping, setSameAsShipping] = useState(true);
    const { register } = useForm();
    const { updateCheckoutData } = useCheckout();

    useEffect(() => {
        if (payment_method) {
            setValue(availablePaymentMethods.find((i) => i.key === payment_method));
        }
        //eslint-disable-next-line
    }, [payment_method]);

    const handleSubmit = async () => {
        try {
            setLoading(true);
            const { data: newCheckoutData } = await addPaymentMethod(router.locale, checkoutId, value.key);
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
                <Text textStyle={'md'} pb={'8px'} mb={'8px'} fontWeight={'bold'}>
                    {t('paymentMethods')}
                </Text>
                {availablePaymentMethods && availablePaymentMethods.length > 0 ? (
                    <>
                        {availablePaymentMethods.map((i) => {
                            /*  function paymentInstructions() {
                                return { __html: i.instructions };
                            }*/
                            return (
                                <Box w={'100%'} mb={'18px'} key={i.key}>
                                    <Box border={'0.5px solid #000000'} p={'15px 13px 13px 13px'} h={'48px'}>
                                        {/* <FormCheckBox label={'Πιστωτική / Χρεωστική / Προπληρωμένη Κάρτα'} /> */}
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
                    'no Available Methods'
                )}

                <Text textStyle={'md'} pt={'25px'} pb={'8px'} mb={'8px'} fontWeight={'bold'}>
                    {'ΔΙΕΥΘΥΝΣΗ ΧΡΕΩΣΗΣ'}
                </Text>
                <Box display="flex" flexDirection={'column'} justifyContent={'space-between'}>
                    <Box w={'100%'} mb={'18px'}>
                        <Box border={'0.5px solid #000000'} p={'15px 13px 13px 13px'} h={'48px'}>
                            <Checkbox
                                defaultChecked={true}
                                isChecked={sameAsShipping}
                                onChange={() => {
                                    setSameAsShipping(!sameAsShipping);
                                }}
                            >
                                {t('sameAddress')}
                            </Checkbox>
                        </Box>
                    </Box>
                    {sameAsShipping ? null : (
                        <Box w={'100%'} mb={'18px'}>
                            <AddressInput
                                // title={t('addBillingAddress')}
                                register={register}
                                // errors={errors}
                                setValue={setValue}
                            />
                        </Box>
                    )}
                </Box>
                <Box w={'100%'} mb={'18px'} textStyle={'md'}>
                    <Text mb={'3px'}>
                        {billingProfile?.address?.family_name}, {billingProfile?.address?.given_name}
                    </Text>
                    <Text mb={'3px'}>
                        {billingProfile?.address?.address_line1}, {billingProfile?.address?.locality},{' '}
                        {billingProfile?.address?.postal_code}
                    </Text>

                    <Text>{billingProfile?.telephone}</Text>
                </Box>
                <Box display="flex" justifyContent={'end'} mb={'18px'}>
                    <Box w={'48%'} mb={'18px'}>
                        <Button isLoading={loading} variant="green" w={'100%'} onClick={() => handleSubmit()}>
                            {t('continue')}
                        </Button>
                    </Box>
                </Box>
            </Box>
        </>
    );
}
