import { Box, Button, Text, useToast, Checkbox } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import useTranslation from 'next-translate/useTranslation';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { addBillingAddress, addInvoice } from 'services/checkout';
import { getErrorMessage } from 'utils/helpers';
import AddressInput from './AddressInput';
import InvoiceInput from './InvoiceInput';
import useCheckout from 'hooks/useCheckout';

export default function BillingDetails({
    onSuccess,
    shippingProfile,
    checkoutId,
    is_invoice,
    vat_authority,
    vat,
    company_name,
    company_activity
}) {
    const { t } = useTranslation('checkout');
    const [loading, setLoading] = useState(false);
    const [isInvoice, setIsInvoice] = useState(false);
    const [sameAsShipping, setSameAsShipping] = useState(true);
    const { updateCheckoutData } = useCheckout();
    const toast = useToast();
    const {
        register,
        handleSubmit,

        setValue,
        formState: { errors }
    } = useForm({ defaultValues: { invoice: { is_invoice, vat, vat_authority, company_name, company_activity } } });

    const router = useRouter();

    useEffect(() => {
        setIsInvoice(is_invoice);
        if (is_invoice) {
            setValue('invoice', { is_invoice, vat, vat_authority, company_name, company_activity });
        } else {
            setValue('invoice', {});
        }
        //eslint-disable-next-line
    }, [is_invoice, vat, vat_authority, company_name, company_activity]);

    const onSubmit = async (data) => {
        let formData;
        if (sameAsShipping) {
            formData = { ...shippingProfile };
        } else {
            formData = {
                ...data,
                address: { ...data.address, langcode: router.locale }
            };
        }
        try {
            setLoading(true);
            let updatedData;
            await addBillingAddress(router.locale, checkoutId, { ...formData });
            if (isInvoice) {
                updatedData = await addInvoice(router.locale, checkoutId, { ...data.invoice, is_invoice: true });
            } else {
                updatedData = await addInvoice(router.locale, checkoutId, { is_invoice: false });
            }
            updateCheckoutData(updatedData);
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

    // console.log('isSameAddress: ', isSameAddress);

    return (
        <>
            <Box>
                <Text textStyle={'md'} fontWeight={'bold'} pb={'12px'} mt={'20px'}>
                    {t('shippingInformation')}
                </Text>
                <Box display="flex" flexDirection={'column'} justifyContent={'space-between'}>
                    <Box w={'100%'} mb={'18px'}>
                        <Box border={'0.5px solid #000000'} p={'15px 13px 13px 13px'} h={'48px'}>
                            <Checkbox
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
                            <AddressInput register={register} errors={errors} setValue={setValue} />
                        </Box>
                    )}
                </Box>
                <Text textStyle={'md'} fontWeight={'bold'} pb={'12px'} mt={'20px'}>
                    {t('documentType')}
                </Text>
                <Box display="flex" flexDirection={{ sm: 'column', lg: 'row' }} justifyContent={'space-between'}>
                    <Box w={{ sm: '100%', lg: '48%' }} mb={'18px'}>
                        <Box border={'0.5px solid #000000'} p={'15px 13px 13px 13px'} h={'48px'}>
                            <Checkbox
                                isChecked={!isInvoice}
                                onChange={() => {
                                    setIsInvoice(false);
                                }}
                            >
                                {t('receipt')}
                            </Checkbox>
                        </Box>
                    </Box>
                    <Box w={{ sm: '100%', lg: '48%' }} mb={'18px'}>
                        <Box border={'0.5px solid #000000'} p={'15px 13px 13px 13px'} h={'48px'}>
                            <Checkbox
                                isChecked={isInvoice}
                                onChange={() => {
                                    setIsInvoice(true);
                                }}
                            >
                                {t('invoice')}
                            </Checkbox>
                        </Box>
                    </Box>
                </Box>

                {isInvoice ? (
                    <Box mt={'25px'}>
                        <InvoiceInput register={register} errors={errors} />
                    </Box>
                ) : null}

                <Box display="flex" flexDirection={{ sm: 'column', lg: 'row' }} justifyContent={'end'} mb={'18px'}>
                    <Box as={'form'} w={{ sm: '100%', lg: '48%' }} mb={'18px'} onSubmit={handleSubmit(onSubmit)}>
                        <Button isLoading={loading} variant="green" w={'100%'} type={'submit'}>
                            {t('continue')}
                        </Button>
                    </Box>
                </Box>
            </Box>
        </>
    );
}
